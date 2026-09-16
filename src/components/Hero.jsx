import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const lines = [
  { text: 'const developer = {', indent: 0, color: 'text-ink-soft dark:text-white/50' },
  { text: "name: 'Habeeb',", indent: 1, color: 'text-indigo dark:text-amber' },
  { text: "role: 'Frontend Developer',", indent: 1, color: 'text-indigo dark:text-amber' },
  { text: "stack: ['React', 'JavaScript'],", indent: 1, color: 'text-indigo dark:text-amber' },
  { text: "status: 'open to remote roles',", indent: 1, color: 'text-add' },
  { text: '}', indent: 0, color: 'text-ink-soft dark:text-white/50' },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= lines.length) return
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 350)
    return () => clearTimeout(t)
  }, [visibleLines])

  return (
    <section id="about" className="mx-auto max-w-5xl px-5 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-amber mb-3">// about.md</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-ink dark:text-paper leading-tight">
            I build fast, accessible interfaces with React.
          </h1>
          <p className="mt-5 text-ink-soft dark:text-white/60 leading-relaxed max-w-md">
           Computer Science graduate from KWASU, awaiting final results and certificate. I focus on clean
            component architecture, thoughtful interaction design, and shipping things that
            actually work on a bad connection.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-indigo text-paper px-5 py-2.5 font-mono text-sm hover:bg-indigo/90 transition-colors"
            >
              view projects
            </a>
            <a
              href="/public/Habeeb Adepoju CV.pdf"
              download
              className="rounded-md border border-ink/20 dark:border-white/20 text-ink dark:text-paper px-5 py-2.5 font-mono text-sm hover:border-amber hover:text-amber transition-colors"
            >
              download CV ↓
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-xl border border-ink/10 dark:border-navy-line bg-white/60 dark:bg-navy-soft shadow-lg overflow-hidden"
        >
          <div className="flex items-center gap-1.5 border-b border-ink/10 dark:border-navy-line px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-del" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber" />
            <span className="h-2.5 w-2.5 rounded-full bg-add" />
            <span className="ml-3 font-mono text-xs text-ink-soft dark:text-white/40">
              about.js
            </span>
          </div>
          <pre className="p-5 font-mono text-sm leading-7 overflow-x-auto">
            {lines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className={line.color} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                {line.text}
              </div>
            ))}
            {visibleLines < lines.length && (
              <span className="inline-block w-2 h-4 bg-indigo dark:bg-amber animate-blink" />
            )}
          </pre>
        </motion.div>
      </div>
    </section>
  )
}
