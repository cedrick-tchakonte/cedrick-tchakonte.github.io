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
    title: 'Lead',
    company: 'Apple',
    date: '2018 - Present',
    description: [
      'Supervise a team of 100+ employees across all areas of the business, with approximately 60 team members daily',
      'Develop and facilitate daily storewide meetings, workshops, and team training & on-boarding',
      'Created and rolled out business training leading to +50%  business related connections, later being implemented market wide to all retail store',
    ],
    location: 'Vancouver, BC',
    link: { url: 'https://www.apple.com/ca/', label: 'Apple' },
    logo: logoApple,
  },
  {
    title: 'Genius',
    company: 'Apple',
    date: '2016 - 2018',
    description: [
      'Provided technical support to customers, including troubleshooting, diagnosing, and repairing hardware and software issues',
      'Strong people skills and a knack for problem solving',
      'Maintain composure, provide empathy and customer focus while troubleshooting and solving technical issues',
    ],
    location: 'Vancouver, BC',
    link: { url: 'https://www.apple.com/ca/', label: 'Apple' },
    logo: logoApple,
  },
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

        <div class="relative max-w-lg mx-auto mt-24 lg:max-w-7xl px-4">
          <div class="mb-12">
            <h2 class="text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl relative inline-block">
              Education
            </h2>
          </div>

          <div class="grid gap-6 lg:grid-cols-3 lg:gap-6">
            {siteMetadata.experience.education.map((item, index) => (
              
              <div key={`education-${index}`} 
                  class="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                <div class="p-6">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-4 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                      {item.startDate} - {item.endDate}
                    </span>
                    <div class="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                  </div>

                  <div class="space-y-3">
                    <h3 class="text-xl font-bold text-primaryText-800 dark:text-primaryText-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {item.degree}
                    </h3>
                    
                    <h4 class="text-lg font-semibold text-primaryText-700 dark:text-primaryText-200">
                      {item.schoolName}
                    </h4>

                    <div class="text-base text-primaryText-600 dark:text-primaryText-400 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}


// utiliser un composant Card pour afficher les expériences professionnelles
