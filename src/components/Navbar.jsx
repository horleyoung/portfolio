import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

const tabs = [
  { label: 'about.md', href: '#about' },
  { label: 'skills.json', href: '#skills' },
  { label: 'experience.log', href: '#experience' },
  { label: 'projects.jsx', href: '#projects' },
  { label: 'blog', href: '/blog', route: true },
  { label: 'contact.sh', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (tab) => {
    setOpen(false)
    if (tab.route) {
      navigate(tab.href)
      return
    }
    if (location.pathname !== '/') {
      navigate('/' + tab.href)
    } else {
      document.querySelector(tab.href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 dark:border-navy-line bg-paper/90 dark:bg-navy/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <Link to="/" className="font-display text-lg font-semibold text-ink dark:text-paper">
          habeeb<span className="text-indigo">.</span>
          <span className="text-amber">dev</span>
        </Link>

        <ul className="hidden md:flex items-stretch gap-1 rounded-lg border border-ink/10 dark:border-navy-line bg-white/50 dark:bg-navy-soft p-1 font-mono text-xs">
          {tabs.map((tab) => (
            <li key={tab.label}>
              <button
                onClick={() => handleClick(tab)}
                className="rounded-md px-3 py-1.5 text-ink-soft dark:text-white/60 hover:bg-indigo/10 hover:text-indigo dark:hover:text-amber transition-colors duration-200"
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <button
          className="md:hidden text-ink dark:text-paper text-xl"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink/10 dark:border-navy-line bg-paper dark:bg-navy px-5 py-4 flex flex-col gap-3 font-mono text-sm">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleClick(tab)}
              className="text-left text-ink-soft dark:text-white/70"
            >
              {tab.label}
            </button>
          ))}
          <ThemeToggle />
        </div>
      )}
    </header>
  )
}
