import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import BackgroundEducationCard from '@/components/BackgroundEducationCard'
import siteMetadata from '@/data/siteMetadata'

const educationBackground = [
    {
        degree: 'Master of Science in Artificial Intelligence',
        institution: 'Tech University',
        logo: '/images/logo/ensta.png', // Add logo path here
        startDate: 'September 2020',
        endDate: 'June 2022',
        description:
          'Focused on advanced AI topics, including machine learning, natural language processing, and robotics. Completed with distinction.',
        highlights: [
          'Thesis: "Deep Learning for Autonomous Vehicles"',
          'Relevant Courses: Advanced ML, Computer Vision, AI Ethics',
          'Dean\'s List for all semesters',
        ],
      },
    {
      degree: 'Master of Science in Artificial Intelligence',
      institution: 'Tech University',
      logo: '/images/logo/enspy.png', // Add logo path here
      startDate: 'September 2020',
      endDate: 'June 2022',
      description:
        'Focused on advanced AI topics, including machine learning, natural language processing, and robotics. Completed with distinction.',
      highlights: [
        'Thesis: "Deep Learning for Autonomous Vehicles"',
        'Relevant Courses: Advanced ML, Computer Vision, AI Ethics',
        'Dean\'s List for all semesters',
      ],
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Innovation Institute',
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
