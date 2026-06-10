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
    en: 'Welcome to my personal portfolio. I am an engineering student in AI and Cyber-Physical Systems, passionate about machine learning, robotics and their real-world applications.',
    fr: "Bienvenue sur mon portfolio. Je suis étudiant ingénieur en IA et Systèmes Cyber-Physiques, passionné de machine learning, de robotique et de leurs applications concrètes.",
  },
  author: 'Cedrick Tchakonte',
  authorHeadline: {
    en: 'Machine Learning & AI Engineering Student | Cyber-Physical Systems at ENSTA Paris (IP Paris)',
    fr: 'Étudiant Ingénieur en Machine Learning & IA | Systèmes Cyber-Physiques à ENSTA Paris (IP Paris)',
  },
  authorAbout: {
    en: "Hi, I'm Cedrick! I completed my 2A (2nd year) at ENSTA Paris specializing in Artificial Intelligence and Cyber-Physical Systems. I'm currently doing a gap year (césure) as a Machine Learning Research Intern at Stellantis, applying AI to real-world engineering and safety challenges. I'm now looking for an end-of-studies internship (with the possibility of continuing into a PhD) in a world-class AI lab such as Google DeepMind, OpenAI, Meta FAIR, Mistral AI or Anthropic, where this kind of research actually happens.",
    fr: "Salut, moi c'est Cedrick ! J'ai validé ma 2A à ENSTA Paris, spécialisé en Intelligence Artificielle et Systèmes Cyber-Physiques. Je suis actuellement en année de césure comme Machine Learning Research Intern chez Stellantis, où j'applique l'IA à des problèmes concrets d'ingénierie et de sécurité. Je recherche désormais un stage de fin d'études (avec la possibilité d'enchaîner sur un doctorat) dans un laboratoire d'IA de premier plan comme Google DeepMind, OpenAI, Meta FAIR, Mistral AI ou Anthropic, là où ce type de recherche se fait vraiment.",
  },
  authorAboutExtended: {
    en: "Cedrick completed his 2A at ENSTA Paris (Institut Polytechnique de Paris), specializing in Artificial Intelligence and Cyber-Physical Systems. Passionate about machine learning, robotics, and their real-world applications, he is using his gap year to gain hands-on experience. He is currently a Machine Learning Research Intern at Stellantis and a Junior AI Engineer at TAEP (ENSTA's Junior Enterprise), and has previously worked at STMicroelectronics and Objectware. He is driven to contribute to impactful projects that push the boundaries of AI and technology.",
    fr: "Cedrick a validé sa 2A à ENSTA Paris (Institut Polytechnique de Paris), spécialisé en Intelligence Artificielle et Systèmes Cyber-Physiques. Passionné de machine learning, de robotique et de leurs applications concrètes, il profite de son année de césure pour acquérir de l'expérience de terrain. Il est actuellement Machine Learning Research Intern chez Stellantis et Junior AI Engineer à la TAEP (la Junior-Entreprise de l'ENSTA), après être passé par STMicroelectronics et Objectware. Il aime contribuer à des projets à fort impact qui repoussent les limites de l'IA et de la technologie.",
  },
  socials: {
    x: 'https://x.com/Cdrick237',
    facebook: 'https://www.facebook.com/profile.php?id=100011695911246',
    github: 'https://github.com/CeGeek23',
    linkedin: 'https://www.linkedin.com/in/cedrick-tchakonte',
    instagram: 'https://www.instagram.com/cedrick_frame',
  },
  siteUrl: 'https://eportfolio-cedrick-tchakonte.vercel.app',
  email: 'cedrick.tchakonte@ensta.fr',
  phoneNumber: '0758744186',
  contactTitle: { en: 'Get in touch', fr: 'Me contacter' },
  contactSubtitle: {
    en: "I completed my 2A in AI and Cyber-Physical Systems at ENSTA Paris and I'm currently on a gap year, working as a Machine Learning Research Intern at Stellantis. I'm looking for an end-of-studies internship (with the possibility of pursuing a PhD) in a leading AI lab where I can be at the heart of innovation. If you'd like to discuss potential collaborations or opportunities, please reach out using the form below.",
    fr: "J'ai validé ma 2A en IA et Systèmes Cyber-Physiques à ENSTA Paris et je suis en année de césure comme Machine Learning Research Intern chez Stellantis. Je recherche un stage de fin d'études (avec la possibilité d'enchaîner sur un doctorat) dans un laboratoire d'IA de premier plan, au cœur de l'innovation. Pour échanger sur une collaboration ou une opportunité, écris-moi via le formulaire ci-dessous.",
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
  siteRepo: 'https://github.com/CeGeek23/myeportfolio',
  testimonial: {
    comment: {
      en: '“I build AI systems that bridge research and real-world impact, from surrogate models for vehicle safety to Graph RAG for complex regulation. I care about rigor, clarity, and technology that genuinely helps people.”',
      fr: "« Je construis des systèmes d'IA qui relient la recherche à l'impact réel, des modèles surrogates pour la sécurité des véhicules au Graph RAG pour la réglementation complexe. Je tiens à la rigueur, à la clarté, et à une technologie qui aide vraiment les gens. »",
    },
    author: 'Cedrick Tchakonte',
    authorTitle: {
      en: 'AI & Cyber-Physical Systems Engineering Student, ENSTA Paris (IP Paris)',
      fr: 'Étudiant Ingénieur en IA & Systèmes Cyber-Physiques, ENSTA Paris (IP Paris)',
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
      en: "After completing my 2A at ENSTA Paris (Institut Polytechnique de Paris), specializing in AI and Cyber-Physical Systems, I'm using my gap year to gain practical experience. I'm currently a Machine Learning Research Intern at Stellantis, and I've worked on impactful AI projects at STMicroelectronics, Objectware, and TAEP, ranging from Digital Twin simulation and embedded AI to LLM-based decision support and Graph RAG systems.",
      fr: "Après avoir validé ma 2A à ENSTA Paris (Institut Polytechnique de Paris), spécialisé en IA et Systèmes Cyber-Physiques, je profite de mon année de césure pour acquérir de l'expérience concrète. Je suis actuellement Machine Learning Research Intern chez Stellantis, et j'ai mené des projets d'IA à fort impact chez STMicroelectronics, Objectware et la TAEP, de la simulation de jumeaux numériques et l'IA embarquée à l'aide à la décision par LLM et aux systèmes de Graph RAG.",
    },
  },
}

export default siteMetadata
