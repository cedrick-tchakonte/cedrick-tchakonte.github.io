import Head from 'next/head'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'
import { RiLinksLine } from 'react-icons/ri'
import logoApple from '@/images/logos/apple.svg'

const volunteerActivities = [
  {
    title: 'Finance Officer',
    organization: 'ENSTAFRIK Association',
    date: 'April 2025 - Present',
    description: [
      'Management of financial operations and preparation of budgets for the association.',
      'Coordination of cultural events and activities for the ENSTA community.',
      'Working with diverse teams to organize events that promote African culture and community engagement.',
    ],
    location: 'ENSTA Campus de Paris-Saclay, France',
    link: { url: 'https://www.ensta-paris.fr/', label: 'ENSTAFRIK Association' },
    logo: logoApple,
  },
  {
    title: 'Volunteer',
    organization: 'Ryz\'Ôm Joëlettes (Disability Inclusion Association)',
    date: 'November 2024 - Present',
    description: [
      'Actively contributing to community support and inclusion initiatives with 30+ volunteers.',
      'Assisting up to 10 individuals with mobility disabilities during running events using joëlettes.',
      'Leading high school training sessions where I teach students to assemble and operate joëlettes while promoting inclusion.',
    ],
    location: 'Paris, France',
    link: { url: 'https://www.ryzom-joelettes.fr/', label: 'Ryz\'Ôm Joëlettes' },
    logo: logoApple,
  },
]

export default function Volunteer() {
  return (
    <>
      <Head>
        <title>Volunteer Work - {siteMetadata.author}</title>
        <meta
          name="description"
          content={`Volunteer activities and community involvement of ${siteMetadata.author}`}
        />
      </Head>
      <SimpleLayout
        title="Volunteer Work & Community Involvement"
        intro="I believe in giving back to the community and contributing to meaningful causes. Here are some of the volunteer activities and community initiatives I'm involved in."
      >
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
          Community Involvement
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {volunteerActivities.map((activity, index) => (
            <Card key={index}>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-primaryText-800/5 ring-1 ring-primaryText-900/5 dark:border dark:border-primaryText-700/50 dark:bg-primaryText-800 dark:ring-0">
                <Image
                  src={activity.logo}
                  alt={activity.organization}
                  className="w-8 h-8"
                  width={32}
                  height={32}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                <Card.Link href={activity.link.url}>
                  {activity.title} at {activity.organization}
                </Card.Link>
              </h2>
              <Card.Description>
                {activity.description.map((item, index) => (
                  <li className="ml-4 list-disc" key={`description-${index}`}>
                    {item}
                  </li>
                ))}
              </Card.Description>
              <div className="relative z-10 flex mt-6 text-sm font-medium transition text-primaryText-400 group-hover:text-accent-500 dark:text-primaryText-200">
                <RiLinksLine className="flex-none w-6 h-6" />
                <span className="ml-2">{activity.link.label}</span>
              </div>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
