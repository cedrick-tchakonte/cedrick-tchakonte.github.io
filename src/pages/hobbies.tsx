import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'
import { FaSeedling } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useT } from '@/i18n'
import { fadeUp, reveal, stagger } from '@/lib/motion'
import { hobbies } from '@/content/hobbies'

const iconTileClass =
  'flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 ring-1 ring-inset ring-accent-500/20 dark:bg-accent-400/10 dark:text-accent-400 dark:ring-accent-400/20'

export default function Hobbies() {
  const t = useT()

  const closing = {
    title: { en: 'Keeping it balanced', fr: "Garder l'équilibre" },
    text: {
      en: 'Volleyball, football and babyfoot keep me social and on my feet; chess and a good book keep my head busy. It keeps me balanced, and honestly a bit sharper for the work that matters.',
      fr: "Le volley, le foot et le babyfoot me gardent sociable et en mouvement ; les échecs et un bon livre occupent ma tête. Ça m'équilibre et, franchement, ça me rend un peu plus affûté pour ce qui compte vraiment.",
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
          en: 'Beyond work, these activities keep me balanced, creative and always learning.',
          fr: "En dehors du travail, ces activités me gardent équilibré, créatif et toujours en apprentissage.",
        })}
      >
        <motion.ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          variants={stagger}
          {...reveal}
        >
          {hobbies.map((hobby) => (
            <motion.li key={hobby.name.en} variants={fadeUp} className="grid">
              <div className="rounded-2xl border border-primaryText-200/70 bg-white p-6 shadow-sm dark:border-primaryText-800 dark:bg-primaryText-900">
                <div className={iconTileClass}>
                  <hobby.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-primaryText-900 dark:text-primaryText-50">
                  {t(hobby.name)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-primaryText-600 dark:text-primaryText-400">
                  {t(hobby.description)}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Closing note */}
        <motion.div
          variants={fadeUp}
          {...reveal}
          className="mt-16 rounded-2xl border border-primaryText-200/70 bg-white p-6 shadow-sm dark:border-primaryText-800 dark:bg-primaryText-900 sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className={iconTileClass}>
              <FaSeedling className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primaryText-900 dark:text-primaryText-50">
                {t(closing.title)}
              </h3>
              <p className="mt-2 text-base leading-7 text-primaryText-600 dark:text-primaryText-400">
                {t(closing.text)}
              </p>
            </div>
          </div>
        </motion.div>
      </SimpleLayout>
    </>
  )
}
