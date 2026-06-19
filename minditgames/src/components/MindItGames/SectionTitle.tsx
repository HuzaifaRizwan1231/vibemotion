import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
  icon?: ReactNode
  align?: 'left' | 'center'
}

const SectionTitle = ({
  eyebrow,
  title,
  description,
  icon,
  align = 'left',
}: SectionTitleProps) => {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 flex flex-col ${isCenter ? 'items-center text-center' : 'items-start'}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue-soft">
          {icon}
          {eyebrow}
        </span>
      )}

      <div className={`flex w-full items-center gap-6 ${isCenter ? 'justify-center' : ''}`}>
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
          {title}
        </h2>
        {!isCenter && (
          <div className="h-px flex-1 bg-gradient-to-r from-brand-blue/40 via-brand-violet/30 to-transparent" />
        )}
      </div>

      {description && (
        <p className={`mt-4 max-w-2xl text-slate-400 ${isCenter ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionTitle
