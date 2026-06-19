import { motion } from 'framer-motion'
import { Puzzle, ShieldCheck, Sparkles, Smartphone } from 'lucide-react'
import SectionTitle from './SectionTitle.tsx'

const FEATURES = [
  {
    icon: Puzzle,
    title: 'Brain-First Design',
    description: 'Every level is tuned to challenge your thinking without ever feeling unfair.',
    accent: 'blue' as const,
  },
  {
    icon: Sparkles,
    title: 'Satisfying by Design',
    description: 'Crisp feedback, smooth animations, and rewarding "click" moments throughout.',
    accent: 'orange' as const,
  },
  {
    icon: Smartphone,
    title: 'Built for Mobile',
    description: 'Controls and pacing designed from the ground up for touchscreens.',
    accent: 'blue' as const,
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Family-Friendly',
    description: 'Every release is reviewed to be appropriate and enjoyable for all ages.',
    accent: 'orange' as const,
  },
]

const accentStyles = {
  blue: {
    wrap: 'bg-brand-blue/10 border-brand-blue/25',
    icon: 'text-brand-blue-soft',
  },
  orange: {
    wrap: 'bg-brand-orange/10 border-brand-orange/25',
    icon: 'text-brand-orange-soft',
  },
}

const WhyMindItSection = () => {
  return (
    <section className="relative bg-brand-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Why MindIt Games"
          icon={<Sparkles size={14} />}
          title="What Makes Our Games Click"
          description="We obsess over the small details that make a casual game feel genuinely great to play."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group rounded-2xl border border-brand-border bg-brand-surface/70 p-6 text-center transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border ${accentStyles[feature.accent].wrap} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
              >
                <feature.icon size={22} className={accentStyles[feature.accent].icon} />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyMindItSection
