import { motion } from 'framer-motion'

const GapYearBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <span>On a Gap Year · ML Research Intern @ Stellantis</span>
    </motion.div>
  )
}

export default GapYearBadge
