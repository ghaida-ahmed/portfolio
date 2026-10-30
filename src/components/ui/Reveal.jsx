import { motion, useReducedMotion } from 'framer-motion'

/**
 * Reveals its children as they scroll into view. Staggering a set of items
 * (e.g. a card grid) is intentional motion, not the fade-everything reflex.
 * Falls back to a plain element when the user prefers reduced motion.
 *
 * Usage:
 *   <Reveal>            → single element reveal
 *   <Reveal stagger>    → container that staggers its <Reveal.Item> children
 *   <Reveal.Item />     → individual item inside a staggered container
 */
const EASE = [0.16, 1, 0.3, 1]

export default function Reveal({ children, delay = 0, stagger = false, className, as = 'div' }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  if (stagger) {
    return (
      <MotionTag
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.07, delayChildren: delay } },
        }}
      >
        {children}
      </MotionTag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  )
}

function Item({ children, className, as = 'div' }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
      }}
    >
      {children}
    </MotionTag>
  )
}

Reveal.Item = Item
