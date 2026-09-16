import { motion } from 'framer-motion'
import { leadership } from '../data/leadership.js'

export default function Leadership() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-20">
      <p className="font-mono text-xs text-amber mb-2">// leadership &amp; volunteering</p>
      <h3 className="font-display text-xl font-semibold text-ink dark:text-paper mb-6">
        Leadership &amp; Volunteering
      </h3>

      <div className="grid sm:grid-cols-2 gap-0 rounded-lg border border-ink/10 dark:border-navy-line overflow-hidden">
        {leadership.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`flex gap-4 p-5 bg-white/50 dark:bg-navy-soft ${
              i > 0 ? 'sm:border-l border-t sm:border-t-0 border-ink/10 dark:border-navy-line' : ''
            }`}
          >
            <div className="shrink-0 h-11 w-11 rounded-md border border-ink/10 dark:border-navy-line overflow-hidden flex items-center justify-center bg-white">
  <img src={item.icon} alt={item.org} className="h-full w-full object-contain p-1.5" />
</div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft dark:text-white/40">
                {item.period}
              </p>
              <h4 className="font-display text-base font-semibold text-ink dark:text-paper mt-0.5">
                {item.role}
              </h4>
              <p className="text-sm text-indigo dark:text-amber">{item.org}</p>
              {item.points?.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {item.points.map((p, pi) => (
                    <li key={pi} className="text-xs text-ink-soft dark:text-white/60 leading-relaxed">
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}