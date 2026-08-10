"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";

/**
 * Shows the profile photo from `profile.avatar`. Until that file exists
 * (or if it fails to load) it gracefully falls back to initials on a
 * a solid block, so the site still looks intentional.
 *
 * Served through next/image so the source JPEG gets resized and re-encoded
 * to WebP rather than shipped at full weight. It's above the fold, so it
 * carries `priority`.
 */
export function Avatar({ className = "" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!failed ? (
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          priority
          sizes="(min-width: 768px) 320px, 260px"
          onError={() => setFailed(true)}
          className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
        />
      ) : (
        <div className="grid h-full w-full place-items-center bg-accent text-white">
          <span className="text-5xl font-semibold tracking-tight sm:text-6xl">
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}
