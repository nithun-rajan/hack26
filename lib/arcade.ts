// Tiny event bus for game moments. Anything can call unlock() and the
// Achievements component (mounted in the root layout) renders the toast.

export type Achievement = { id: string; title: string };

export function unlock(id: string, title: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<Achievement>("arcade:achievement", { detail: { id, title } }));
}
