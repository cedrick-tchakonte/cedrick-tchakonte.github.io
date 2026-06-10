import Head from 'next/head'
import { EntryCard } from '@/components/EntryCard'
import { SectionHeading } from '@/components/SectionHeading'
import { SimpleLayout } from '@/components/SimpleLayout'
import { volunteerActivities } from '@/content/volunteer'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'

export default function Volunteer() {
  const t = useT()

  return (
    <>
      <Head>
        <title>{`${t({ en: 'Volunteer Work', fr: 'Bénévolat' })} - ${siteMetadata.author}`}</title>
        <meta
          name="description"
          content={t({
            en: `Volunteer activities and community involvement of ${siteMetadata.author}`,
            fr: `Activités bénévoles et engagement associatif de ${siteMetadata.author}`,
          })}
        />
      </Head>
      <SimpleLayout
        title={t({
          en: 'Volunteer Work & Community Involvement',
          fr: 'Engagement associatif',
        })}
        intro={t({
          en: "I believe in giving back to the community and contributing to meaningful causes. Here are some of the volunteer activities and community initiatives I'm actively involved in.",
          fr: "Je crois en l'importance de rendre à la communauté et de contribuer à des causes qui ont du sens. Voici quelques-unes des activités bénévoles et des initiatives communautaires dans lesquelles je m'investis activement.",
        })}
      >
        <SectionHeading
          title={t({ en: 'Community Involvement', fr: 'Mon engagement' })}
          className="mb-10"
        />
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {volunteerActivities.map((activity, index) => (
            <li key={index}>
              <EntryCard
                logo={activity.logo}
                logoAlt={activity.organization}
                title={`${t(activity.title)} ${t({ en: 'at', fr: 'chez' })} ${activity.organization}`}
                date={t(activity.date)}
                location={t(activity.location)}
                bullets={t(activity.description)}
                link={activity.link}
              />
            </li>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
