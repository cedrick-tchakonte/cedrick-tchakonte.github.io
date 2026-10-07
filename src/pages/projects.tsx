import Head from 'next/head'
import { motion } from 'framer-motion'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { projectsData } from '@/content/projects'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'
import { fadeUp, reveal, stagger } from '@/lib/motion'

export default function Projects() {
  const t = useT()

  return (
    <>
      <Head>
        <title>{`${t({ en: 'Projects', fr: 'Projets' })} - ${siteMetadata.author}`}</title>
        <meta
          name="description"
          content={t({
            en: 'Personal projects by Cedrick Tchakonte',
            fr: 'Projets personnels de Cedrick Tchakonte',
          })}
        />
      </Head>
      <SimpleLayout
        title={t({
          en: "Projects I've worked on",
          fr: "Projets sur lesquels j'ai travaillé",
        })}
        intro={t({
          en: "These are some of the projects that I'm most proud of. I've built them to learn new technologies, or to solve a problem that I've encountered.",
          fr: "Voici quelques-uns des projets dont je suis le plus fier. Je les ai réalisés pour apprendre de nouvelles technologies ou pour résoudre un problème que j'ai rencontré.",
        })}
      >
        <motion.ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={stagger}
          {...reveal}
        >
          {projectsData.map((project) => (
            <motion.li key={project.title.en} variants={fadeUp} className="grid">
              <Card className="h-full">
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 ring-1 ring-inset ring-accent-500/20 dark:bg-accent-400/10 dark:text-accent-400 dark:ring-accent-400/20">
                  <project.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="relative z-10 mt-6 text-sm font-semibold text-accent-600 dark:text-accent-400">
                  {t(project.category)}
                </p>
                <Card.Title href={project.href} className="mt-1">
                  {t(project.title)}
                </Card.Title>
                <Card.Description>{t(project.description)}</Card.Description>
                {project.href && (
                  <Card.Cta className="mt-auto pt-6">
                    {t({ en: 'View on GitHub', fr: 'Voir sur GitHub' })}
                  </Card.Cta>
                )}
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </SimpleLayout>
    </>
  )
}
