import { motion } from 'framer-motion'
import { Brain, Target, Heart, Globe2 } from 'lucide-react'
import SectionTitle from './SectionTitle.tsx'
import PlaceholderImage from './PlaceholderImage.tsx'

const VALUES = [
  {
    icon: Target,
    title: 'Purposeful Design',
    description: 'Every mechanic is built to engage your mind, not just your thumbs.',
  },
  {
    icon: Heart,
    title: 'Made to Relax',
    description: 'Calming, satisfying gameplay loops that fit into any part of your day.',
  },
  {
    icon: Globe2,
    title: 'Built for Everyone',
    description: 'Accessible, intuitive games enjoyed by players around the world.',
  },
]

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <PlaceholderImage
              src="/images/brand/icon.png"
              alt="MindIt Games studio icon"
              icon={<Brain size={28} />}
              label="Studio icon / artwork"
              accent="violet"
              className="aspect-square w-full max-w-sm rounded-3xl border border-brand-border shadow-card mx-auto"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-28 w-28 items-center justify-center rounded-2xl border border-brand-border bg-brand-surface shadow-card sm:flex">
              <span className="font-display text-2xl font-extrabold text-gradient-brand">2019</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionTitle
              eyebrow="About MindIt Games"
              icon={<Brain size={14} />}
              title="Games Designed Around the Mind"
              align="left"
            />

            <p className="-mt-6 text-slate-400">
              MindIt Games is an independent mobile studio crafting puzzle and
              simulation experiences that are equal parts relaxing and
              engaging. We believe great casual games respect a player's
              time, reward curiosity, and feel satisfying in every single
              interaction.
            </p>
            <p className="mt-4 text-slate-400">
              From sorting puzzles to ASMR cleaning simulations, our titles
              share one philosophy: smooth controls, calming feedback, and
              just enough challenge to keep your mind engaged.
            </p>

            {/* Values grid */}
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {VALUES.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="rounded-2xl border border-brand-border bg-brand-surface/60 p-5"
                >
                  <value.icon size={20} className="text-brand-blue-soft" />
                  <h4 className="mt-3 font-display text-sm font-bold text-white">
                    {value.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
