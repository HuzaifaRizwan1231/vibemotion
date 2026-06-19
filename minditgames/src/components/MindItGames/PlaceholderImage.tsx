import { useState } from "react";
import type { ReactNode } from "react";

interface PlaceholderImageProps {
  src?: string;
  alt: string;
  icon: ReactNode;
  /** Tailwind classes controlling size/shape of the container */
  className?: string;
  /** Visual accent for the placeholder gradient */
  accent?: "blue" | "orange" | "violet";
  /** Optional label shown beneath the icon in placeholder state */
  label?: string;
}

const accentGradients: Record<string, string> = {
  blue: "from-brand-blue/25 via-brand-violet/15 to-transparent",
  orange: "from-brand-orange/25 via-brand-violet/15 to-transparent",
  violet: "from-brand-violet/25 via-brand-blue/15 to-transparent",
};

/**
 * Renders a real <img> when `src` is provided AND loads successfully.
 * Falls back to a branded gradient + icon placeholder otherwise —
 * so the layout never breaks while real assets are being added.
 */
const PlaceholderImage = ({
  src,
  alt,
  icon,
  className = "",
  accent = "blue",
  label,
}: PlaceholderImageProps) => {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  if (showPlaceholder) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-brand-surface2 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accentGradients[accent]}`}
        />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:20px_20px]" />
        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand-blue-soft">
          {icon}
        </div>
        {label && (
          <span className="relative z-10 text-xs font-medium tracking-wide text-slate-400">
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={`/minditgames/${src}`}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

export default PlaceholderImage;
