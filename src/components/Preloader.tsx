import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

type PreloaderProps = {
  /** Minimum time (ms) the loader stays visible, so it never just flashes. */
  minDuration?: number
  /** Hard safety cap (ms): the loader always dismisses by then, even if `load` never fires. */
  maxDuration?: number
}

/**
 * On-brand, accessible loading screen shown until the page has loaded.
 * It dismisses on the real window `load` event (respecting a minimum display
 * time), with a hard safety cap so it can never get stuck. Honors
 * prefers-reduced-motion and locks body scroll while visible.
 */
const Preloader = ({ minDuration = 600, maxDuration = 4000 }: PreloaderProps) => {
  const [visible, setVisible] = useState(true)
  const reduceMotion = useReducedMotion()

  // Dismiss once the page is loaded (but not before `minDuration`).
  useEffect(() => {
    const start = performance.now()
    let dismissed = false

    const dismiss = () => {
      if (dismissed) return
      dismissed = true
      const elapsed = performance.now() - start
      const remaining = Math.max(0, minDuration - elapsed)
      window.setTimeout(() => setVisible(false), remaining)
    }

    if (document.readyState === 'complete') {
      dismiss()
    } else {
      window.addEventListener('load', dismiss, { once: true })
    }

    // Safety net: never let the loader stick around forever.
    const cap = window.setTimeout(dismiss, maxDuration)

    return () => {
      window.removeEventListener('load', dismiss)
      window.clearTimeout(cap)
    }
  }, [minDuration, maxDuration])

  // Prevent the page behind the loader from scrolling while it is visible.
  useEffect(() => {
    if (!visible) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-busy="true"
          aria-label="Loading portfolio"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-primaryText-900 via-primaryText-900 to-primaryText-800"
          initial={false}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: 'easeInOut' }}
        >
          {/* Brand monogram with a rotating accent ring */}
          <div className="relative flex items-center justify-center">
            {!reduceMotion && (
              <motion.span
                aria-hidden="true"
                className="absolute h-24 w-24 rounded-full border-2 border-accent-500/30 border-t-accent-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            )}
            <span className="flex items-center justify-center w-16 h-16 text-2xl font-bold text-white rounded-full shadow-lg bg-gradient-to-br from-accent-500 to-accent-600 ring-4 ring-primaryText-900">
              CT
            </span>
          </div>

          <p className="mt-8 text-sm font-medium tracking-wide text-primaryText-300">
            Loading portfolio…
          </p>

          {/* Honest indeterminate bar (no fake percentage) */}
          {!reduceMotion && (
            <div className="mt-4 h-1 overflow-hidden rounded-full w-48 bg-primaryText-700/60">
              <motion.span
                className="block w-1/3 h-full rounded-full bg-gradient-to-r from-accent-400 to-accent-500"
                animate={{ x: ['-100%', '300%'] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          )}

          <span className="sr-only">Loading, please wait…</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
