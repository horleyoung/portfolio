import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { posts } from '../data/posts.js'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-ink dark:text-paper">Post not found.</p>
        <Link to="/blog" className="font-mono text-xs text-indigo dark:text-amber hover:underline">
          ← back to blog
        </Link>
      </section>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl px-5 py-20"
    >
      <Link to="/blog" className="font-mono text-xs text-indigo dark:text-amber hover:underline">
        ← back to blog
      </Link>
      <p className="font-mono text-xs text-ink-soft dark:text-white/40 mt-6">{post.date}</p>
      <h1 className="font-display text-3xl font-semibold text-ink dark:text-paper mt-1 mb-8">
        {post.title}
      </h1>
      <div className="prose prose-sm max-w-none text-ink-soft dark:text-white/70 leading-relaxed whitespace-pre-line">
        {post.body}
      </div>
    </motion.section>
  )
}
