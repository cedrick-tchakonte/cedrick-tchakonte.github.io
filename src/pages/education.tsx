import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import BackgroundEducationCard from '@/components/BackgroundEducationCard'
import siteMetadata from '@/data/siteMetadata'

interface EducationBackground {
  degree: string
  institution: string
  logo: string
  startDate: string
  endDate: string
  description: string
  highlights: string[]
}

const educationBackground: EducationBackground[] = [
  {
    degree: '2nd Year Engineering Student in Artificial Intelligence and Cyber-Physical Systems',
    institution: 'ENSTA Campus de Paris-Saclay, Institut Polytechnique de Paris',
    logo: '/images/logo/ip-paris.png',
    startDate: 'August 2024',
    endDate: 'August 2025',
    description:
      'ENSTA Campus de Paris-Saclay is a prestigious engineering school in France, part of the Institut Polytechnique de Paris. Specialized in Artificial Intelligence and Cyber-Physical Systems, with a focus on machine learning, image recognition, microprocessor architecture, and robotic navigation.',
    highlights: [
      'AI and Cyber-Physical Systems specialization',
      'Relevant Courses: Machine Learning, Image Recognition, Microprocessor Architecture, Statistical Learning, Control Theory, Robotic Navigation',
      'Currently on a gap year (césure), gaining industry experience through AI/ML internships',
    ],
  },
  {
    degree: 'Intensive Preparatory Program in Mathematics and Physical Sciences',
    institution: 'National Advanced School of Engineering, Yaoundé, Cameroon',
    logo: '/images/logo/enspy.png',
    startDate: 'October 2020',
    endDate: 'August 2024',
    description:
      'ENSPY is a prestigious engineering school in Cameroon. Completed intensive preparatory program in mathematics and physical sciences for competitive engineering entrance examinations, providing strong foundation in advanced mathematics and physics.',
    highlights: [
      'Preparatory program for competitive engineering entrance examinations',
      'Relevant Courses: Linear Algebra, Data Analysis, Mechanics, Differential Equations, Probability and Statistics',
      'Admissible at the École Polytechnique entrance exam; admitted to IP Paris (ENSTA Paris, Télécom Paris, ENSAE)',
    ],
  },
  {
    degree: 'Baccalauréat scientifique | Mathematics, Physical Sciences and Computer Science',
    institution: 'Government Bilingual High School of Nylon Ndogpassi',
    logo: '/images/logo/lynyndo.jpeg',
    startDate: '2019',
    endDate: '2020',
    description:
      'National examination in Cameroon. The program is designed to provide students with a strong foundation in mathematics, physical sciences and computer science. I obtained my diploma to prepare for integrating great engineering studies in my country.',
    highlights: [
      'National examination preparation',
      'Mathematics, Physics, Chemistry, Computer Science',
      'Graduated with honors: mention très bien',
    ],
  },
]

export default function Education() {
  return (
    <>
      <Head>
        <title>Education - {siteMetadata.author}</title>
        <meta name="description" content={`The academic background of ${siteMetadata.author}`} />
      </Head>
      <SimpleLayout
        title="Education Background"
        intro="Here is a detailed view of my academic journey, showcasing the institutions I attended, degrees earned, and achievements during my studies."
      >
        {/* One Card per Line Layout */}
        <div className="flex flex-col space-y-8">
          {educationBackground.map((education, index) => (
            <BackgroundEducationCard key={index} education={education} />
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
