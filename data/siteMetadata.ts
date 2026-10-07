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
    en: "I'm a final-year engineering student in AI at ENSTA Paris (IP Paris), passionate about machine learning research, deep learning and computer vision.",
    fr: "Je suis élève ingénieur en dernière année en IA à l'ENSTA Paris (IP Paris), passionné de recherche en machine learning, de deep learning et de vision par ordinateur.",
  },
  author: 'Cedrick Tchakonte',
  authorHeadline: {
    en: 'Final-Year Engineering Student in Artificial Intelligence | ENSTA Paris (IP Paris)',
    fr: 'Élève ingénieur en dernière année – Intelligence Artificielle | ENSTA Paris (IP Paris)',
  },
  authorAbout: {
    en: "Hi, I'm Cedrick! I'm a final-year engineering student in AI at ENSTA Paris (IP Paris), also enrolled in IP Paris's Master's in Data Science & AI. I'm looking for a 6-month end-of-studies ML research internship in a top AI lab, in France or abroad, from early 2027, possibly continuing into a PhD.",
    fr: "Salut, moi c'est Cedrick ! Je suis élève ingénieur en dernière année en IA à l'ENSTA Paris (IP Paris), et aussi inscrit au master Data Science & IA de l'IP Paris. Je cherche un stage de recherche de fin d'études de 6 mois en ML dans un laboratoire d'IA de premier plan, en France ou à l'étranger, dès début 2027, avec une suite possible en doctorat.",
  },
  authorAboutExtended: {
    en: "Cedrick is a final-year engineering student at ENSTA Paris (IP Paris), following a specialization track in Artificial Intelligence. Passionate about ML research, especially deep learning and computer vision, he is a Junior AI Engineer at RagLogic. He previously worked at Stellantis (ML research), Objectware and STMicroelectronics (R&D).",
    fr: "Cedrick est élève ingénieur en dernière année à l'ENSTA Paris (IP Paris), où il suit un parcours de spécialisation en intelligence artificielle. Passionné de recherche en ML, en particulier de deep learning et de vision par ordinateur, il est ingénieur IA junior chez RagLogic. Il a auparavant travaillé chez Stellantis (recherche en ML), Objectware et STMicroelectronics (R&D).",
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
    en: "I'm looking for a 6-month end-of-studies ML research internship from early 2027 (possibly leading to a PhD) in a leading AI lab, in France or abroad. For collaborations or opportunities, reach out via the form below.",
    fr: "Je cherche un stage de recherche de fin d'études de 6 mois en ML dès début 2027 (avec une suite possible en doctorat) dans un laboratoire d'IA de premier plan, en France ou à l'étranger. Pour une collaboration ou une opportunité, écris-moi via le formulaire ci-dessous.",
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
      en: "“I want to work at the frontier of AI, at the forefront of the innovations that will shape the years ahead. I believe AI can genuinely improve people's lives and contribute to development, and I want to help build it with rigor and clarity.”",
      fr: "« Je veux travailler à la frontière de l'IA, à l'avant-garde des innovations qui façonneront les années à venir. Je crois que l'IA peut réellement améliorer la vie des gens et contribuer au développement, et je veux aider à la construire avec rigueur et clarté. »",
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
      en: "I'm in my final year at ENSTA Paris (IP Paris), following a specialization track in Artificial Intelligence. I've done research and engineering at Stellantis, Objectware and STMicroelectronics, and I'm now a Junior AI Engineer at RagLogic.",
      fr: "Je suis en dernière année à l'ENSTA Paris (IP Paris), où je suis un parcours de spécialisation en intelligence artificielle. J'ai fait de la recherche et de l'ingénierie chez Stellantis, Objectware et STMicroelectronics, et je suis maintenant ingénieur IA junior chez RagLogic.",
    },
  },
}

export default siteMetadata
