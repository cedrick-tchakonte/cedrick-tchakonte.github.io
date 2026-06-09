import { motion } from 'framer-motion'
import { FaAward, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'

interface Certification {
  name: string
  issuer: string
  date: string
  description: string
  logo: string
  tags?: string[]
  verificationLink?: string
}

const CertificationCard = ({ certification }: { certification: Certification }) => {
  return (
    <motion.div
      className="group relative flex flex-col h-full bg-white dark:bg-primaryText-800 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 border border-primaryText-200/50 dark:border-primaryText-700/50 overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-accent-600"></div>

      {/* Badge Icon */}
      <div className="absolute top-4 right-4 bg-gradient-to-br from-accent-500 to-accent-600 text-white p-2.5 rounded-full shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
        <FaAward size={18} />
      </div>

      {/* Header Section with Logo */}
      <div className="p-6 pb-4">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <Image
              src={certification.logo}
              alt={`${certification.issuer} logo`}
              width={64}
              height={64}
              className="rounded-lg shadow-md ring-2 ring-primaryText-200/50 dark:ring-primaryText-700/50"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-primaryText-800 dark:text-primaryText-100 leading-tight mb-2 line-clamp-2">
              {certification.name}
            </h3>
            <p className="text-sm text-primaryText-600 dark:text-primaryText-400 font-medium mb-1">
              {certification.issuer}
            </p>
            <p className="flex items-center text-sm text-primaryText-500 dark:text-primaryText-500">
              <FaCalendarAlt size={12} className="mr-1.5 text-accent-500" />
              {certification.date}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-primaryText-600 dark:text-primaryText-400 leading-relaxed line-clamp-3">
          {certification.description}
        </p>
      </div>

      {/* Tags Section */}
      <div className="px-6 pb-4 flex-1">
        <div className="flex flex-wrap gap-2">
          {certification.tags?.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 text-xs font-medium text-accent-700 dark:text-accent-300 bg-accent-100 dark:bg-accent-900/30 rounded-full border border-accent-200 dark:border-accent-800"
            >
              {tag}
            </span>
          ))}
          {certification.tags && certification.tags.length > 4 && (
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-primaryText-600 dark:text-primaryText-400 bg-primaryText-100 dark:bg-primaryText-700/50 rounded-full">
              +{certification.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Verification Link */}
      {certification.verificationLink && (
        <div className="px-6 pb-6 mt-auto">
          <a
            href={certification.verificationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group-hover:scale-105"
          >
            <FaExternalLinkAlt size={14} className="mr-2" />
            Verify Certification
          </a>
        </div>
      )}
    </motion.div>
  )
}

export default CertificationCard
