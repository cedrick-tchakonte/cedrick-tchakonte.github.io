import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import BackgroundEducationCard from '@/components/BackgroundEducationCard'
import siteMetadata from '@/data/siteMetadata'
import { useT, type I18n } from '@/i18n'

interface EducationBackground {
  degree: I18n<string>
  institution: I18n<string>
  logo: string
  startDate: I18n<string>
  endDate: I18n<string>
  description: I18n<string>
  highlights: I18n<string[]>
}

const educationBackground: EducationBackground[] = [
  {
    degree: {
      en: 'Engineering Degree in AI & Cyber-Physical Systems (2A Completed)',
      fr: "Diplôme d'ingénieur en IA et systèmes cyber-physiques (2A validée)",
    },
    institution: {
      en: 'ENSTA Paris (Institut Polytechnique de Paris)',
      fr: 'ENSTA Paris (Institut Polytechnique de Paris)',
    },
    logo: '/images/logo/ensta.png',
    startDate: { en: 'August 2024', fr: 'Août 2024' },
    endDate: { en: 'August 2025', fr: 'Août 2025' },
    description: {
      en: 'ENSTA Paris is a prestigious engineering school in France, part of the Institut Polytechnique de Paris. Specialized in Artificial Intelligence and Cyber-Physical Systems, with a focus on machine learning, image recognition, microprocessor architecture, and robotic navigation.',
      fr: "ENSTA Paris est une grande école d'ingénieurs prestigieuse en France, membre de l'Institut Polytechnique de Paris. Spécialisation en intelligence artificielle et systèmes cyber-physiques, avec un accent sur l'apprentissage automatique, la reconnaissance d'images, l'architecture des microprocesseurs et la navigation robotique.",
    },
    highlights: {
      en: [
        'AI and Cyber-Physical Systems specialization',
        'Relevant Courses: Machine Learning, Image Recognition, Microprocessor Architecture, Statistical Learning, Control Theory, Robotic Navigation',
        'Currently on a gap year (césure), gaining industry experience through AI/ML internships',
      ],
      fr: [
        'Spécialisation en IA et systèmes cyber-physiques',
        "Cours pertinents : apprentissage automatique, reconnaissance d'images, architecture des microprocesseurs, apprentissage statistique, théorie du contrôle, navigation robotique",
        "Actuellement en année de césure, acquérant une expérience en entreprise grâce à des stages en IA/ML",
      ],
    },
  },
  {
    degree: {
      en: 'Intensive Preparatory Program in Mathematics and Physical Sciences',
      fr: 'Classes préparatoires intensives en mathématiques et sciences physiques',
    },
    institution: {
      en: 'National Advanced School of Engineering, Yaoundé, Cameroon',
      fr: 'École Nationale Supérieure Polytechnique, Yaoundé, Cameroun',
    },
    logo: '/images/logo/enspy.png',
    startDate: { en: 'October 2020', fr: 'Octobre 2020' },
    endDate: { en: 'August 2024', fr: 'Août 2024' },
    description: {
      en: 'ENSPY is a prestigious engineering school in Cameroon. Completed intensive preparatory program in mathematics and physical sciences for competitive engineering entrance examinations, providing strong foundation in advanced mathematics and physics.',
      fr: "L'ENSPY est une grande école d'ingénieurs prestigieuse au Cameroun. J'y ai suivi un programme préparatoire intensif en mathématiques et sciences physiques en vue des concours d'entrée aux écoles d'ingénieurs, qui m'a donné de solides bases en mathématiques avancées et en physique.",
    },
    highlights: {
      en: [
        'Preparatory program for competitive engineering entrance examinations',
        'Relevant Courses: Linear Algebra, Data Analysis, Mechanics, Differential Equations, Probability and Statistics',
        'Admissible at the École Polytechnique entrance exam; admitted to IP Paris (ENSTA Paris, Télécom Paris, ENSAE)',
      ],
      fr: [
        "Programme préparatoire aux concours d'entrée aux écoles d'ingénieurs",
        'Cours pertinents : algèbre linéaire, analyse de données, mécanique, équations différentielles, probabilités et statistiques',
        "Admissible au concours d'entrée de l'École Polytechnique ; admis à IP Paris (ENSTA Paris, Télécom Paris, ENSAE)",
      ],
    },
  },
  {
    degree: {
      en: 'Baccalauréat scientifique | Mathematics, Physical Sciences and Computer Science',
      fr: 'Baccalauréat scientifique | Mathématiques, sciences physiques et informatique',
    },
    institution: {
      en: 'Government Bilingual High School of Nylon Ndogpassi',
      fr: 'Lycée Bilingue de Nylon Ndogpassi',
    },
    logo: '/images/logo/lynyndo.jpeg',
    startDate: { en: '2019', fr: '2019' },
    endDate: { en: '2020', fr: '2020' },
    description: {
      en: 'National examination in Cameroon. The program is designed to provide students with a strong foundation in mathematics, physical sciences and computer science. I obtained my diploma to prepare for integrating great engineering studies in my country.',
      fr: "Examen national au Cameroun. Le programme vise à donner aux élèves de solides bases en mathématiques, sciences physiques et informatique. J'ai obtenu mon diplôme afin de me préparer à intégrer de grandes études d'ingénieur dans mon pays.",
    },
    highlights: {
      en: [
        'National examination preparation',
        'Mathematics, Physics, Chemistry, Computer Science',
        'Graduated with honors: mention très bien',
      ],
      fr: [
        "Préparation à l'examen national",
        'Mathématiques, physique, chimie, informatique',
        'Diplômé avec les félicitations : mention très bien',
      ],
    },
  },
]

export default function Education() {
  const t = useT()

  return (
    <>
      <Head>
        <title>Education - {siteMetadata.author}</title>
        <meta name="description" content={`The academic background of ${siteMetadata.author}`} />
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
