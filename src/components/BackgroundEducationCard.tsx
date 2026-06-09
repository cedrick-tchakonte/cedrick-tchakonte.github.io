import { motion } from 'framer-motion'
import Image, { type StaticImageData } from 'next/image'
import { FaCalendarAlt } from 'react-icons/fa'

type Education = {
  degree: string
  institution: string
  logo?: string | StaticImageData
  startDate: string
  endDate: string
  description: string
  highlights?: string[]
}

type BackgroundEducationCardProps = {
  education: Education
}

const BackgroundEducationCard = ({ education }: BackgroundEducationCardProps) => {
  return (
    <motion.div
      className="relative flex flex-col overflow-hidden bg-white border shadow-lg p-6 sm:p-8 rounded-2xl dark:bg-primaryText-800 border-primaryText-200/50 dark:border-primaryText-700/50 hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Timeline accent */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-accent-400 to-accent-600" />

      <div className="pl-4 sm:pl-6">
        {/* Header: logo + degree/institution on the left, date pill on the right */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            {education.logo && (
              <div className="flex items-center flex-shrink-0 h-16 px-3 bg-white border rounded-xl border-primaryText-200/70 dark:border-primaryText-600/40">
                <Image
                  src={education.logo}
                  alt={`${education.institution} logo`}
                  width={220}
                  height={64}
                  className="object-contain"
                  style={{ height: '2.5rem', width: 'auto', maxWidth: '170px' }}
                />
              </div>
            )}
            <div className="min-w-0">
              <h3 className="text-xl font-bold tracking-tight text-primaryText-900 dark:text-primaryText-100 sm:text-2xl">
                {education.degree}
              </h3>
              <p className="mt-1 text-base text-primaryText-600 dark:text-primaryText-400">
                {education.institution}
              </p>
            </div>
          </div>

          {/* Date pill */}
          <div className="inline-flex items-center self-start flex-shrink-0 gap-2 px-3 py-1 text-sm font-medium rounded-full whitespace-nowrap bg-accent-50 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300">
            <FaCalendarAlt className="w-3.5 h-3.5" />
            {education.startDate} - {education.endDate}
          </div>
        </div>

        {/* Description */}
        <p className="mt-5 text-base leading-relaxed text-primaryText-700 dark:text-primaryText-300">
          {education.description}
        </p>

        {/* Highlights */}
        {education.highlights && education.highlights.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {education.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start text-sm text-primaryText-600 dark:text-primaryText-400"
              >
                <span className="flex-none w-1.5 h-1.5 mt-2 mr-3 rounded-full bg-accent-500" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

export default BackgroundEducationCard
