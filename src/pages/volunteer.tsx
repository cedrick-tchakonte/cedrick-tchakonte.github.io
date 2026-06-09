import Head from 'next/head'
import type { StaticImageData } from 'next/image'
import { EntryCard } from '@/components/EntryCard'
import { SectionHeading } from '@/components/SectionHeading'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'
import enstafrikLogo from '@/images/logos/enstafrik.png'
import ryzomLogo from '@/images/logos/ryzom.svg'

interface VolunteerActivity {
  title: string
  organization: string
  date: string
  description: string[]
  location: string
  link: { url: string; label: string }
  logo: StaticImageData
}

const volunteerActivities: VolunteerActivity[] = [
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
    logo: enstafrikLogo,
  },
  {
    title: 'Volunteer',
    organization: "Ryz'Ôm Joëlettes (Disability Inclusion Association)",
    date: 'November 2024 - Present',
    description: [
      'Actively contributing to community support and inclusion initiatives with 30+ volunteers.',
      'Assisting up to 10 individuals with mobility disabilities during running events using joëlettes.',
      'Leading high school training sessions where I teach students to assemble and operate joëlettes while promoting inclusion.',
    ],
    location: 'Paris, France',
    link: { url: 'https://www.ryzom-joelettes.fr/', label: "Ryz'Ôm Joëlettes" },
    logo: ryzomLogo,
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
        intro="I believe in giving back to the community and contributing to meaningful causes. Here are some of the volunteer activities and community initiatives I'm actively involved in."
      >
        <SectionHeading title="Community Involvement" className="mb-10" />
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {volunteerActivities.map((activity, index) => (
            <li key={index}>
              <EntryCard
                logo={activity.logo}
                logoAlt={activity.organization}
                title={`${activity.title} at ${activity.organization}`}
                date={activity.date}
                location={activity.location}
                bullets={activity.description}
                link={activity.link}
              />
            </li>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
