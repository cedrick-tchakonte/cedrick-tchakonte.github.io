import type { I18n } from '@/i18n'

export interface EducationBackground {
  degree: I18n<string>
  institution: I18n<string>
  logo: string
  startDate: I18n<string>
  endDate: I18n<string>
  description: I18n<string>
  highlights: I18n<string[]>
}

export const educationBackground: EducationBackground[] = [
  {
    degree: {
      en: "Master's Degree, Data Science and Artificial Intelligence",
      fr: 'Master Data Science et Intelligence Artificielle',
    },
    institution: {
      en: 'Institut Polytechnique de Paris',
      fr: 'Institut Polytechnique de Paris',
    },
    logo: '/images/logo/ip-paris.png',
    startDate: { en: 'September 2026', fr: 'Septembre 2026' },
    endDate: { en: 'December 2027', fr: 'Décembre 2027' },
    description: {
      en: "Pursued alongside my final year at ENSTA Paris, with graduate courses from IP Paris's Data Science and Data & AI masters and the MVA master (ENS Paris-Saclay).",
      fr: "Suivi en parallèle de ma dernière année à l'ENSTA Paris, avec des cours des masters Data Science et Data & IA de l'IP Paris et du master MVA (ENS Paris-Saclay).",
    },
    highlights: {
      en: [
        '2nd in France and 41st worldwide (QS World University Rankings 2026)',
        'M2 Data Science (École Polytechnique): Convex Analysis and Optimization Theory',
        'M2 Data & AI (IP Paris): Kernel Machines, Deep Learning',
        'MVA (ENS Paris-Saclay): Point Clouds and 3D Modeling',
      ],
      fr: [
        '2ᵉ en France et 41ᵉ mondial (QS World University Rankings 2026)',
        "M2 Data Science (École polytechnique) : Analyse convexe et théorie de l'optimisation",
        'M2 Data & IA (IP Paris) : Méthodes à noyaux, Deep Learning',
        'MVA (ENS Paris-Saclay) : Nuages de points et modélisation 3D',
      ],
    },
  },
  {
    degree: {
      en: 'M.Eng. in Artificial Intelligence & Cyber-Physical Systems (Final Year)',
      fr: "Diplôme d'ingénieur, spécialité Intelligence Artificielle & Systèmes Cyber-Physiques (dernière année)",
    },
    institution: {
      en: 'ENSTA Paris (Institut Polytechnique de Paris)',
      fr: 'ENSTA Paris (Institut Polytechnique de Paris)',
    },
    logo: '/images/logo/ensta.png',
    startDate: { en: 'August 2024', fr: 'Août 2024' },
    endDate: { en: 'December 2027', fr: 'Décembre 2027' },
    description: {
      en: 'Prestigious French engineering school. Final year in AI and Cyber-Physical Systems: machine learning, image recognition, microprocessor architecture, robotic navigation.',
      fr: "Grande école d'ingénieurs prestigieuse en France. Dernière année en IA et systèmes cyber-physiques : apprentissage automatique, reconnaissance d'images, architecture des microprocesseurs, navigation robotique.",
    },
    highlights: {
      en: [
        "2nd among French engineering schools (L'Étudiant ranking, 2025)",
        'Relevant Courses: Machine Learning, Image Recognition, Statistical Learning, Control Theory, Robotic Navigation',
        'Admissible to École Polytechnique; admitted to ENSTA Paris, Télécom Paris and ENSAE (international entrance exam)',
      ],
      fr: [
        "2ᵉ école d'ingénieurs française (classement L'Étudiant 2025)",
        "Cours pertinents : machine learning, reconnaissance d'images, apprentissage statistique, automatique, navigation robotique",
        "Admissible à l'École polytechnique ; admis à l'ENSTA Paris, Télécom Paris et l'ENSAE (concours international)",
      ],
    },
  },
]
