import { useState } from 'react'
import { motion } from 'framer-motion'

const socials = [
  { label: 'Email', href: 'mailto:adepojuhabeeb5@gmail.com', value: 'adepojuhabeeb5@gmail.com', isEmail: true },
  { label: 'GitHub', href: 'https://github.com/horleyoung', value: 'github.com/horleyoung' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adepoju-habeeb-979550359/', value: 'linkedin.com/in/adepoju-habeeb-979550359/' },
  { label: 'X (Twitter)', href: 'https://x.com/Horley_blaq', value: 'x.com/Horley_blaq' },
]

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrpbzvbe'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const copyEmail = async (email) => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API blocked or unavailable — mailto: still fires as the primary action.
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-20 border-t border-ink/10 dark:border-navy-line">
      <p className="font-mono text-xs text-amber mb-2">// contact.sh</p>
      <h2 className="font-display text-3xl font-semibold text-ink dark:text-paper mb-10">
        Get in touch
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block font-mono text-xs text-ink-soft dark:text-white/50 mb-1.5" htmlFor="name">
              name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-md border border-ink/15 dark:border-navy-line bg-white/60 dark:bg-navy-soft px-3 py-2 text-sm text-ink dark:text-paper outline-none focus:border-indigo dark:focus:border-amber"
            />
          </div>
          <div>
            <label className="block font-mono text-xs text-ink-soft dark:text-white/50 mb-1.5" htmlFor="email">
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-ink/15 dark:border-navy-line bg-white/60 dark:bg-navy-soft px-3 py-2 text-sm text-ink dark:text-paper outline-none focus:border-indigo dark:focus:border-amber"
            />
          </div>
          <div>
            <label className="block font-mono text-xs text-ink-soft dark:text-white/50 mb-1.5" htmlFor="message">
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full rounded-md border border-ink/15 dark:border-navy-line bg-white/60 dark:bg-navy-soft px-3 py-2 text-sm text-ink dark:text-paper outline-none focus:border-indigo dark:focus:border-amber"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-md bg-indigo text-paper px-5 py-2.5 font-mono text-sm hover:bg-indigo/90 transition-colors disabled:opacity-60"
          >
            {status === 'sending' ? 'sending...' : status === 'sent' ? 'sent ✓' : 'send message'}
          </button>
          {status === 'sent' && (
            <p className="text-xs text-add font-mono">
              Thanks — your message has been sent. I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-xs text-del font-mono">
              Something went wrong sending that — try again, or email me directly.
            </p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-lg border border-ink/10 dark:border-navy-line bg-white/50 dark:bg-navy-soft p-6 font-mono text-sm space-y-3 h-fit"
        >
          {socials.map((s) => (
            <div key={s.label} className="flex justify-between gap-4 items-center">
              <span className="text-ink-soft dark:text-white/40">{s.label}</span>
              <div className="flex items-center gap-2">
                <a
                  href={s.href}
                  target={s.isEmail ? undefined : '_blank'}
                  rel={s.isEmail ? undefined : 'noreferrer'}
                  onClick={s.isEmail ? () => copyEmail(s.value) : undefined}
                  className="text-indigo dark:text-amber hover:underline truncate"
                >
                  {s.value}
                </a>
                {s.isEmail && copied && (
                  <span className="text-add text-[11px] whitespace-nowrap">copied ✓</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}