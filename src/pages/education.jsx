import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import BackgroundEducationCard from '@/components/BackgroundEducationCard'
import siteMetadata from '@/data/siteMetadata'

const educationBackground = [
    {
      degree: 'Master of Science in Artificial Intelligence',
      institution: 'Institut Polytechnique de Paris',
      logo: '/images/logo/ip-paris.png', // Add logo path here
      startDate: 'Juillet 2024',
      endDate: 'Now',
      description:
        'IP Paris is a prestigious engineering school in France. The computer science program is designed to provide students with a strong foundation in computer science and engineering. Focused on advanced AI topics, including machine learning, natural language processing, and robotics. Completed with distinction.',
      highlights: [
        'Thesis: "Deep Learning for Autonomous Vehicles"',
        'Relevant Courses: Advanced ML, Computer Vision, AI Ethics',
        'Dean\'s List for all semesters',
      ],
    },
    {
      degree: '2A Computer Science',
      institution: 'ENSTA Paris',
      logo: '/images/logo/ensta.png', // Add logo path here
      startDate: 'September 2020',
      endDate: 'June 2022',
      description:
        'ENSTA Paris is a prestigious engineering school in France. The computer science program is designed to provide students with a strong foundation in computer science and engineering. Focused on advanced AI topics, including machine learning, natural language processing, and robotics. Completed with distinction.',
      highlights: [
        'Thesis: "Deep Learning for Autonomous Vehicles"',
        'Relevant Courses: Advanced ML, Computer Vision, AI Ethics',
        'Dean\'s List for all semesters',
      ],
      },
    {
      degree: 'Master of Science in Artificial Intelligence',
      institution: 'Ecole Nationale Supérieure Polytechnique de Yaoundé',
      logo: '/images/logo/enspy.png', // Add logo path here
      startDate: 'September 2020',
      endDate: 'June 2022',
      description:
        'ENSPY is a prestigious engineering school in Cameroon. The computer science program is designed to provide students with a strong foundation in computer science and engineering. Focused on advanced AI topics, including machine learning, natural language processing, and robotics. Completed with distinction.',
      highlights: [
        'Thesis: "Deep Learning for Autonomous Vehicles"',
        'Relevant Courses: Advanced ML, Computer Vision, AI Ethics',
        'Dean\'s List for all semesters',
      ],
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Ecole Nationale Supérieure Polytechnique de Yaoundé',
      logo: '/images/logo/enspy.png', // Add logo path here
      startDate: 'August 2016',
      endDate: 'May 2020',
      description:
        'Learned foundational computer science, algorithms, and software engineering, with hands-on projects and internships.',
      highlights: [
        'Built a full-stack web application for campus events',
        'Internship at TechCorp: Automated testing pipeline development',
        'Graduated with honors',
      ],
    },
    {
      degree: 'Mathematics and Physics science baccalaureate',
      institution: 'Government Bilingual High School of Nylon Ndogpassi',
      logo: '/images/logo/lynyndo.jpeg', // Add logo path here
      startDate: '2019',
      endDate: '2020',
      description:
        'National examination in Cameroon. The program is designed to provide students with a strong foundation in mathematics, physical sciences and computer science. I obtain my diploma in order to prepare me integrating great engineering studies in my country',
      highlights: [
        'Prepare my future',
        'Mathematics',
        'Physics',
        'Chemistry',
        'General Knowledge',
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
