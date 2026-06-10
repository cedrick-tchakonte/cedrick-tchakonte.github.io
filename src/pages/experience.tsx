import Head from 'next/head'
import { EntryCard } from '@/components/EntryCard'
import { SectionHeading } from '@/components/SectionHeading'
import { SimpleLayout } from '@/components/SimpleLayout'
import { experiences } from '@/content/experience'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'

export default function Experience() {
  const t = useT()

  return (
    <>
      <Head>
        <title>{`Experience - ${siteMetadata.author}`}</title>
        <meta
          name="description"
          content={`Work experience of ${siteMetadata.author}`}
        />
      </Head>
      <SimpleLayout
        title={t(siteMetadata.experience.title)}
        intro={t(siteMetadata.experience.intro)}
      >
        <SectionHeading
          title={t({ en: 'Work Experience', fr: 'Expérience professionnelle' })}
          className="mb-10"
        />
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {experiences.map((experience, index) => (
            <li key={index}>
              <EntryCard
                logo={experience.logo}
                logoAlt={experience.company}
                title={`${t(experience.title)} ${t({ en: 'at', fr: 'chez' })} ${experience.company}`}
                date={t(experience.date)}
                location={t(experience.location)}
                bullets={t(experience.description)}
                link={experience.link}
              />
            </li>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
