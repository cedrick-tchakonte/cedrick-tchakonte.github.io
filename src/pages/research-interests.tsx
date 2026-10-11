import Head from 'next/head'
import { motion } from 'framer-motion'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { researchInterests } from '@/content/researchInterests'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'
import { fadeUp, reveal, stagger } from '@/lib/motion'

export default function ResearchInterests() {
  const t = useT()

  return (
    <>
      <Head>
        <title>{`${t({ en: 'Research Interests', fr: 'Thèmes de recherche' })} - ${siteMetadata.author}`}</title>
        <meta
          name="description"
          content={t({
            en: 'Research interests of Cedrick Tchakonte',
            fr: 'Thèmes de recherche de Cedrick Tchakonte',
          })}
        />
      </Head>
      <SimpleLayout
        title={t({
          en: 'Research Interests',
          fr: 'Thèmes de recherche',
        })}
        intro={t({
          en: 'The research questions I would like to work on, each growing out of my internships, projects and courses.',
          fr: 'Les questions de recherche sur lesquelles je souhaite travailler, chacune née de mes stages, projets et cours.',
        })}
      >
        <motion.ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={stagger}
          {...reveal}
        >
          {researchInterests.map((interest) => (
            <motion.li key={interest.title.en} variants={fadeUp} className="grid">
              <Card className="h-full">
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 ring-1 ring-inset ring-accent-500/20 dark:bg-accent-400/10 dark:text-accent-400 dark:ring-accent-400/20">
                  <interest.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <Card.Title className="mt-6">{t(interest.title)}</Card.Title>
                <Card.Description>{t(interest.description)}</Card.Description>
                <p className="relative z-10 mt-auto pt-6 text-sm font-semibold text-accent-600 dark:text-accent-400">
                  {t(interest.basis)}
                </p>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </SimpleLayout>
    </>
  )
}
