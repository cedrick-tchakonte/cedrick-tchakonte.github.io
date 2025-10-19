import React from 'react'
import { motion } from 'framer-motion'
import { FaAward, FaCalendarAlt, FaTags, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'

const CertificationCard = ({ certification }) => {
  return (
    <motion.div
      className="relative flex flex-col items-start p-6 bg-white/50 dark:bg-primaryText-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 border border-primaryText-200/50 dark:border-primaryText-700/50"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Badge Icon */}
      <div className="absolute top-4 right-4 bg-accent-500 text-white p-3 rounded-full shadow-md">
        <FaAward size={20} />
      </div>

      {/* Header Section */}
      <div className="flex items-center mb-6">
        <Image 
          src={certification.logo} 
          alt={`${certification.name} logo`} 
          width={100} 
          height={100} 
          className="rounded-lg shadow-lg"
        />
        <div className="ml-6">
          <h3 className="text-2xl font-bold text-primaryText-800 dark:text-primaryText-100">
            {certification.name}
          </h3>
          <p className="flex items-center text-lg text-primaryText-600 dark:text-primaryText-400 mt-2">
            <FaCalendarAlt size={24} className="mr-2 text-accent-500" />
            {certification.date}
          </p>
          <p className="text-md text-primaryText-500 dark:text-primaryText-500">
            Issued by {certification.issuer}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-base text-primaryText-600 dark:text-primaryText-400 leading-relaxed">
        {certification.description}
      </p>

      {/* Tags Section */}
      <div className="mt-5 flex flex-wrap gap-3">
        {certification.tags?.map((tag, index) => (
          <motion.span
            key={index}
            className="inline-flex items-center px-4 py-1 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-400 rounded-full shadow-sm"
            whileHover={{ scale: 1.1 }}
          >
            <FaTags className="mr-2" />
            {tag}
          </motion.span>
        ))}
      </div>

      {/* Verification Link */}
      {certification.verificationLink && (
        <VerificationLink url={certification.verificationLink} />
      )}

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-accent-400 to-accent-600 rounded-bl-lg rounded-br-lg"></div>
    </motion.div>
  )
}

const VerificationLink = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 flex items-center text-md text-accent-500 hover:underline transition-colors duration-200"
  >
    <FaExternalLinkAlt size={20} className="mr-2" />
    Verify Certification
  </a>
)

export default CertificationCard
