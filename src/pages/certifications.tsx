import Head from 'next/head'
import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FaAward, FaLayerGroup, FaCalendarAlt, FaBrain } from 'react-icons/fa'
import { PageLayout } from '@/components/PageLayout'
import CertificationCard from '@/components/CertificationCard'
import siteMetadata from '@/data/siteMetadata'
import { useT, type I18n } from '@/i18n'
import { fadeUp, reveal, stagger } from '@/lib/motion'
import { certifications } from '@/content/certifications'

export default function Certifications() {
  const platformCount = new Set(certifications.map((c) => c.issuer)).size
  const latestYear = Math.max(...certifications.map((c) => Number(c.date.en.slice(-4))))
  const t = useT()

  const stats: { icon: IconType; value: string | number; label: I18n<string> }[] = [
    {
      icon: FaAward,
      value: certifications.length,
      label: { en: 'Certifications', fr: 'Certifications' },
    },
    {
      icon: FaLayerGroup,
      value: platformCount,
      label: { en: 'Platforms', fr: 'Plateformes' },
    },
    {
      icon: FaCalendarAlt,
      value: latestYear,
      label: { en: 'Latest year', fr: 'Dernière année' },
    },
    {
      icon: FaBrain,
      value: '5+',
      label: { en: 'Skill areas', fr: 'Domaines' },
    },
  ]

  return (
    <>
      <Head>
        <title>{`${t({ en: 'Certifications', fr: 'Certifications' })} - ${siteMetadata.author}`}</title>
        <meta
          name="description"
          content={t({
            en: `Certifications obtained by ${siteMetadata.author}`,
            fr: `Certifications obtenues par ${siteMetadata.author}`,
          })}
        />
      </Head>
      <PageLayout
        title={t({ en: 'Certifications', fr: 'Certifications' })}
        subtitle={t({
          en: 'Professional certifications demonstrating expertise in AI, deep learning, cybersecurity, and software development.',
          fr: "Certifications professionnelles attestant d'une expertise en IA, deep learning, cybersécurité et développement logiciel.",
        })}
      >
        {/* Statistics */}
        <motion.dl
          className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4"
          variants={stagger}
          {...reveal}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label.en}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-primaryText-200/70 bg-white p-6 shadow-sm dark:border-primaryText-800 dark:bg-primaryText-900"
            >
              <dt className="flex items-center gap-2 text-sm text-primaryText-500 dark:text-primaryText-400">
                <stat.icon className="h-4 w-4 flex-none text-accent-600 dark:text-accent-400" aria-hidden="true" />
                {t(stat.label)}
              </dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-primaryText-900 dark:text-primaryText-50">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>

        {/* Certification cards */}
        <motion.ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3"
          variants={stagger}
          {...reveal}
        >
          {certifications.map((certification, index) => (
            <motion.li key={index} variants={fadeUp} className="grid">
              <CertificationCard
                certification={{
                  ...certification,
                  name:
                    typeof certification.name === 'string'
                      ? certification.name
                      : t(certification.name),
                  date: t(certification.date),
                  description: t(certification.description),
                }}
              />
            </motion.li>
          ))}
        </motion.ul>
      </PageLayout>
    </>
  )
}
