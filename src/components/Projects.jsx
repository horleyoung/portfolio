import { motion } from 'framer-motion'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-20 border-t border-ink/10 dark:border-navy-line">
      <p className="font-mono text-xs text-amber mb-2">// projects.jsx</p>
      <h2 className="font-display text-3xl font-semibold text-ink dark:text-paper mb-10">
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group rounded-lg border border-ink/10 dark:border-navy-line bg-white/50 dark:bg-navy-soft p-6 hover:border-indigo dark:hover:border-amber transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-ink-soft dark:text-white/40">
                {project.name.toLowerCase().replace(/\s+/g, '-')}.{project.ext}
              </span>
              {project.featured && (
                <span className="font-mono text-[10px] uppercase tracking-wide text-amber border border-amber/40 rounded px-1.5 py-0.5">
                  featured
                </span>
              )}
            </div>
            <h3 className="font-display text-lg font-semibold text-ink dark:text-paper group-hover:text-indigo dark:group-hover:text-amber transition-colors">
              {project.name}
            </h3>
            <p className="mt-2 text-sm text-ink-soft dark:text-white/60 leading-relaxed">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-mono text-ink-soft dark:text-white/50 bg-ink/5 dark:bg-white/5 rounded px-2 py-0.5"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-4 font-mono text-xs">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer" className="text-indigo dark:text-amber hover:underline">
                  code →
                </a>
              ) : (
                <span className="text-ink-soft/40 dark:text-white/25">code (add link) </span>
              )}
              {project.live ? (
                <a href={project.live} target="_blank" rel="noreferrer" className="text-indigo dark:text-amber hover:underline">
                  live →
                </a>
              ) : (
                <span className="text-ink-soft/40 dark:text-white/25">live (add link)</span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
