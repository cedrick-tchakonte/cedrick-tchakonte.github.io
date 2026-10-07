import type { I18n } from '@/i18n'

interface NavSubLink {
  name: I18n<string>
  href: string
}

interface NavLink {
  name: I18n<string>
  href: string
  submenu?: NavSubLink[]
}

interface Testimonial {
  comment: I18n<string>
  author: string
  authorTitle: I18n<string>
  imgUrl: string
  imageAttribution: string
}

interface SiteMetadata {
  title: I18n<string>
  description: I18n<string>
  author: string
  authorHeadline: I18n<string>
  authorAbout: I18n<string>
  authorAboutExtended: I18n<string>
  socials: {
    x: string
    facebook: string
    github: string
    linkedin: string
    instagram: string
  }
  siteUrl: string
  email: string
  phoneNumber: string
  contactTitle: I18n<string>
  contactSubtitle: I18n<string>
  analytics: {
    plausibleDataDomain: string
    googleAnalyticsId: string
  }
  siteNavLinks: NavLink[]
  siteRepo: string
  testimonial: Testimonial
  experience: {
    title: I18n<string>
    intro: I18n<string>
  }
}

const siteMetadata: SiteMetadata = {
  title: {
    en: 'Portfolio of Cedrick Tchakonte',
    fr: 'Portfolio de Cedrick Tchakonte',
  },
  description: {
    en: 'Welcome to my personal portfolio. I am a final-year engineering student in Artificial Intelligence at ENSTA Paris (IP Paris), passionate about machine learning research, deep learning and computer vision.',
    fr: "Bienvenue sur mon portfolio. Je suis élève ingénieur en dernière année à l'ENSTA Paris (IP Paris), spécialisé en intelligence artificielle et passionné de recherche en machine learning, de deep learning et de vision par ordinateur.",
  },
  author: 'Cedrick Tchakonte',
  authorHeadline: {
    en: 'Final-Year Engineering Student in Artificial Intelligence | ENSTA Paris (IP Paris)',
    fr: 'Élève ingénieur en dernière année – Intelligence Artificielle | ENSTA Paris (IP Paris)',
  },
  authorAbout: {
    en: "Hi, I'm Cedrick! I'm a final-year engineering student at ENSTA Paris (Institut Polytechnique de Paris), specializing in Artificial Intelligence, and I'm also enrolled in IP Paris's Master's in Data Science and AI. I recently completed a Machine Learning Research internship at Stellantis and I'm currently a Junior AI Engineer at RagLogic. I'm now looking for a six-month end-of-studies machine learning research internship starting in early 2027 (with the possibility of continuing into a PhD) in a world-class AI lab such as Google DeepMind, OpenAI, Meta FAIR, Mistral AI or Anthropic, where this kind of research actually happens.",
    fr: "Salut, moi c'est Cedrick ! Je suis élève ingénieur en dernière année à l'ENSTA Paris (Institut Polytechnique de Paris), spécialisé en Intelligence Artificielle, et je suis aussi inscrit au master Data Science et Intelligence Artificielle de l'IP Paris. Je viens de terminer un stage de recherche en machine learning chez Stellantis et je suis actuellement ingénieur IA junior chez RagLogic. Je recherche désormais un stage de recherche de fin d'études de six mois en machine learning, dès début 2027 (avec la possibilité d'enchaîner sur un doctorat), dans un laboratoire d'IA de premier plan comme Google DeepMind, OpenAI, Meta FAIR, Mistral AI ou Anthropic, là où ce type de recherche se fait vraiment.",
  },
  authorAboutExtended: {
    en: "Cedrick is a final-year engineering student at ENSTA Paris (Institut Polytechnique de Paris), specializing in Artificial Intelligence and Cyber-Physical Systems, and is also enrolled in IP Paris's Master's in Data Science and AI. Passionate about machine learning research, especially deep learning and computer vision, he is currently a Junior AI Engineer at RagLogic (with TAEP, ENSTA's Junior Enterprise), and has previously worked as a Machine Learning Research Intern at Stellantis and as an R&D intern at STMicroelectronics. He is driven to contribute to impactful projects that push the boundaries of AI and technology.",
    fr: "Cedrick est élève ingénieur en dernière année à l'ENSTA Paris (Institut Polytechnique de Paris), spécialisé en Intelligence Artificielle et Systèmes Cyber-Physiques, et également inscrit au master Data Science et Intelligence Artificielle de l'IP Paris. Passionné de recherche en machine learning, en particulier de deep learning et de vision par ordinateur, il est actuellement ingénieur IA junior chez RagLogic (avec la TAEP, la Junior-Entreprise de l'ENSTA), et a auparavant travaillé chez Stellantis comme stagiaire de recherche en machine learning et chez STMicroelectronics comme stagiaire R&D. Il aime contribuer à des projets à fort impact qui repoussent les limites de l'IA et de la technologie.",
  },
  socials: {
    x: 'https://x.com/Cdrick237',
    facebook: 'https://www.facebook.com/profile.php?id=100011695911246',
    github: 'https://github.com/cedrick-tchakonte',
    linkedin: 'https://www.linkedin.com/in/cedrick-tchakonte',
    instagram: 'https://www.instagram.com/cedrick_frame',
  },
  siteUrl: 'https://cedrick-tchakonte.github.io',
  email: 'cedrick.tchakonte@ensta.fr',
  phoneNumber: '0758744186',
  contactTitle: { en: 'Get in touch', fr: 'Me contacter' },
  contactSubtitle: {
    en: "I'm a final-year engineering student at ENSTA Paris (IP Paris), specializing in Artificial Intelligence, and currently a Junior AI Engineer at RagLogic. I'm looking for a six-month end-of-studies machine learning research internship starting in early 2027 (with the possibility of pursuing a PhD) in a leading AI lab where I can be at the heart of innovation. If you'd like to discuss potential collaborations or opportunities, please reach out using the form below.",
    fr: "Je suis élève ingénieur en dernière année à l'ENSTA Paris (IP Paris), spécialisé en Intelligence Artificielle, et actuellement ingénieur IA junior chez RagLogic. Je recherche un stage de recherche de fin d'études de six mois en machine learning, dès début 2027 (avec la possibilité d'enchaîner sur un doctorat), dans un laboratoire d'IA de premier plan, au cœur de l'innovation. Pour échanger sur une collaboration ou une opportunité, écris-moi via le formulaire ci-dessous.",
  },
  analytics: {
    plausibleDataDomain: 'cedricktchakonte.com', // e.g. tailwind-nextjs-starter-blog.vercel.app
    googleAnalyticsId: 'G-XXXXXXX', // e.g. UA-000000-2 or G-XXXXXXX
  },
  // Navigation structure with dropdown menus
  siteNavLinks: [
    {
      name: { en: 'Home', fr: 'Accueil' },
      href: '/',
    },
    {
      name: { en: 'About', fr: 'À propos' },
      href: '/about',
    },
    {
      name: { en: 'Academic', fr: 'Études' },
      href: '#',
      submenu: [
        { name: { en: 'Education', fr: 'Formation' }, href: '/education' },
        { name: { en: 'Certifications', fr: 'Certifications' }, href: '/certifications' },
        { name: { en: 'International Mobility', fr: 'Mobilité internationale' }, href: '/international-mobility' },
      ],
    },
    {
      name: { en: 'Professional', fr: 'Professionnel' },
      href: '#',
      submenu: [
        { name: { en: 'Experience', fr: 'Expérience' }, href: '/experience' },
        { name: { en: 'Projects', fr: 'Projets' }, href: '/projects' },
        { name: { en: 'Skills', fr: 'Compétences' }, href: '/skills' },
      ],
    },
    {
      name: { en: 'Community', fr: 'Communauté' },
      href: '#',
      submenu: [
        { name: { en: 'Volunteer', fr: 'Bénévolat' }, href: '/volunteer' },
        { name: { en: 'Hobbies', fr: 'Loisirs' }, href: '/hobbies' },
      ],
    },
    {
      name: { en: 'Dreams', fr: 'Rêves' },
      href: '/dreams',
    },
    {
      name: { en: 'Contact', fr: 'Contact' },
      href: '/contact',
    },
  ],
  siteRepo: 'https://github.com/cedrick-tchakonte/cedrick-tchakonte.github.io',
  testimonial: {
    comment: {
      en: '“I build AI systems that bridge research and real-world impact, from surrogate models for vehicle safety to Graph RAG for complex regulation. I care about rigor, clarity, and technology that genuinely helps people.”',
      fr: "« Je construis des systèmes d'IA qui relient la recherche à l'impact réel, des modèles surrogates pour la sécurité des véhicules au Graph RAG pour la réglementation complexe. Je tiens à la rigueur, à la clarté, et à une technologie qui aide vraiment les gens. »",
    },
    author: 'Cedrick Tchakonte',
    authorTitle: {
      en: 'Final-Year Engineering Student in Artificial Intelligence, ENSTA Paris (IP Paris)',
      fr: 'Élève ingénieur en dernière année – Intelligence Artificielle, ENSTA Paris (IP Paris)',
    },
    imgUrl: '/images/avatar.jpg',
    imageAttribution: 'Photo by Cedrick Tchakonte',
  },
  // Professional experience and expertise areas
  experience: {
    title: {
      en: "Things I've done trying to put my dent in the universe.",
      fr: "Ce que j'ai fait pour laisser ma trace.",
    },
    intro: {
      en: "Now in my final year at ENSTA Paris (Institut Polytechnique de Paris), specializing in AI and Cyber-Physical Systems, I've gained hands-on experience through research and engineering roles in industry. I'm currently a Junior AI Engineer at RagLogic, and I've also worked at Stellantis and STMicroelectronics. My projects range from 3D surrogate models for pedestrian safety and Digital Twin generation for embedded systems to LLM-based decision support and Graph RAG systems.",
      fr: "Désormais en dernière année à l'ENSTA Paris (Institut Polytechnique de Paris), spécialisé en IA et Systèmes Cyber-Physiques, j'ai acquis une expérience concrète au fil de missions de recherche et d'ingénierie en entreprise. Je suis actuellement ingénieur IA junior chez RagLogic, et j'ai également travaillé chez Stellantis et STMicroelectronics. Mes projets vont des modèles de substitution 3D pour la sécurité des piétons et de la génération de jumeaux numériques pour les systèmes embarqués à l'aide à la décision par LLM et aux systèmes de Graph RAG.",
    },
  },
}

export default siteMetadata
