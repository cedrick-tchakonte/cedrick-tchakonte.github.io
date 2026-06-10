import type { I18n } from '@/i18n'

export interface Certification {
  name: string | I18n<string>
  issuer: string
  date: string
  description: I18n<string>
  logo: string
  tags: string[]
  verificationLink?: string
}

export const certifications: Certification[] = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Stanford University & DeepLearning.AI',
    date: 'Mars 2025',
    description: {
      en: 'A foundational program covering supervised machine learning (regression and classification), advanced learning algorithms (neural networks and decision trees), and unsupervised learning, recommender systems and reinforcement learning.',
      fr: "Un programme fondamental couvrant l'apprentissage supervisé (régression et classification), les algorithmes d'apprentissage avancés (réseaux de neurones et arbres de décision), ainsi que l'apprentissage non supervisé, les systèmes de recommandation et l'apprentissage par renforcement.",
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
    date: 'Avril 2025',
    description: {
      en: 'A comprehensive certification covering neural networks, deep learning, and their applications in computer vision, natural language processing, and sequence models.',
      fr: "Une certification complète couvrant les réseaux de neurones, le deep learning et leurs applications en vision par ordinateur, en traitement automatique du langage naturel et dans les modèles de séquences.",
    },
    logo: '/images/deepLearning.ai.png',
    tags: ['AI', 'Neural Networks', 'NLP', 'Deep Learning', 'Computer Vision'],
    verificationLink: 'https://coursera.org/share/cfca8d6b98c3ddaf10ac87c8971ee486',
  },
  {
    name: { en: 'Project Management', fr: 'Gestion de projet' },
    issuer: 'Centrale Lille',
    date: 'Novembre 2024',
    description: {
      en: 'A comprehensive certification covering the fundamentals of project management, including planning, team coordination, risk management, and Agile methodologies.',
      fr: "Une certification complète couvrant les fondamentaux de la gestion de projet, notamment la planification, la coordination d'équipe, la gestion des risques et les méthodologies Agile.",
    },
    logo: '/images/gdp.png',
    tags: ['Project Management', 'Agile', 'Team Coordination', 'Risk Management', 'Planning'],
    verificationLink: 'https://certification.gestiondeprojet.pm/GdP24AP/GdP24PC-TCJavHuPA.pdf',
  },
  {
    name: 'Programmation pour tous (Mise en route de Python)',
    issuer: 'Coursera | University of Michigan',
    date: 'Février 2023',
    description: {
      en: 'This course aims to teach everyone the basics of programming computers using Python. We cover the basics of how one constructs a program from a series of simple instructions in Python.',
      fr: "Ce cours vise à enseigner à tous les bases de la programmation avec Python. Il aborde les principes fondamentaux de la construction d'un programme à partir d'une série d'instructions simples en Python.",
    },
    logo: '/images/michigan.png',
    tags: ['Python', 'Software Development', 'Programming', 'Data Structures'],
    verificationLink: 'https://coursera.org/share/6685c3e76863eafdd0896d26bed78336',
  },
  {
    name: 'Initiation à la programmation en Java',
    issuer: 'Coursera | Ecole Polytechnique Fédérale de Lausanne',
    date: 'Décembre 2022',
    description: {
      en: 'This course introduces the fundamentals of programming and object-oriented design using Java, covering variables, control structures, classes and objects through hands-on exercises.',
      fr: "Ce cours présente les fondamentaux de la programmation et de la conception orientée objet avec Java, en abordant les variables, les structures de contrôle, les classes et les objets à travers des exercices pratiques.",
    },
    logo: '/images/epfl.png',
    tags: ['Java', 'Software Development', 'Object-Oriented Programming', 'Data Structures'],
    verificationLink: 'https://coursera.org/share/57909ae0d46dc914244f165bbb010689',
  },
  {
    name: 'FCF - Fortinet Certified Fundamentals in Cybersecurity',
    issuer: 'Fortinet',
    date: 'Avril 2024',
    description: {
      en: 'This course provides a foundation of cybersecurity knowledge and skills. It covers the latest trends in cybersecurity and how to protect your organization from cyber threats.',
      fr: "Ce cours apporte des connaissances et des compétences de base en cybersécurité. Il couvre les dernières tendances en matière de cybersécurité et la manière de protéger son organisation contre les cybermenaces.",
    },
    logo: '/images/fortinet.png',
    tags: ['Cybersecurity', 'Threat Landscape', 'Network Security', 'Data Protection'],
    verificationLink: 'https://training.fortinet.com/local/cert/my/certificate.php?badge=84',
  },
  {
    name: 'FCA - Fortinet Certified Associate in Cybersecurity',
    issuer: 'Fortinet',
    date: 'Avril 2024',
    description: {
      en: 'This course specializes in the configuration and management of FortiGate devices. It covers the basics of FortiGate, including firewall policies, security profiles, and VPNs.',
      fr: "Ce cours est axé sur la configuration et la gestion des équipements FortiGate. Il couvre les bases de FortiGate, notamment les politiques de pare-feu, les profils de sécurité et les VPN.",
    },
    logo: '/images/fortinet.png',
    tags: ['FortiGate', 'Network Security', 'Firewall Policies', 'VPN'],
    verificationLink: 'https://training.fortinet.com/local/cert/my/certificate.php?badge=85',
  },
]
