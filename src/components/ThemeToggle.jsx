import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="group flex items-center gap-2 rounded-full border border-ink/15 dark:border-white/15 px-3 py-1.5 font-mono text-xs text-ink-soft dark:text-white/60 hover:border-indigo hover:text-indigo dark:hover:text-amber dark:hover:border-amber transition-colors duration-200"
    >
      <span className="text-amber">//</span>
      <span>theme: {theme}</span>
      <span
        className={`inline-block h-2.5 w-2.5 rounded-full transition-transform duration-300 ${
          theme === 'dark' ? 'bg-amber' : 'bg-indigo'
        } group-hover:scale-125`}
      />
    </button>
  )
}
