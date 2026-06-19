import { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Download,
  Gamepad2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Apple,
} from "lucide-react";
import type { Game } from "../../data/games.ts";
import PlaceholderImage from "./PlaceholderImage.tsx";

interface GameCardProps {
  game: Game;
  /** Reverses the layout (image/text order) for visual rhythm in a list */
  reverse?: boolean;
}

const accentBorder: Record<Game["accent"], string> = {
  blue: "group-hover:border-brand-blue/50",
  orange: "group-hover:border-brand-orange/50",
};

const accentGlow: Record<Game["accent"], string> = {
  blue: "hover:shadow-glow",
  orange: "hover:shadow-glow-orange",
};

const GameCard = ({ game, reverse = false }: GameCardProps) => {
  const [activeShot, setActiveShot] = useState(0);

  const nextShot = () =>
    setActiveShot((i) => (i + 1) % game.screenshots.length);

  const prevShot = () =>
    setActiveShot(
      (i) => (i - 1 + game.screenshots.length) % game.screenshots.length,
    );

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`group overflow-hidden rounded-3xl border border-brand-border bg-brand-surface/70 transition-all duration-500 ${accentBorder[game.accent]} ${accentGlow[game.accent]}`}
    >
      <div
        className={`grid lg:grid-cols-2 ${reverse ? "lg:[direction:rtl]" : ""}`}
      >
        {/* Visual side */}
        <div className="relative lg:[direction:ltr]">
          {/* Banner */}
          <PlaceholderImage
            src={game.banner}
            alt={`${game.title} feature graphic`}
            icon={<Gamepad2 size={26} />}
            label="Feature graphic"
            accent={game.accent}
            className="aspect-[16/10] w-full object-cover lg:h-full"
          />

          {/* New badge */}
          {game.isNew && (
            <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-orange to-brand-violet px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-card">
              <Sparkles size={12} />
              New
            </span>
          )}

          {/* ============================= */}
          {/* 🔥 UPDATED SCREENSHOT OVERLAY */}
          {/* ============================= */}
          <div className="absolute inset-x-4 bottom-5 flex items-center gap-3 lg:inset-x-6 lg:bottom-6">
            <div className="flex-1 overflow-hidden rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-3 p-3">
                {/* Prev button */}
                <button
                  onClick={prevShot}
                  aria-label="Previous screenshot"
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/25"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="relative h-28 w-24 sm:h-32 sm:w-28 lg:h-40 lg:w-32 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/30 shadow-md">
                  <PlaceholderImage
                    src={game.screenshots[activeShot]?.src}
                    alt={
                      game.screenshots[activeShot]?.alt ??
                      `${game.title} screenshot`
                    }
                    icon={<Gamepad2 size={18} />}
                    accent={game.accent}
                    className="h-full w-full object-contain"
                  />

                  {/* depth overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/40" />
                </div>

                {/* Dots */}
                <div className="flex flex-1 items-center justify-center gap-1.5">
                  {game.screenshots.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveShot(i)}
                      aria-label={`Show screenshot ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        i === activeShot ? "w-6 bg-white" : "w-2 bg-white/30"
                      }`}
                    />
                  ))}
                </div>

                {/* Next button */}
                <button
                  onClick={nextShot}
                  aria-label="Next screenshot"
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/25"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className="flex flex-col p-8 lg:p-10 lg:[direction:ltr]">
          {/* Header row */}
          <div className="flex items-center gap-4">
            <PlaceholderImage
              src={game.icon}
              alt={`${game.title} app icon`}
              icon={<Gamepad2 size={22} />}
              accent={game.accent}
              className="h-14 w-14 flex-shrink-0 rounded-2xl border border-white/10 object-cover"
            />
            <div>
              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  game.accent === "orange"
                    ? "text-brand-orange-soft"
                    : "text-brand-blue-soft"
                }`}
              >
                {game.category}
              </span>
              <div className="mt-1 flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={
                      i < Math.round(game.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-slate-700 text-slate-700"
                    }
                  />
                ))}
                <span className="ml-1 text-xs font-semibold text-slate-300">
                  {game.rating}
                </span>
                <span className="text-xs text-slate-500">
                  ({game.ratingCount})
                </span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
            {game.title}
          </h3>

          <p className="mt-2 text-sm font-medium text-slate-400">
            {game.tagline}
          </p>

          {/* Description */}
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            {game.description}
          </p>

          {/* Features */}
          <ul className="mt-5 flex flex-col gap-2">
            {game.features.slice(0, 3).map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-slate-300"
              >
                <span
                  className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                    game.accent === "orange"
                      ? "bg-brand-orange"
                      : "bg-brand-blue"
                  }`}
                />
                {feature}
              </li>
            ))}
          </ul>

          {/* Downloads */}
          <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
            <Download size={14} />
            {game.downloads} downloads
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={game.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-violet px-5 py-3 text-sm font-bold text-white shadow-card transition-transform duration-200 hover:scale-[1.03]"
            >
              {/* Play icon */}
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M3.6 2.3c-.3.3-.5.7-.5 1.2v17c0 .5.2.9.5 1.2l9.4-9.7-9.4-9.7Z" />
                <path d="M16.8 12.8 5.3 21.4l8.2-4.7 3.3-3.9Z" />
                <path d="M20.2 10.3c.6.4.6 1.3 0 1.7l-2.7 1.6-3.6-3.6 3.6-3.6 2.7 1.7c.6.4.6 1.3 0 1.7Z" />
                <path d="M5.3 2.6l11.5 6.6-3.3 3.3-8.2-9.9Z" />
              </svg>
              Google Play
            </a>

            {/* <a
              href={game.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-brand-border px-5 py-3 text-sm font-bold text-slate-200 transition-colors duration-200 hover:border-white/30 hover:text-white"
            >
              <Apple size={16} />
              App Store
            </a> */}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default GameCard;
