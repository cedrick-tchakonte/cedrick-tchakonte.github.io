import Head from 'next/head'
import type { StaticImageData } from 'next/image'
import { EntryCard } from '@/components/EntryCard'
import { SectionHeading } from '@/components/SectionHeading'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'
import { useT, type I18n } from '@/i18n'
import enstafrikLogo from '@/images/logos/enstafrik.png'
import ryzomLogo from '@/images/logos/ryzom.svg'

interface VolunteerActivity {
  title: I18n<string>
  organization: string
  date: I18n<string>
  description: I18n<string[]>
  location: I18n<string>
  link: { url: string; label: string }
  logo: StaticImageData
}

const volunteerActivities: VolunteerActivity[] = [
  {
    title: { en: 'Finance Officer', fr: 'Responsable des finances' },
    organization: 'ENSTAFRIK Association',
    date: { en: 'April 2025 - Present', fr: 'Avril 2025 - Présent' },
    description: {
      en: [
        'Management of financial operations and preparation of budgets for the association.',
        'Coordination of cultural events and activities for the ENSTA community.',
        'Working with diverse teams to organize events that promote African culture and community engagement.',
      ],
      fr: [
        "Gestion des opérations financières et préparation des budgets de l'association.",
        "Coordination d'événements et d'activités culturels pour la communauté de l'ENSTA.",
        "Collaboration avec des équipes variées pour organiser des événements valorisant la culture africaine et l'engagement communautaire.",
      ],
    },
    location: { en: 'ENSTA Paris, France', fr: 'ENSTA Paris, France' },
    link: { url: 'https://www.ensta-paris.fr/', label: 'ENSTAFRIK Association' },
    logo: enstafrikLogo,
  },
  {
    title: { en: 'Volunteer', fr: 'Bénévole' },
    organization: "Ryz'Ôm Joëlettes (Disability Inclusion Association)",
    date: { en: 'November 2024 - Present', fr: 'Novembre 2024 - Présent' },
    description: {
      en: [
        'Actively contributing to community support and inclusion initiatives with 30+ volunteers.',
        'Assisting up to 10 individuals with mobility disabilities during running events using joëlettes.',
        'Leading high school training sessions where I teach students to assemble and operate joëlettes while promoting inclusion.',
      ],
      fr: [
        "Contribution active à des initiatives d'entraide et d'inclusion aux côtés de plus de 30 bénévoles.",
        "Accompagnement de jusqu'à 10 personnes à mobilité réduite lors de courses, à l'aide de joëlettes.",
        "Animation de sessions de formation en lycée où j'apprends aux élèves à monter et à manœuvrer les joëlettes tout en promouvant l'inclusion.",
      ],
    },
    location: { en: 'Paris, France', fr: 'Paris, France' },
    link: { url: 'https://www.ryzom-joelettes.fr/', label: "Ryz'Ôm Joëlettes" },
    logo: ryzomLogo,
  },
]

export default function Volunteer() {
  const t = useT()

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
        title={t({
          en: 'Volunteer Work & Community Involvement',
          fr: 'Engagement associatif',
        })}
        intro={t({
          en: "I believe in giving back to the community and contributing to meaningful causes. Here are some of the volunteer activities and community initiatives I'm actively involved in.",
          fr: "Je crois en l'importance de rendre à la communauté et de contribuer à des causes qui ont du sens. Voici quelques-unes des activités bénévoles et des initiatives communautaires dans lesquelles je m'investis activement.",
        })}
      >
        <SectionHeading
          title={t({ en: 'Community Involvement', fr: 'Mon engagement' })}
          className="mb-10"
        />
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {volunteerActivities.map((activity, index) => (
            <li key={index}>
              <EntryCard
                logo={activity.logo}
                logoAlt={activity.organization}
                title={`${t(activity.title)} ${t({ en: 'at', fr: 'chez' })} ${activity.organization}`}
                date={t(activity.date)}
                location={t(activity.location)}
                bullets={t(activity.description)}
                link={activity.link}
              />
            </li>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
