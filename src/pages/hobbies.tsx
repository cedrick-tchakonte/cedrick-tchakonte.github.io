import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'
import { FaSeedling } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useT } from '@/i18n'
import { hobbies } from '@/content/hobbies'

export default function Hobbies() {
  const t = useT()

  const closing = {
    title: { en: 'Keeping it balanced', fr: "Garder l'équilibre" },
    text: {
      en: 'Outside of work I like to move and compete a little. Volleyball, football and babyfoot keep me social and on my feet, chess and a good book keep my head busy, and the odd side project is just me being curious. It keeps me balanced, and honestly a bit sharper for the work that matters.',
      fr: "En dehors du travail, j'aime bouger et avoir un peu de compétition. Le volley, le foot et le babyfoot me gardent sociable et en mouvement, les échecs et un bon livre occupent ma tête, et un petit projet perso de temps en temps, c'est juste ma curiosité. Ça m'équilibre et, franchement, ça me rend un peu plus affûté pour ce qui compte vraiment.",
    },
  }

  return (
    <>
      <Head>
        <title>{`${t({ en: 'Hobbies & Interests', fr: "Loisirs & centres d'intérêt" })} - ${siteMetadata.author}`}</title>
        <meta
          name="description"
          content={t({
            en: `Personal hobbies and interests of ${siteMetadata.author}`,
            fr: `Loisirs et centres d'intérêt de ${siteMetadata.author}`,
          })}
        />
      </Head>
      <SimpleLayout
        title={t({ en: 'Hobbies & Interests', fr: "Loisirs & centres d'intérêt" })}
        intro={t({
          en: 'Beyond my professional pursuits, I enjoy a variety of activities that keep me balanced, creative, and continuously learning. Here are some of my passions and hobbies.',
          fr: "Au-delà de mes activités professionnelles, je m'adonne à diverses activités qui me gardent équilibré, créatif et toujours en apprentissage. Voici quelques-unes de mes passions et de mes loisirs.",
        })}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name.en}
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
                {t(hobby.name)}
              </h3>
              <p className="relative text-sm text-primaryText-600 dark:text-primaryText-400 leading-relaxed">
                {t(hobby.description)}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 to-accent-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Closing note */}
        <div className="relative p-8 mt-16 overflow-hidden bg-white border shadow-lg sm:p-10 rounded-3xl dark:bg-primaryText-800 border-primaryText-200/60 dark:border-primaryText-700/50">
          <div
            className="absolute rounded-full pointer-events-none -top-16 -right-16 w-44 h-44 bg-accent-400/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white shadow-md rounded-xl bg-gradient-to-br from-accent-500 to-accent-600">
              <FaSeedling className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primaryText-900 dark:text-primaryText-100">
                {t(closing.title)}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-primaryText-600 dark:text-primaryText-400">
                {t(closing.text)}
              </p>
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
