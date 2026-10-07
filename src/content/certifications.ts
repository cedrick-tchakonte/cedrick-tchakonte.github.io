import type { I18n } from '@/i18n'

export interface Certification {
  name: string | I18n<string>
  issuer: string
  date: I18n<string>
  description: I18n<string>
  logo: string
  tags: string[]
  verificationLink?: string
}

export const certifications: Certification[] = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Stanford University & DeepLearning.AI',
    date: { en: 'March 2025', fr: 'Mars 2025' },
    description: {
      en: 'Foundations of supervised learning, neural networks and decision trees, unsupervised learning, recommender systems and reinforcement learning.',
      fr: "Fondamentaux de l'apprentissage supervisé, des réseaux de neurones et arbres de décision, de l'apprentissage non supervisé, des systèmes de recommandation et de l'apprentissage par renforcement.",
    },
    logo: '/images/deepLearning.ai.png',
    tags: [
      'Machine Learning',
      'Supervised Learning',
      'Neural Networks',
      'Unsupervised Learning',
      'Recommender Systems',
    ],
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'deeplearning.ai',
    date: { en: 'April 2025', fr: 'Avril 2025' },
    description: {
      en: 'Neural networks and deep learning, with applications in computer vision, natural language processing and sequence models.',
      fr: "Réseaux de neurones et deep learning, avec des applications en vision par ordinateur, en traitement automatique du langage naturel et dans les modèles de séquences.",
    },
    logo: '/images/deepLearning.ai.png',
    tags: ['AI', 'Neural Networks', 'NLP', 'Deep Learning', 'Computer Vision'],
    verificationLink: 'https://coursera.org/share/cfca8d6b98c3ddaf10ac87c8971ee486',
  },
  {
    name: { en: 'Project Management', fr: 'Gestion de projet' },
    issuer: 'Centrale Lille',
    date: { en: 'November 2024', fr: 'Novembre 2024' },
    description: {
      en: 'Project management fundamentals: planning, team coordination, risk management and Agile methodologies.',
      fr: "Fondamentaux de la gestion de projet : planification, coordination d'équipe, gestion des risques et méthodologies Agile.",
    },
    logo: '/images/gdp.png',
    tags: ['Project Management', 'Agile', 'Team Coordination', 'Risk Management', 'Planning'],
    verificationLink: 'https://certification.gestiondeprojet.pm/GdP24AP/GdP24PC-TCJavHuPA.pdf',
  },
  {
    name: 'Programmation pour tous (Mise en route de Python)',
    issuer: 'Coursera | University of Michigan',
    date: { en: 'February 2023', fr: 'Février 2023' },
    description: {
      en: 'The basics of programming with Python for everyone: how to build a program from a series of simple instructions.',
      fr: "Les bases de la programmation avec Python pour tous : comment construire un programme à partir d'une série d'instructions simples.",
    },
    logo: '/images/michigan.png',
    tags: ['Python', 'Software Development', 'Programming', 'Data Structures'],
    verificationLink: 'https://coursera.org/share/6685c3e76863eafdd0896d26bed78336',
  },
  {
    name: 'Initiation à la programmation en Java',
    issuer: 'Coursera | Ecole Polytechnique Fédérale de Lausanne',
    date: { en: 'December 2022', fr: 'Décembre 2022' },
    description: {
      en: 'Fundamentals of programming and object-oriented design in Java (variables, control structures, classes, objects) through hands-on exercises.',
      fr: "Fondamentaux de la programmation et de la conception orientée objet en Java (variables, structures de contrôle, classes, objets) à travers des exercices pratiques.",
    },
    logo: '/images/epfl.png',
    tags: ['Java', 'Software Development', 'Object-Oriented Programming', 'Data Structures'],
    verificationLink: 'https://coursera.org/share/57909ae0d46dc914244f165bbb010689',
  },
  {
    name: 'FCF - Fortinet Certified Fundamentals in Cybersecurity',
    issuer: 'Fortinet',
    date: { en: 'April 2024', fr: 'Avril 2024' },
    description: {
      en: 'Foundational cybersecurity knowledge and skills, covering the latest trends and how to protect an organization from cyber threats.',
      fr: "Connaissances et compétences de base en cybersécurité, couvrant les dernières tendances et la manière de protéger une organisation contre les cybermenaces.",
    },
    logo: '/images/fortinet.png',
    tags: ['Cybersecurity', 'Threat Landscape', 'Network Security', 'Data Protection'],
    verificationLink: 'https://training.fortinet.com/local/cert/my/certificate.php?badge=84',
  },
  {
    name: 'FCA - Fortinet Certified Associate in Cybersecurity',
    issuer: 'Fortinet',
    date: { en: 'April 2024', fr: 'Avril 2024' },
    description: {
      en: 'Configuration and management of FortiGate devices: firewall policies, security profiles and VPNs.',
      fr: "Configuration et gestion des équipements FortiGate : politiques de pare-feu, profils de sécurité et VPN.",
    },
    logo: '/images/fortinet.png',
    tags: ['FortiGate', 'Network Security', 'Firewall Policies', 'VPN'],
    verificationLink: 'https://training.fortinet.com/local/cert/my/certificate.php?badge=85',
  },
]
