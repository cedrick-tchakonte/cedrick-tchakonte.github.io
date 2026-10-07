import Head from 'next/head'
import { motion } from 'framer-motion'
import { EntryCard } from '@/components/EntryCard'
import { SectionHeading } from '@/components/SectionHeading'
import { SimpleLayout } from '@/components/SimpleLayout'
import { volunteerActivities } from '@/content/volunteer'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'
import { fadeUp, reveal, stagger } from '@/lib/motion'

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
          en: "I believe in giving back to the community. Here are some of the volunteer activities and initiatives I'm involved in.",
          fr: "Je crois en l'importance de rendre à la communauté. Voici quelques-unes des activités bénévoles et initiatives dans lesquelles je m'investis.",
        })}
      >
        <SectionHeading
          title={t({ en: 'Community Involvement', fr: 'Mon engagement' })}
          className="mb-8"
        />
        <motion.ul role="list" className="space-y-6" variants={stagger} {...reveal}>
          {volunteerActivities.map((activity, index) => (
            <motion.li key={index} variants={fadeUp}>
              <EntryCard
                logo={activity.logo}
                logoAlt={activity.organization}
                title={`${t(activity.title)} ${t({ en: 'at', fr: 'chez' })} ${activity.organization}`}
                date={t(activity.date)}
                location={t(activity.location)}
                bullets={t(activity.description)}
                link={activity.link}
              />
            </motion.li>
          ))}
        </motion.ul>
      </SimpleLayout>
    </>
  )
}
