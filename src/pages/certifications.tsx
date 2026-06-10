import Head from 'next/head'
import type { IconType } from 'react-icons'
import { FaAward, FaLayerGroup, FaCalendarAlt, FaBrain } from 'react-icons/fa'
import { PageLayout } from '@/components/PageLayout'
import CertificationCard from '@/components/CertificationCard'
import siteMetadata from '@/data/siteMetadata'
import { useT, type I18n } from '@/i18n'
import { certifications } from '@/content/certifications'

export default function Certifications() {
  const platformCount = new Set(certifications.map((c) => c.issuer)).size
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
      value: '2025',
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
        {/* Statistics Section */}
        <div className="grid grid-cols-2 gap-4 mb-12 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 text-center transition-shadow bg-white border shadow-sm rounded-2xl dark:bg-primaryText-800 border-primaryText-200/60 dark:border-primaryText-700/50 hover:shadow-md"
            >
              <div className="flex items-center justify-center mb-3 text-white shadow-md w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600">
                <stat.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <p className="text-3xl font-bold text-primaryText-900 dark:text-primaryText-100">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-primaryText-500 dark:text-primaryText-400">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </div>

        {/* Grid Layout for Certification Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={index}
              certification={{
                ...certification,
                name:
                  typeof certification.name === 'string'
                    ? certification.name
                    : t(certification.name),
                description: t(certification.description),
              }}
            />
          ))}
        </div>
      </PageLayout>
    </>
  )
}
