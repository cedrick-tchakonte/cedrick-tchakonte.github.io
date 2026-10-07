import type { StaticImageData } from 'next/image'
import type { I18n } from '@/i18n'
import enstafrikLogo from '@/images/logos/enstafrik.png'
import ryzomLogo from '@/images/logos/ryzom.svg'

export interface VolunteerActivity {
  title: I18n<string>
  organization: string
  date: I18n<string>
  description: I18n<string[]>
  location: I18n<string>
  link: { url: string; label: string }
  logo: StaticImageData
}

export const volunteerActivities: VolunteerActivity[] = [
  {
    title: { en: 'Treasurer', fr: 'Trésorier' },
    organization: 'ENSTAFRIK Association',
    date: { en: 'April 2025 - Present', fr: 'Avril 2025 - Présent' },
    description: {
      en: [
        'Budget management and sponsorship of cultural events for the association.',
        'Coordination of cultural events and activities for the ENSTA community.',
        'Working with diverse teams to organize events that promote African culture and community engagement.',
      ],
      fr: [
        "Gestion du budget et recherche de sponsors pour les événements culturels de l'association.",
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
