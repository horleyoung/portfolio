import { motion } from 'framer-motion'
import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-5 py-20 border-t border-ink/10 dark:border-navy-line">
      <p className="font-mono text-xs text-amber mb-2">// experience.log</p>
      <h2 className="font-display text-3xl font-semibold text-ink dark:text-paper mb-10">
        Experience
      </h2>

      <div className="relative border-l border-ink/15 dark:border-navy-line pl-8 space-y-10">
        {experience.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full bg-indigo dark:bg-amber" />
            <p className="font-mono text-xs text-ink-soft dark:text-white/40">{item.period}</p>
            <h3 className="font-display text-xl font-semibold text-ink dark:text-paper mt-1">
              {item.role}
            </h3>
            <p className="text-sm text-indigo dark:text-amber mt-0.5">{item.org}</p>
            <ul className="mt-3 space-y-1.5">
              {item.points.map((p, pi) => (
                <li key={pi} className="text-sm text-ink-soft dark:text-white/60 flex gap-2">
                  <span className="text-add">+</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
