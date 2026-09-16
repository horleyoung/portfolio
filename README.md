# Habeeb — Portfolio

A React + Vite + Tailwind portfolio site with a code-editor-inspired design: section navigation styled as editor tabs, a typed-code hero, dark/light theme switcher, and scroll animations via Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Before you deploy — replace these placeholders

- **`public/resume.pdf`** — add your actual CV/resume file (the hero's "download CV" button links here).
- **`src/data/projects.js`** — add real GitHub/live links for each project, and swap out the placeholder third project.
- **`src/data/experience.js`** — fill in your SIWES company name, dates, and responsibilities.
- **`src/components/Contact.jsx`** — replace the email/GitHub/LinkedIn/X placeholder links with your real ones.
- **`src/components/Contact.jsx`** — wire the contact form to a real backend (e.g. [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/)) — it currently just shows a "sent" state without actually sending anything.
- **`src/data/posts.js`** — replace the two placeholder blog posts with your real writing, or delete them and start fresh.
- **`index.html`** — update the `<title>` and meta description if you want different SEO copy.

## Structure

```
src/
  components/   → Navbar, Hero, Skills, Experience, Projects, Contact, Footer, ThemeToggle
  pages/        → Home, Blog, BlogPost
  context/      → ThemeContext (dark/light mode, persisted to localStorage)
  data/         → projects.js, skills.js, experience.js, posts.js — edit these to update content
```

## Build & deploy

```bash
npm run build
```

Outputs to `dist/`. Deploy that folder to Vercel, Netlify, or GitHub Pages. For Vercel/Netlify, just connect the repo — both auto-detect Vite.

## Adding a new blog post

Add an object to the `posts` array in `src/data/posts.js` with a unique `slug`, `title`, `date`, `excerpt`, and `body`. It'll automatically show up on `/blog` and at `/blog/your-slug`.
# portfolio
