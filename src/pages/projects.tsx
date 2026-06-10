import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { projectsData } from '@/content/projects'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'

function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

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
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project) => (
            <Card as="li" key={project.href}>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 text-white shadow-md rounded-xl bg-gradient-to-br from-accent-500 to-accent-600">
                <project.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                <Card.Link href={project.href}>{t(project.title)}</Card.Link>
              </h3>
              {/* Eyebrow - texte complémentaire */}
              <Card.Eyebrow decorate>{t(project.category)}</Card.Eyebrow>
              <Card.Description>{t(project.description)}</Card.Description>
              <p className="relative z-10 flex mt-6 text-sm font-medium transition text-primaryText-400 group-hover:text-accent-500 dark:text-primaryText-200">
                <LinkIcon className="flex-none w-6 h-6" />
                <span className="ml-2">{t({ en: 'View on GitHub', fr: 'Voir sur GitHub' })}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
