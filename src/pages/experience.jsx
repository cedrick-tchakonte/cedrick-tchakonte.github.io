import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { RiLinksLine } from 'react-icons/ri'
import siteMetadata from '@/data/siteMetadata'
import logoApple from '@/images/logos/apple.svg'
import { motion } from 'framer-motion'

// TODO: If you want to include the logo of the company, I suggesting importing the svg from Remix-Design's repo: https://github.com/Remix-Design/RemixIcon/tree/master/icons/Logos

const experiences = [
  {
    title: 'Junior Research Engineer Intern',
    company: 'Objectware',
    date: 'Sept 2025 - Present',
    description: [
      'Conducted R&D on an AI-based decision support system for enterprise applications, designing ML models for predictive analytics to improve decision accuracy and efficiency.',
      'Developed AI algorithms for business intelligence, supporting enterprise clients with advanced analytics and decision-making tools.',
      'Worked with cross-functional teams (market directors, HR, consultants, CEO) to integrate AI solutions, improving efficiency and streamlining workflows.',
    ],
    location: 'Paris, France',
    link: { url: 'https://www.objectware.fr/', label: 'Objectware' },
    logo: logoApple,
  },
  {
    title: 'Research and Development Intern',
    company: 'STMicroelectronics',
    date: 'May 2025 - Aug 2025',
    description: [
      'Worked within the System Level Modeling team (MDRF division) on C++-based "Digital Twin" simulations enabling virtual execution of embedded software for multiple ST divisions (automotive, RF, secure MCUs, etc.).',
      'Developed AI-assisted workflows for documentation analysis and model generation, using LLMs, RAG, and vector databases to process complex simulation codebases.',
      'Benchmarked and integrated the solution into SOC Digital Twin development, improving documentation retrieval efficiency and enhancing productivity in simulation-driven validation.',
    ],
    location: 'Grenoble, France',
    link: { url: 'https://www.st.com/', label: 'STMicroelectronics' },
    logo: logoApple,
  },
  {
    title: 'Intern',
    company: 'EUREKA Agency',
    date: 'June 2023 - August 2023',
    description: [
      'Eureka Agency is a digital marketing agency which is specialized in web and mobile development and innovative projects.',
      'Learning and working on web development projects using PHP',
    ],
    location: 'Yaoundé, Cameroon',
    link: { url: 'https://www.eureka-cm.netlify.app', label: 'EUREKA Agency' },
    logo: logoApple,
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
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-primaryText-800/5 ring-1 ring-primaryText-900/5 dark:border dark:border-primaryText-700/50 dark:bg-primaryText-800 dark:ring-0">
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  className="w-8 h-8"
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
              <Card.Description>
                {experience.description.map((item, index) => (
                  <li className="ml-4 list-disc" key={`description-${index}`}>
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


// utiliser un composant Card pour afficher les expériences professionnelles
