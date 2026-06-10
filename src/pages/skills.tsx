import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'
import { skills } from '@/content/skills'

export default function Skills() {
  const t = useT()

  return (
    <>
      <Head>
        <title>Skills - {siteMetadata.author}</title>
        <meta name="description" content={`Skills and expertise of ${siteMetadata.author}`} />
      </Head>
      <SimpleLayout
        title={t({ en: 'Skills', fr: 'Compétences' })}
        intro={t({
          en: 'Here are the various skills and tools I have mastered in the field of computer science, with a focus on AI and robotics.',
          fr: "Voici les différentes compétences et outils que je maîtrise dans le domaine de l'informatique, avec un accent sur l'IA et la robotique.",
        })}
      >
        <div className="space-y-20">
          {skills.map((skillCategory) => (
            <section key={skillCategory.category.en}>
              <h2 className="text-lg font-semibold leading-8 text-accent-600 dark:text-accent-400">
                {t(skillCategory.category)}
              </h2>
              <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 lg:grid-cols-6">
                {skillCategory.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-4 bg-white border shadow-sm dark:bg-primaryText-800 rounded-xl border-primaryText-200/50 dark:border-primaryText-700/50 transition-all duration-300 hover:shadow-md hover:border-accent-300 dark:hover:border-accent-600"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-lg bg-accent-500">
                      <skill.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div className="text-sm font-medium text-primaryText-900 dark:text-primaryText-100">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
