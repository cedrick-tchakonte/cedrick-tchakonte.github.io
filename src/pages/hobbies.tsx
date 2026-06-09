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
  color: string
  bgColor: string
}

const hobbies: Hobby[] = [
  {
    name: 'Music & Audio',
    description: 'Passionate about various music genres and audio production',
    icon: FaMusic,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    name: 'Cinema & Series',
    description: 'Film enthusiast and series binge-watcher',
    icon: FaFilm,
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
  },
  {
    name: 'Gaming',
    description: 'PC and console gaming, strategy and adventure games',
    icon: FaGamepad,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    name: 'Reading',
    description: 'Tech books, sci-fi novels, and AI research papers',
    icon: FaBook,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    name: 'Sports & Fitness',
    description: 'Running, gym workouts, and outdoor activities',
    icon: FaRunning,
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
  },
  {
    name: 'Coding Projects',
    description: 'Building side projects and contributing to open source',
    icon: FaCode,
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
  },
  {
    name: 'Photography',
    description: 'Capturing moments and exploring visual creativity',
    icon: FaCamera,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-100 dark:bg-pink-900/30',
  },
  {
    name: 'Travel',
    description: 'Exploring new cultures and destinations',
    icon: FaPlane,
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
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
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-primaryText-800 p-6 shadow-lg border border-primaryText-200/50 dark:border-primaryText-700/50 transition-all duration-300"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Icon container */}
              <div className={`relative mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl ${hobby.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                <hobby.icon className={`w-7 h-7 bg-gradient-to-br ${hobby.color} bg-clip-text text-transparent`} />
              </div>

              {/* Content */}
              <h3 className="relative text-lg font-bold text-primaryText-800 dark:text-primaryText-100 mb-2">
                {hobby.name}
              </h3>
              <p className="relative text-sm text-primaryText-600 dark:text-primaryText-400 leading-relaxed">
                {hobby.description}
              </p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${hobby.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
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
