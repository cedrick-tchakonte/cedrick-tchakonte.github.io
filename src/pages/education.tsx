import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import BackgroundEducationCard from '@/components/BackgroundEducationCard'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'
import { educationBackground } from '@/content/education'

export default function Education() {
  const t = useT()

  return (
    <>
      <Head>
        <title>{`${t({ en: 'Education', fr: 'Formation' })} - ${siteMetadata.author}`}</title>
        <meta
          name="description"
          content={t({
            en: `The academic background of ${siteMetadata.author}`,
            fr: `Le parcours académique de ${siteMetadata.author}`,
          })}
        />
      </Head>
      <SimpleLayout
        title={t({ en: 'Education Background', fr: 'Parcours académique' })}
        intro={t({
          en: 'Here is a detailed view of my academic journey, showcasing the institutions I attended, degrees earned, and achievements during my studies.',
          fr: "Voici une vue détaillée de mon parcours académique, présentant les établissements que j'ai fréquentés, les diplômes obtenus et les réussites marquantes de mes études.",
        })}
      >
        {/* One Card per Line Layout */}
        <div className="flex flex-col space-y-8">
          {educationBackground.map((education, index) => (
            <BackgroundEducationCard
              key={index}
              education={{
                degree: t(education.degree),
                institution: t(education.institution),
                logo: education.logo,
                startDate: t(education.startDate),
                endDate: t(education.endDate),
                description: t(education.description),
                highlights: t(education.highlights),
              }}
            />
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
