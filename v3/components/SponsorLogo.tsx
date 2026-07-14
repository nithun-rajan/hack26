"use client";

import { useState } from "react";

// Renders a sponsor's logo from /public/sponsors. If the file is missing or
// fails to load, it gracefully falls back to the sponsor's name as text, so the
// wall never shows a broken image.
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function SponsorLogo({ name, logo }: { name: string; logo?: string | null }) {
  const [broken, setBroken] = useState(false);

  if (!logo || broken) {
    return (
      <span className="text-base font-medium text-violet-200/70 transition-colors group-hover:text-white">
        {name}
      </span>
    );
  }

  return (
    <img
      src={`${base}/sponsors/${logo}`}
      alt={name}
      loading="lazy"
      onError={() => setBroken(true)}
      className="max-h-14 w-auto max-w-[80%] object-contain opacity-80 transition-opacity duration-200 group-hover:opacity-100"
    />
  );
}
