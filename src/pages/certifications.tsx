import Head from 'next/head'
import { PageLayout } from '@/components/PageLayout'
import CertificationCard from '@/components/CertificationCard'
import siteMetadata from '@/data/siteMetadata'

interface Certification {
  name: string
  issuer: string
  date: string
  description: string
  logo: string
  tags: string[]
  verificationLink?: string
}

const certifications: Certification[] = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Stanford University & DeepLearning.AI',
    date: 'Mars 2025',
    description:
      'A foundational program covering supervised machine learning (regression and classification), advanced learning algorithms (neural networks and decision trees), and unsupervised learning, recommender systems and reinforcement learning.',
    logo: '/images/deepLearning.ai.png',
    tags: [
      'Machine Learning',
      'Supervised Learning',
      'Neural Networks',
      'Unsupervised Learning',
      'Recommender Systems',
    ],
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'deeplearning.ai',
    date: 'Avril 2025',
    description:
      'A comprehensive certification covering neural networks, deep learning, and their applications in computer vision, natural language processing, and sequence models.',
    logo: '/images/deepLearning.ai.png',
    tags: ['AI', 'Neural Networks', 'NLP', 'Deep Learning', 'Computer Vision'],
    verificationLink: 'https://coursera.org/share/cfca8d6b98c3ddaf10ac87c8971ee486',
  },
  {
    name: 'Project Management',
    issuer: 'Centrale Lille',
    date: 'Novembre 2024',
    description:
      'A comprehensive certification covering the fundamentals of project management, including planning, team coordination, risk management, and Agile methodologies.',
    logo: '/images/gdp.png',
    tags: ['Project Management', 'Agile', 'Team Coordination', 'Risk Management', 'Planning'],
    verificationLink: 'https://certification.gestiondeprojet.pm/GdP24AP/GdP24PC-TCJavHuPA.pdf',
  },
  {
    name: 'Programmation pour tous (Mise en route de Python)',
    issuer: 'Coursera | University of Michigan',
    date: 'Février 2023',
    description:
      'This course aims to teach everyone the basics of programming computers using Python. We cover the basics of how one constructs a program from a series of simple instructions in Python.',
    logo: '/images/michigan.png',
    tags: ['Python', 'Software Development', 'Programming', 'Data Structures'],
    verificationLink: 'https://coursera.org/share/6685c3e76863eafdd0896d26bed78336',
  },
  {
    name: 'Initiation à la programmation en Java',
    issuer: 'Coursera | Ecole Polytechnique Fédérale de Lausanne',
    date: 'Décembre 2022',
    description:
      'This course introduces the fundamentals of programming and object-oriented design using Java, covering variables, control structures, classes and objects through hands-on exercises.',
    logo: '/images/epfl.png',
    tags: ['Java', 'Software Development', 'Object-Oriented Programming', 'Data Structures'],
    verificationLink: 'https://coursera.org/share/57909ae0d46dc914244f165bbb010689',
  },
  {
    name: 'FCF - Fortinet Certified Fundamentals in Cybersecurity',
    issuer: 'Fortinet',
    date: 'Avril 2024',
    description:
      'This course provides a foundation of cybersecurity knowledge and skills. It covers the latest trends in cybersecurity and how to protect your organization from cyber threats.',
    logo: '/images/fortinet.png',
    tags: ['Cybersecurity', 'Threat Landscape', 'Network Security', 'Data Protection'],
    verificationLink: 'https://training.fortinet.com/local/cert/my/certificate.php?badge=84',
  },
  {
    name: 'FCA - Fortinet Certified Associate in Cybersecurity',
    issuer: 'Fortinet',
    date: 'Avril 2024',
    description:
      'This course specializes in the configuration and management of FortiGate devices. It covers the basics of FortiGate, including firewall policies, security profiles, and VPNs.',
    logo: '/images/fortinet.png',
    tags: ['FortiGate', 'Network Security', 'Firewall Policies', 'VPN'],
    verificationLink: 'https://training.fortinet.com/local/cert/my/certificate.php?badge=85',
  },
]

export default function Certifications() {
  const platformCount = new Set(certifications.map((c) => c.issuer)).size

  return (
    <>
      <Head>
        <title>Certifications - {siteMetadata.author}</title>
        <meta name="description" content={`Certifications obtained by ${siteMetadata.author}`} />
      </Head>
      <PageLayout
        title="Certifications"
        subtitle="Professional certifications demonstrating expertise in AI, deep learning, cybersecurity, and software development."
      >
        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/30 dark:to-accent-800/20 p-6 rounded-xl border border-accent-200 dark:border-accent-800">
            <p className="text-3xl font-bold text-accent-600 dark:text-accent-400">{certifications.length}</p>
            <p className="text-sm text-primaryText-600 dark:text-primaryText-400 mt-1">Total Certifications</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{platformCount}</p>
            <p className="text-sm text-primaryText-600 dark:text-primaryText-400 mt-1">Platforms</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">2025</p>
            <p className="text-sm text-primaryText-600 dark:text-primaryText-400 mt-1">Latest Year</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">5+</p>
            <p className="text-sm text-primaryText-600 dark:text-primaryText-400 mt-1">Skill Areas</p>
          </div>
        </div>

        {/* Grid Layout for Certification Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} />
          ))}
        </div>
      </PageLayout>
    </>
  )
}
