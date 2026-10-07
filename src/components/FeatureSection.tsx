import { SectionHeading } from '@/components/SectionHeading'
import { useT } from '@/i18n'
import { features } from '@/content/features'

const FeatureSection = () => {
  const t = useT()

  return (
    <div className="py-16 sm:py-20">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <SectionHeading
          align="center"
          eyebrow={t({
            en: 'Engineering Student & AI Specialist',
            fr: "Étudiant ingénieur et spécialiste en IA",
          })}
          title={t({ en: 'Why Choose Me?', fr: 'Pourquoi me choisir ?' })}
          subtitle={t({
            en: 'I am a final-year engineering student specializing in AI and Cyber-Physical Systems at ENSTA Paris, with hands-on industry experience in machine learning research and AI engineering. My projects and professional experiences reflect my dedication and innovative approach in AI and technology.',
            fr: "Je suis élève ingénieur en dernière année à l'ENSTA Paris, spécialisé en IA et systèmes cyber-physiques, avec une expérience concrète en entreprise en recherche en machine learning et en ingénierie IA. Mes projets et mes expériences professionnelles reflètent mon engagement et mon approche innovante en IA et en technologie.",
          })}
        />

        <div className="max-w-lg mt-12 sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
            {features.map((feature) => (
              <div
                key={feature.name.en}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex items-center justify-center w-12 h-12 text-white rounded-xl bg-accent-500 sm:shrink-0">
                  <feature.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-primaryText-800 dark:text-primaryText-100">
                    {t(feature.name)}
                  </p>
                  <p className="mt-2 text-base leading-7 text-primaryText-600 dark:text-primaryText-400">
                    {t(feature.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
