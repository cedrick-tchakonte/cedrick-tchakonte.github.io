import { motion } from 'framer-motion'

import { useT } from '@/i18n'
import { fadeUp } from '@/lib/motion'

const AvailabilityBadge = () => {
  const t = useT()

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-700 ring-1 ring-inset ring-accent-500/20 sm:text-sm dark:bg-accent-400/10 dark:text-accent-300 dark:ring-accent-400/20"
    >
      {/* The one status dot allowed to (softly) pulse. */}
      <span
        aria-hidden="true"
        className="h-2 w-2 flex-shrink-0 rounded-full bg-accent-500 motion-safe:animate-pulse dark:bg-accent-400"
      />
      <span>
        {t({
          en: '6-month ML internship · early 2027 · France or abroad',
          fr: 'Stage ML de 6 mois · début 2027 · France ou étranger',
        })}
      </span>
    </motion.div>
  )
}

export default AvailabilityBadge
