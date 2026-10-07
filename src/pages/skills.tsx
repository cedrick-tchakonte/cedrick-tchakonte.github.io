import Head from 'next/head'
import { motion } from 'framer-motion'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'
import { fadeUp, reveal, stagger } from '@/lib/motion'
import { skills } from '@/content/skills'

export default function Skills() {
  const t = useT()

  return (
    <>
      <Head>
        <title>{`${t({ en: 'Skills', fr: 'Compétences' })} - ${siteMetadata.author}`}</title>
        <meta
          name="description"
          content={t({
            en: `Skills and expertise of ${siteMetadata.author}`,
            fr: `Compétences et expertise de ${siteMetadata.author}`,
          })}
        />
      </Head>
      <SimpleLayout
        title={t({ en: 'Skills', fr: 'Compétences' })}
        intro={t({
          en: 'Here are the various skills and tools I have mastered in the field of computer science, with a focus on AI and robotics.',
          fr: "Voici les différentes compétences et outils que je maîtrise dans le domaine de l'informatique, avec un accent sur l'IA et la robotique.",
        })}
      >
        <div className="space-y-16 sm:space-y-20">
          {skills.map((skillCategory) => (
            <motion.section
              key={skillCategory.category.en}
              variants={stagger}
              {...reveal}
            >
              <motion.h2
                variants={fadeUp}
                className="text-2xl font-semibold tracking-tight text-primaryText-900 dark:text-primaryText-50 sm:text-3xl"
              >
                {t(skillCategory.category)}
              </motion.h2>
              <ul
                role="list"
                className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
              >
                {skillCategory.items.map((skill) => (
                  <motion.li
                    key={typeof skill.name === 'string' ? skill.name : skill.name.en}
                    variants={fadeUp}
                    className="flex items-center gap-3 rounded-xl border border-primaryText-200/70 bg-white px-4 py-3 shadow-sm transition-colors duration-200 ease-smooth hover:border-accent-300/60 dark:border-primaryText-800 dark:bg-primaryText-900 dark:hover:border-accent-500/40"
                  >
                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-accent-500/10 text-accent-600 ring-1 ring-inset ring-accent-500/20 dark:bg-accent-400/10 dark:text-accent-400 dark:ring-accent-400/20">
                      <skill.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="min-w-0 break-words text-sm font-medium leading-5 text-primaryText-900 dark:text-primaryText-100">
                      {typeof skill.name === 'string' ? skill.name : t(skill.name)}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
