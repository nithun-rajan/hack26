"use client";

import { useState } from "react";

// Renders a sponsor's logo on a white tile so every brand — colored, black or
// otherwise — reads consistently against the dark wall. Files live in
// /public/sponsors. If the file is missing or fails to load it falls back to the
// sponsor's name as text, so the wall never shows a broken image.
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function SponsorLogo({ name, logo }: { name: string; logo?: string | null }) {
  const [broken, setBroken] = useState(false);
  const showImage = logo && !broken;

  return (
    <div className="flex h-20 w-full items-center justify-center bg-white px-5 transition-transform duration-200 group-hover:scale-[1.03]">
      {showImage ? (
        <img
          src={`${base}/sponsors/${logo}`}
          alt={name}
          loading="lazy"
          onError={() => setBroken(true)}
          className="max-h-12 w-auto max-w-full object-contain"
        />
      ) : (
        <span className="text-center text-sm font-semibold text-violet-950">{name}</span>
      )}
    </div>
  );
}
