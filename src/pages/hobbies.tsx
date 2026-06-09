import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'
import { FaMusic, FaFilm, FaGamepad, FaBook, FaRunning, FaCode, FaCamera, FaPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'

type Hobby = {
  name: string
  description: string
  icon: IconType
}

const hobbies: Hobby[] = [
  {
    name: 'Music & Audio',
    description: 'Passionate about various music genres and audio production',
    icon: FaMusic,
  },
  {
    name: 'Cinema & Series',
    description: 'Film enthusiast and series binge-watcher',
    icon: FaFilm,
  },
  {
    name: 'Gaming',
    description: 'PC and console gaming, strategy and adventure games',
    icon: FaGamepad,
  },
  {
    name: 'Reading',
    description: 'Tech books, sci-fi novels, and AI research papers',
    icon: FaBook,
  },
  {
    name: 'Sports & Fitness',
    description: 'Running, gym workouts, and outdoor activities',
    icon: FaRunning,
  },
  {
    name: 'Coding Projects',
    description: 'Building side projects and contributing to open source',
    icon: FaCode,
  },
  {
    name: 'Photography',
    description: 'Capturing moments and exploring visual creativity',
    icon: FaCamera,
  },
  {
    name: 'Travel',
    description: 'Exploring new cultures and destinations',
    icon: FaPlane,
  },
]

export default function Hobbies() {
  return (
    <>
      <Head>
        <title>Hobbies & Interests - {siteMetadata.author}</title>
        <meta
          name="description"
          content={`Personal hobbies and interests of ${siteMetadata.author}`}
        />
      </Head>
      <SimpleLayout
        title="Hobbies & Interests"
        intro="Beyond my professional pursuits, I enjoy a variety of activities that keep me balanced, creative, and continuously learning. Here are some of my passions and hobbies."
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-primaryText-800 p-6 shadow-lg border border-primaryText-200/50 dark:border-primaryText-700/50 transition-all duration-300 hover:border-accent-300 dark:hover:border-accent-600"
            >
              {/* Background tint on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-accent-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

              {/* Icon container */}
              <div className="relative mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-100 dark:bg-accent-900/30 transition-transform duration-300 group-hover:scale-110">
                <hobby.icon className="w-7 h-7 text-accent-600 dark:text-accent-400" />
              </div>

              {/* Content */}
              <h3 className="relative text-lg font-bold text-primaryText-800 dark:text-primaryText-100 mb-2">
                {hobby.name}
              </h3>
              <p className="relative text-sm text-primaryText-600 dark:text-primaryText-400 leading-relaxed">
                {hobby.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 to-accent-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 border border-accent-200 dark:border-accent-700/50">
          <h3 className="text-2xl font-bold text-primaryText-800 dark:text-primaryText-100 mb-4">
            Continuous Learning
          </h3>
          <p className="text-primaryText-600 dark:text-primaryText-400 leading-relaxed">
            I believe in maintaining a healthy work-life balance and exploring diverse interests. These hobbies not only provide relaxation and enjoyment but also contribute to my personal growth, creativity, and problem-solving skills. Whether it&apos;s through music, sports, or coding side projects, I&apos;m always seeking new experiences and ways to expand my horizons.
          </p>
        </div>
      </SimpleLayout>
    </>
  )
}
