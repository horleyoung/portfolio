export default function Footer() {
  return (
    <footer className="border-t border-ink/10 dark:border-navy-line">
      <div className="mx-auto max-w-5xl px-5 py-8 flex flex-col sm:flex-row justify-between items-center gap-2 font-mono text-xs text-ink-soft dark:text-white/40">
        <span>© {new Date().getFullYear()} Habeeb. Built with React &amp; Tailwind.</span>
        <span className="text-add">// status: available for hire</span>
      </div>
    </footer>
  )
}
