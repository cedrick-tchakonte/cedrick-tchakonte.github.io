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
  // {
  //   title: 'Lead',
  //   company: 'Apple',
  //   date: '2018 - Present',
  //   description: [
  //     'Supervise a team of 100+ employees across all areas of the business, with approximately 60 team members daily',
  //     'Develop and facilitate daily storewide meetings, workshops, and team training & on-boarding',
  //     'Created and rolled out business training leading to +50%  business related connections, later being implemented market wide to all retail store',
  //   ],
  //   location: 'Vancouver, BC',
  //   link: { url: 'https://www.apple.com/ca/', label: 'Apple' },
  //   logo: logoApple,
  // },
  {
    title: 'Stage',
    company: 'EUREKA Agency',
    date: 'Juin 2023 - Août 2023',
    description: [
      'Eureka Agency is a digital marketing agency which is specialized in web and mobile development and innovative projects.',
      'Learning and working on web development projects using PHP',
    ],
    location: 'Yaoundé, Cameroun',
    link: { url: 'https://www.eureka-cm.netlify.app', label: 'EUREKA Agency' },
    logo: logoApple,
  },
  // {
  //   title: 'Genius',
  //   company: 'Apple',
  //   date: '2016 - 2018',
  //   description: [
  //     'Provided technical support to customers, including troubleshooting, diagnosing, and repairing hardware and software issues',
  //     'Strong people skills and a knack for problem solving',
  //     'Maintain composure, provide empathy and customer focus while troubleshooting and solving technical issues',
  //   ],
  //   location: 'Vancouver, BC',
  //   link: { url: 'https://www.apple.com/ca/', label: 'Apple' },
  //   logo: logoApple,
  // },
]

export default function Experience() {
  return (
    <>
      <Head>
        <title>{'Experience-{siteMetadata.author}'}</title>
        <meta
          name={`Work experience of ${siteMetadata.author}`}
          content={siteMetadata.experience.title}
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
