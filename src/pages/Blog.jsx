import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { posts } from '../data/posts.js'

export default function Blog() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      <p className="font-mono text-xs text-amber mb-2">// blog</p>
      <h1 className="font-display text-3xl font-semibold text-ink dark:text-paper mb-10">
        Writing
      </h1>

      <div className="space-y-8">
        {posts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-b border-ink/10 dark:border-navy-line pb-8"
          >
            <p className="font-mono text-xs text-ink-soft dark:text-white/40">{post.date}</p>
            <Link to={`/blog/${post.slug}`}>
              <h2 className="font-display text-xl font-semibold text-ink dark:text-paper mt-1 hover:text-indigo dark:hover:text-amber transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="mt-2 text-sm text-ink-soft dark:text-white/60 leading-relaxed">
              {post.excerpt}
            </p>
            <Link
              to={`/blog/${post.slug}`}
              className="mt-3 inline-block font-mono text-xs text-indigo dark:text-amber hover:underline"
            >
              read more →
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
