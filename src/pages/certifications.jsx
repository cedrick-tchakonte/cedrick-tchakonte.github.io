import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import CertificationCard from '@/components/CertificationCard'
import siteMetadata from '@/data/siteMetadata'

const certifications = [
    {
      name: 'Advanced AI Certification',
      issuer: 'Deep Learning Institute',
      date: 'March 2023',
      description: 'An advanced certification covering neural networks, computer vision, and NLP.',
      logo: '/images/certification.png',
      tags: ['AI', 'Machine Learning', 'Deep Learning'],
      verificationLink: 'https://example.com/verify/ai-certification',
    },
    {
      name: 'Full Stack Developer Certification',
      issuer: 'Code Academy',
      date: 'January 2022',
      description: 'Comprehensive certification in web development, covering front-end and back-end technologies.',
      logo: '/images/deepLearning.ai.png',
      tags: ['Web Development', 'JavaScript', 'React'],
      verificationLink: 'https://example.com/verify/fullstack-certification',
    },
    {
      name: 'Robotics Engineering Basics',
      issuer: 'Robotics Foundation',
      date: 'June 2021',
      description: 'A foundational course in robotics, with a focus on hardware integration and AI control systems.',
      logo: '/images/certification.png',
      tags: ['Robotics', 'AI', 'Hardware'],
      verificationLink: 'https://example.com/verify/robotics-certification',
    },
    {
        name: 'Robotics Engineering Basics',
        issuer: 'Robotics Foundation',
        date: 'June 2021',
        description: 'A foundational course in robotics, with a focus on hardware integration and AI control systems.',
        logo: '/images/certification.png',
        tags: ['Robotics', 'AI', 'Hardware'],
        verificationLink: 'https://example.com/verify/robotics-certification',
    },
]
  

export default function Certifications() {
  return (
    <>
      <Head>
        <title>Certifications - {siteMetadata.author}</title>
        <meta name="description" content={`Certifications obtained by ${siteMetadata.author}`} />
      </Head>
      <SimpleLayout
        title="Certifications"
        intro="Here are the various certifications I have obtained in the field of computer science, with a focus on AI, robotics, and software development."
      >
        {/* Grid Layout for Certification Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} />
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
