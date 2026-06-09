import Image, { type StaticImageData } from 'next/image'
import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { RiLinksLine } from 'react-icons/ri'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import siteMetadata from '@/data/siteMetadata'
import stellantisLogo from '@/images/logos/stellantis.svg'
import taepLogo from '@/images/logos/taep.jpg'
import objectwareLogo from '@/images/logos/objectware.svg'
import stMicroLogo from '@/images/logos/stmicroelectronics.svg'

interface ExperienceLink {
  url: string
  label: string
}

interface ExperienceItem {
  title: string
  company: string
  date: string
  description: string[]
  location: string
  link: ExperienceLink
  logo: StaticImageData
}

const experiences: ExperienceItem[] = [
  {
    title: 'Machine Learning Research Intern',
    company: 'Stellantis',
    date: 'Feb 2026 - Present',
    description: [
      'Built a multimodal dataset from 3D scans, meshes and impact test data (Euro NCAP / China NCAP / Japan NCAP frameworks).',
      'Applied transfer learning (ResNet, ShuffleNet, EfficientNet) and designed 3D CNN/GNN surrogate models to predict pedestrian protection metrics.',
      'Benchmarked against physical tests and finite element simulations to support early-stage safety optimization.',
    ],
    location: 'GrEEn-Campus Poissy, France',
    link: { url: 'https://www.stellantis.com/', label: 'Stellantis' },
    logo: stellantisLogo,
  },
  {
    title: 'Junior AI Engineer',
    company: 'TAEP (Junior Enterprise of ENSTA)',
    date: 'Nov 2025 - Present',
    description: [
      'Developed a Graph RAG system for European financial regulation, building knowledge graphs from regulatory corpora to model relationships between directives, articles and legal entities.',
      'Engineered LLM-based entity and relation extraction pipelines to populate graph structures from unstructured legal texts.',
      'Combined vector search with graph traversal for hybrid retrieval, improving relevance over standard RAG.',
    ],
    location: 'Palaiseau, France',
    link: { url: 'https://www.taep.fr/', label: 'TAEP' },
    logo: taepLogo,
  },
  {
    title: 'Junior AI Research Engineer',
    company: 'Objectware',
    date: 'Sept 2025 - Jan 2026',
    description: [
      'Created AI-based decision support systems using LLMs and NLP for predictive analytics and enterprise automation.',
      'Fine-tuned small language models using LoRA/QLoRA for domain-specific tasks with reduced compute cost.',
      'Collaborated with cross-functional teams to integrate AI solutions into enterprise workflows.',
    ],
    location: 'Paris, France',
    link: { url: 'https://www.objectware.fr/', label: 'Objectware' },
    logo: objectwareLogo,
  },
  {
    title: 'R&D Intern - AI for Embedded Systems',
    company: 'STMicroelectronics',
    date: 'May 2025 - Aug 2025',
    description: [
      'Worked within the System Level Modeling team on C++ "Digital Twin" simulations enabling virtual execution of embedded software across multiple ST divisions (automotive, RF, secure MCUs).',
      'Built AI-assisted workflows using LLMs, RAG and vector databases to automate documentation analysis and model generation for the simulation codebases.',
      'Benchmarked and integrated the solution into SOC Digital Twin development, improving documentation retrieval efficiency in simulation-driven validation.',
    ],
    location: 'Grenoble, France',
    link: { url: 'https://www.st.com/', label: 'STMicroelectronics' },
    logo: stMicroLogo,
  },
]

export default function Experience() {
  return (
    <>
      <Head>
        <title>{`Experience - ${siteMetadata.author}`}</title>
        <meta
          name="description"
          content={`Work experience of ${siteMetadata.author}`}
        />
      </Head>
      <SimpleLayout
        title={siteMetadata.experience.title}
        intro={siteMetadata.experience.intro}
      >
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
          Work Experience
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {experiences.map((experience, index) => (
            <Card key={index}>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 p-2 bg-white rounded-full shadow-md shadow-primaryText-800/5 ring-1 ring-primaryText-900/5 dark:border dark:border-primaryText-700/50 dark:bg-white dark:ring-0">
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  className="object-contain w-8 h-8"
                  unoptimized
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                <Card.Link href={experience.link.url}>
                  {experience.title} at {experience.company}
                </Card.Link>
              </h2>

              {/* Date and Location */}
              <div className="relative z-30 mt-3 space-y-2">
                <p className="flex items-center text-sm text-primaryText-600 dark:text-primaryText-400">
                  <FaCalendarAlt className="flex-none w-4 h-4 mr-2 text-accent-500" />
                  {experience.date}
                </p>
                <p className="flex items-center text-sm text-primaryText-600 dark:text-primaryText-400">
                  <FaMapMarkerAlt className="flex-none w-4 h-4 mr-2 text-accent-500" />
                  {experience.location}
                </p>
              </div>

              <Card.Description>
                {experience.description.map((item, descIndex) => (
                  <li className="ml-4 list-disc" key={`description-${descIndex}`}>
                    {item}
                  </li>
                ))}
              </Card.Description>
              <div className="relative z-10 flex mt-6 text-sm font-medium transition text-primaryText-400 group-hover:text-accent-500 dark:text-primaryText-200">
                <RiLinksLine className="flex-none w-6 h-6" />
                <span className="ml-2">{experience.link.label}</span>
              </div>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
