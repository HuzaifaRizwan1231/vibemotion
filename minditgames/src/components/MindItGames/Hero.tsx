import { motion } from "framer-motion";
import { Gamepad2, Sparkles, Rocket, Star, Puzzle, Brain } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage.tsx";

const FLOATERS = [
  { Icon: Gamepad2, x: "8%", y: "18%", size: 34, delay: 0, duration: 9 },
  { Icon: Sparkles, x: "88%", y: "14%", size: 26, delay: 0.6, duration: 11 },
  { Icon: Star, x: "80%", y: "62%", size: 22, delay: 1.2, duration: 8 },
  { Icon: Puzzle, x: "5%", y: "68%", size: 30, delay: 1.8, duration: 10 },
  { Icon: Rocket, x: "50%", y: "8%", size: 24, delay: 0.3, duration: 12 },
];

const STATS = [
  { label: "Games Published", value: "2" },
  { label: "Total Downloads", value: "1K+" },
  // { label: 'Average Rating', value: '4.6★' },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-brand-radial pb-24 pt-16 md:pb-32 md:pt-20">
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] animate-blob rounded-full bg-brand-blue/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[22rem] w-[22rem] animate-blob rounded-full bg-brand-orange/15 blur-[100px] [animation-direction:alternate-reverse]" />

      {/* Floating icons */}
      <div
        className="pointer-events-none absolute inset-0 hidden sm:block"
        aria-hidden="true"
      >
        {FLOATERS.map(({ Icon, x, y, size, delay, duration }, i) => (
          <motion.div
            key={i}
            className="absolute text-brand-blue-soft/30"
            style={{ left: x, top: y }}
            animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={size} />
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-blue-soft"
        >
          <Brain size={14} />
          Mobile Games That Make You Think
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-black leading-[1.05] text-white sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient-brand">MindIt</span> Games
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
        >
          Creating engaging mobile experiences through innovation, creativity,
          and immersive gameplay — built for players who love a satisfying
          challenge.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#games"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue via-brand-violet to-brand-orange px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-transform duration-300 hover:scale-105"
          >
            <Gamepad2
              size={18}
              className="transition-transform group-hover:rotate-12"
            />
            Explore Our Games
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-brand-border px-7 py-3.5 text-sm font-semibold text-slate-200 transition-colors duration-300 hover:border-brand-blue/50 hover:text-white"
          >
            Learn More
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.46 }}
          className="mx-auto mt-16 flex max-w-xl flex-wrap items-center justify-center gap-x-10 gap-y-6"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="font-display text-3xl font-extrabold text-gradient-brand">
                {stat.value}
              </span>
              <span className="text-xs font-medium tracking-wide text-slate-500">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <PlaceholderImage
            src="/images/brand/hero-banner.png"
            alt="MindIt Games hero artwork"
            icon={<Gamepad2 size={26} />}
            label="Hero banner — swap with brand artwork"
            accent="violet"
            className="aspect-[16/8] w-full rounded-3xl border border-brand-border shadow-card"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
