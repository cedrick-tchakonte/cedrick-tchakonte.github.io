import { motion } from 'framer-motion'
import Image, { type StaticImageData } from 'next/image'
import { FaCalendarAlt, FaBook, FaGraduationCap } from 'react-icons/fa'

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
      className="relative flex flex-col items-start p-6 overflow-hidden bg-white border shadow-lg rounded-2xl dark:bg-primaryText-800 border-primaryText-200/50 dark:border-primaryText-700/50 hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Timeline Connector */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent-400 to-accent-600 rounded-l-full"></div>

      {/* Header Section */}
      <div className="flex items-center w-full pl-4 mb-6">
        {/* University Logo */}
        {education.logo && (
          <div className="flex-shrink-0">
            <Image
              src={education.logo}
              alt={`${education.institution} Logo`}
              className="object-cover rounded-full"
              width={100}
              height={100}
            />
          </div>
        )}
        <div className="flex-grow ml-6">
          <h3 className="text-2xl font-bold text-primaryText-900 dark:text-primaryText-100">
            {education.degree}
          </h3>
          <p className="text-lg text-primaryText-600 dark:text-primaryText-400">
            {education.institution}
          </p>
        </div>
        {/* Date Section (aligned to the right) */}
        <div className="flex items-center justify-end mt-2 text-md text-primaryText-500 dark:text-primaryText-400">
          <FaCalendarAlt className="mr-2 text-accent-500" />
          {education.startDate} - {education.endDate}
        </div>
      </div>

      {/* Description */}
      <p className="pl-4 mt-3 text-base leading-relaxed text-primaryText-700 dark:text-primaryText-300">
        {education.description}
      </p>

      {/* Courses or Highlights Section */}
      {education.highlights && (
        <ul className="pl-4 mt-4 space-y-2">
          {education.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start text-sm text-primaryText-600 dark:text-primaryText-400">
              <FaBook className="flex-none mt-1 mr-2 text-accent-500" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Graduation Icon (aligned to the right) */}
      <div className="absolute bottom-0 right-0 p-4">
        <div className="p-4 rounded-full shadow-md bg-accent-100 text-accent-600 dark:bg-accent-900/30 dark:text-accent-400">
          <FaGraduationCap size={32} />
        </div>
      </div>
    </motion.div>
  )
}

export default BackgroundEducationCard
