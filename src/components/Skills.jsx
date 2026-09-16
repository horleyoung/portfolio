import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills.js'

const labels = {
  languages: 'languages',
  frameworks_libraries: 'frameworks & libraries',
  tools: 'tools',
  concepts: 'concepts',
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-20 border-t border-ink/10 dark:border-navy-line">
      <p className="font-mono text-xs text-amber mb-2">// skills.json</p>
      <h2 className="font-display text-3xl font-semibold text-ink dark:text-paper mb-10">
        Skills &amp; technologies
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="rounded-lg border border-ink/10 dark:border-navy-line bg-white/50 dark:bg-navy-soft p-5"
          >
            <p className="font-mono text-xs text-indigo dark:text-amber mb-3">
              "{labels[group.category]}":
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ink/15 dark:border-white/15 px-3 py-1 text-xs font-mono text-ink-soft dark:text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
