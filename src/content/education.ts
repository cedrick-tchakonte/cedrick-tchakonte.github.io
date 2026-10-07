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
      en: "Master's program at the Institut Polytechnique de Paris, pursued alongside my final year at ENSTA Paris. I take graduate courses from the IP Paris master's programs in Data Science and Data & AI, as well as from the MVA master (ENS Paris-Saclay).",
      fr: "Master de l'Institut Polytechnique de Paris, suivi en parallèle de ma dernière année à l'ENSTA Paris. Je suis des cours des masters Data Science et Data & IA de l'IP Paris, ainsi que du master MVA (ENS Paris-Saclay).",
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
      en: 'ENSTA Paris is a prestigious engineering school in France, part of the Institut Polytechnique de Paris. Now in my final year, specializing in Artificial Intelligence and Cyber-Physical Systems, with a focus on machine learning, image recognition, microprocessor architecture, and robotic navigation.',
      fr: "ENSTA Paris est une grande école d'ingénieurs prestigieuse en France, membre de l'Institut Polytechnique de Paris. J'y suis en dernière année, spécialisé en intelligence artificielle et systèmes cyber-physiques, avec un accent sur l'apprentissage automatique, la reconnaissance d'images, l'architecture des microprocesseurs et la navigation robotique.",
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
  {
    degree: {
      en: 'Intensive Preparatory Program in Mathematics and Physical Sciences',
      fr: 'Classes préparatoires intensives en mathématiques et sciences physiques',
    },
    institution: {
      en: 'National Advanced School of Engineering, Yaoundé, Cameroon',
      fr: 'École Nationale Supérieure Polytechnique, Yaoundé, Cameroun',
    },
    logo: '/images/logo/enspy.png',
    startDate: { en: 'October 2020', fr: 'Octobre 2020' },
    endDate: { en: 'August 2024', fr: 'Août 2024' },
    description: {
      en: 'ENSPY is a prestigious engineering school in Cameroon. Completed intensive preparatory program in mathematics and physical sciences for competitive engineering entrance examinations, providing strong foundation in advanced mathematics and physics.',
      fr: "L'ENSPY est une grande école d'ingénieurs prestigieuse au Cameroun. J'y ai suivi un programme préparatoire intensif en mathématiques et sciences physiques en vue des concours d'entrée aux écoles d'ingénieurs, qui m'a donné de solides bases en mathématiques avancées et en physique.",
    },
    highlights: {
      en: [
        'Preparatory program for competitive engineering entrance examinations',
        'Relevant Courses: Linear Algebra, Data Analysis, Mechanics, Differential Equations, Probability and Statistics',
      ],
      fr: [
        "Programme préparatoire aux concours d'entrée aux écoles d'ingénieurs",
        'Cours pertinents : algèbre linéaire, analyse de données, mécanique, équations différentielles, probabilités et statistiques',
      ],
    },
  },
  {
    degree: {
      en: 'Baccalauréat scientifique | Mathematics, Physical Sciences and Computer Science',
      fr: 'Baccalauréat scientifique | Mathématiques, sciences physiques et informatique',
    },
    institution: {
      en: 'Government Bilingual High School of Nylon Ndogpassi',
      fr: 'Lycée Bilingue de Nylon Ndogpassi',
    },
    logo: '/images/logo/lynyndo.jpeg',
    startDate: { en: '2019', fr: '2019' },
    endDate: { en: '2020', fr: '2020' },
    description: {
      en: 'National examination in Cameroon. The program is designed to provide students with a strong foundation in mathematics, physical sciences and computer science. I obtained my diploma to prepare for integrating great engineering studies in my country.',
      fr: "Examen national au Cameroun. Le programme vise à donner aux élèves de solides bases en mathématiques, sciences physiques et informatique. J'ai obtenu mon diplôme afin de me préparer à intégrer de grandes études d'ingénieur dans mon pays.",
    },
    highlights: {
      en: [
        'National examination preparation',
        'Mathematics, Physics, Chemistry, Computer Science',
        'Graduated with honors: mention très bien',
      ],
      fr: [
        "Préparation à l'examen national",
        'Mathématiques, physique, chimie, informatique',
        'Diplômé avec les félicitations : mention très bien',
      ],
    },
  },
]
