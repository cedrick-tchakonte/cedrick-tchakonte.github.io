import { RiRobotLine } from 'react-icons/ri'
import { IoSchoolOutline, IoCodeWorkingOutline, IoBulbOutline } from 'react-icons/io5'
import type { IconType } from 'react-icons'
import { SectionHeading } from '@/components/SectionHeading'
import { useT } from '@/i18n'
import type { I18n } from '@/i18n'

type Feature = {
  name: I18n<string>
  description: I18n<string>
  icon: IconType
}

const features: Feature[] = [
  {
    name: {
      en: 'AI & Cyber-Physical Systems',
      fr: 'IA et systèmes cyber-physiques',
    },
    description: {
      en: 'Currently specializing in AI and Cyber-Physical Systems at ENSTA Paris. Working on advanced machine learning algorithms, computer vision, and robotic navigation systems. Experience with TensorFlow, PyTorch, and ROS.',
      fr: "Actuellement en spécialisation en IA et systèmes cyber-physiques à l'ENSTA Paris. Je travaille sur des algorithmes avancés de machine learning, la vision par ordinateur et les systèmes de navigation robotique. Expérience avec TensorFlow, PyTorch et ROS.",
    },
    icon: RiRobotLine,
  },
  {
    name: {
      en: 'Professional Experience',
      fr: 'Expérience professionnelle',
    },
    description: {
      en: 'Gaining hands-on industry experience as a Machine Learning Research Intern at Stellantis, and through internships at TAEP, Objectware and STMicroelectronics. My work spans surrogate modeling, Graph RAG, LLM-based decision support and Digital Twin simulations.',
      fr: "J'acquiers une expérience concrète en entreprise en tant que stagiaire chercheur en machine learning chez Stellantis, ainsi que lors de stages chez TAEP, Objectware et STMicroelectronics. Mes travaux couvrent la modélisation de substitution, le Graph RAG, l'aide à la décision fondée sur les LLM et les simulations de jumeaux numériques.",
    },
    icon: IoSchoolOutline,
  },
  {
    name: {
      en: 'Research & Innovation',
      fr: 'Recherche et innovation',
    },
    description: {
      en: 'Passionate about pushing the boundaries of AI and technology. Developed retinal vessel segmentation systems, computer vision algorithms, and 4D GPS navigation for VTOL aircraft. Always exploring new technologies and innovative solutions.',
      fr: "Passionné par le fait de repousser les limites de l'IA et de la technologie. J'ai développé des systèmes de segmentation des vaisseaux rétiniens, des algorithmes de vision par ordinateur et une navigation GPS 4D pour aéronefs VTOL. Toujours à explorer de nouvelles technologies et des solutions innovantes.",
    },
    icon: IoBulbOutline,
  },
  {
    name: {
      en: 'Full-Stack Development',
      fr: 'Développement full-stack',
    },
    description: {
      en: 'Proficient in multiple programming languages including Python, C++, Java, JavaScript, and R. Experience with web development (React, Next.js), cloud platforms (AWS, Azure), and development tools (Docker, Git). Strong foundation in software engineering and system design.',
      fr: "Maîtrise de plusieurs langages de programmation, dont Python, C++, Java, JavaScript et R. Expérience en développement web (React, Next.js), sur les plateformes cloud (AWS, Azure) et avec les outils de développement (Docker, Git). Solides bases en génie logiciel et en conception de systèmes.",
    },
    icon: IoCodeWorkingOutline,
  },
]
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
            en: 'I am an engineering student specializing in AI and Cyber-Physical Systems at ENSTA Paris, currently on a gap year gaining hands-on industry experience. My projects and professional experiences reflect my dedication and innovative approach in AI and technology.',
            fr: "Je suis un étudiant ingénieur spécialisé en IA et systèmes cyber-physiques à l'ENSTA Paris, actuellement en année de césure pour acquérir une expérience concrète en entreprise. Mes projets et mes expériences professionnelles reflètent mon engagement et mon approche innovante en IA et en technologie.",
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
