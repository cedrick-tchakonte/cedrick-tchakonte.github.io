import type { Transition, Variants } from 'framer-motion'

/** Shared easing (ease-out-quint): fast start, soft landing. Mirrors `ease-smooth` in Tailwind. */
export const EASE = [0.22, 1, 0.36, 1] as const

export const transition: Transition = { duration: 0.5, ease: EASE }

/** Fade in while rising slightly. Use with `initial="hidden"` and `animate`/`whileInView="visible"`. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition },
}

/** Parent variant that reveals its `fadeUp` children one after another. */
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

/** Props for revealing an element once when it scrolls into view. */
export const reveal = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-64px' },
} as const
