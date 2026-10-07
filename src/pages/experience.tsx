import Head from 'next/head'
import { motion } from 'framer-motion'
import { EntryCard } from '@/components/EntryCard'
import { SectionHeading } from '@/components/SectionHeading'
import { SimpleLayout } from '@/components/SimpleLayout'
import { experiences } from '@/content/experience'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'
import { fadeUp, reveal, stagger } from '@/lib/motion'

export default function Experience() {
  const t = useT()

  return (
    <>
      <Head>
        <title>{`${t({ en: 'Experience', fr: 'Expérience professionnelle' })} - ${siteMetadata.author}`}</title>
        <meta
          name="description"
          content={t({
            en: `Work experience of ${siteMetadata.author}`,
            fr: `Expérience professionnelle de ${siteMetadata.author}`,
          })}
        />
      </Head>
      <SimpleLayout
        title={t(siteMetadata.experience.title)}
        intro={t(siteMetadata.experience.intro)}
      >
        <SectionHeading
          title={t({ en: 'Work Experience', fr: 'Expérience professionnelle' })}
          className="mb-8"
        />
        <motion.ul role="list" className="space-y-6" variants={stagger} {...reveal}>
          {experiences.map((experience, index) => (
            <motion.li key={index} variants={fadeUp}>
              <EntryCard
                logo={experience.logo}
                logoAlt={t(experience.company)}
                title={`${t(experience.title)} ${t({ en: 'at', fr: 'chez' })} ${t(experience.company)}`}
                date={t(experience.date)}
                location={t(experience.location)}
                bullets={t(experience.description)}
                link={experience.link}
              />
            </motion.li>
          ))}
        </motion.ul>
      </SimpleLayout>
    </>
  )
}
