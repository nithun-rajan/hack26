"use client";

// Retro sound system — everything is synthesized live with the Web Audio API.
// The BGM is an original 16-step chiptune loop (square-wave lead arpeggio over
// an Am–F–G–E triangle bass with a noise hat). No audio files, no samples.

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

const midiHz = (n: number) => 440 * Math.pow(2, (n - 69) / 12);

class Chiptune {
  ctx: AudioContext;
  bus: GainNode;
  private timer: number | null = null;
  private step = 0;
  private nextTime = 0;
  private readonly tempo = 132; // eighth-note grid

  // 0 = rest. Chords: Am | F | G | E — one bar of arpeggio each.
  private readonly bass = [45, 0, 45, 45, 41, 0, 41, 41, 43, 0, 43, 43, 40, 0, 40, 43];
  private readonly lead = [69, 72, 76, 81, 65, 69, 72, 77, 67, 71, 74, 79, 64, 68, 71, 76];
  private readonly hat = [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1];

  constructor() {
    this.ctx = new AudioContext();
    this.bus = this.ctx.createGain();
    this.bus.gain.value = 0.05;
    this.bus.connect(this.ctx.destination);
  }

  start() {
    void this.ctx.resume();
    if (this.timer !== null) return;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.06;
    this.timer = window.setInterval(() => this.schedule(), 25);
  }

  stop() {
    if (this.timer !== null) clearInterval(this.timer);
    this.timer = null;
  }

  private schedule() {
    const spb = 60 / this.tempo / 2;
    while (this.nextTime < this.ctx.currentTime + 0.12) {
      const s = this.step % 16;
      const bar = Math.floor(this.step / 16) % 4;
      const b = this.bass[s];
      if (b) this.tone(b, this.nextTime, spb * 0.85, "triangle", 1.5);
      const l = this.lead[s];
      // lead sits out every 4th bar so the loop breathes
      if (l && bar !== 3) this.tone(l, this.nextTime, spb * 0.5, "square", 0.42);
      if (this.hat[s]) this.noise(this.nextTime, 0.025, 0.25);
      this.nextTime += spb;
      this.step++;
    }
  }

  private tone(midi: number, t: number, dur: number, type: OscillatorType, vol: number) {
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = midiHz(midi);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(g).connect(this.bus);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  }

  private noise(t: number, dur: number, vol: number) {
    const len = Math.max(1, Math.floor(this.ctx.sampleRate * dur));
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = this.ctx.createBufferSource();
    const g = this.ctx.createGain();
    g.gain.value = vol;
    src.buffer = buf;
    src.connect(g).connect(this.bus);
    src.start(t);
  }

  /** short UI blip for menu hovers */
  blip() {
    void this.ctx.resume();
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(880, t);
    osc.frequency.setValueAtTime(1320, t + 0.04);
    g.gain.setValueAtTime(0.5, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
    osc.connect(g).connect(this.bus);
    osc.start(t);
    osc.stop(t + 0.09);
  }

  /** two detuned squares gliding down — the ship's foghorn */
  horn() {
    void this.ctx.resume();
    const t = this.ctx.currentTime;
    for (const detune of [0, 7]) {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(midiHz(45) * Math.pow(2, detune / 1200), t);
      osc.frequency.exponentialRampToValueAtTime(midiHz(41), t + 0.7);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.9, t + 0.05);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.9);
      osc.connect(g).connect(this.bus);
      osc.start(t);
      osc.stop(t + 1);
    }
  }
}

type SoundApi = {
  on: boolean;
  toggle: () => void;
  blip: () => void;
  horn: () => void;
};

const SoundContext = createContext<SoundApi>({
  on: false,
  toggle: () => {},
  blip: () => {},
  horn: () => {},
});

export function SoundProvider({ children }: { children: ReactNode }) {
  const engine = useRef<Chiptune | null>(null);
  const [on, setOn] = useState(false);

  const ensure = useCallback(() => {
    if (!engine.current) engine.current = new Chiptune();
    return engine.current;
  }, []);

  const toggle = useCallback(() => {
    setOn((prev) => {
      const c = ensure();
      if (prev) c.stop();
      else c.start();
      return !prev;
    });
  }, [ensure]);

  const blip = useCallback(() => {
    if (engine.current && on) engine.current.blip();
  }, [on]);

  // the horn is an explicit click on the ship, so it plays even with BGM off
  const horn = useCallback(() => ensure().horn(), [ensure]);

  const api = useMemo(() => ({ on, toggle, blip, horn }), [on, toggle, blip, horn]);

  return <SoundContext.Provider value={api}>{children}</SoundContext.Provider>;
}

export const useSound = () => useContext(SoundContext);
