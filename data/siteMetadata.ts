interface NavSubLink {
  name: string
  href: string
}

interface NavLink {
  name: string
  href: string
  submenu?: NavSubLink[]
}

interface EducationItem {
  schoolName: string
  degree: string
  description: string
  startDate: string
  endDate: string
  typeofDegree?: string
  ImageUrl: string
  alt: string
}

interface Testimonial {
  comment: string
  author: string
  authorTitle: string
  imgUrl: string
  imageAttribution: string
}

interface SiteMetadata {
  title: string
  description: string
  author: string
  authorHeadline: string
  authorAbout: string
  authorAboutExtended: string
  socials: {
    x: string
    facebook: string
    github: string
    linkedin: string
    instagram: string
  }
  email: string
  phoneNumber: string
  contactTitle: string
  contactSubtitle: string
  analytics: {
    plausibleDataDomain: string
    googleAnalyticsId: string
  }
  siteNavLinks: NavLink[]
  siteRepo: string
  testimonial: Testimonial
  featureSection: {
    title: string
    description: string
    href: string
  }
  experience: {
    title: string
    intro: string
  }
  education: EducationItem[]
}

const siteMetadata: SiteMetadata = {
  title: 'Portfolio of Cedrick Tchakonte',
  description:
    'Welcome to my personal portfolio. I am an engineering student in AI and Cyber-Physical Systems, passionate about machine learning, robotics and their real-world applications.',
  author: 'Cedrick Tchakonte',
  authorHeadline:
    'Machine Learning & AI Engineering Student | Cyber-Physical Systems at ENSTA Paris-Saclay (IP Paris)',
  authorAbout:
    "Hi, I'm Cedrick! I completed my 2A (2nd year) at ENSTA Paris-Saclay specializing in Artificial Intelligence and Cyber-Physical Systems. I'm currently doing a gap year (césure) as a Machine Learning Research Intern at Stellantis, applying AI to real-world engineering and safety challenges.",
  authorAboutExtended:
    "Cedrick completed his 2A at ENSTA Campus de Paris-Saclay (Institut Polytechnique de Paris), specializing in Artificial Intelligence and Cyber-Physical Systems. Passionate about machine learning, robotics, and their real-world applications, he is using his gap year to gain hands-on experience. He is currently a Machine Learning Research Intern at Stellantis, and has previously worked at STMicroelectronics, Objectware, and TAEP (ENSTA's Junior Enterprise). He is driven to contribute to impactful projects that push the boundaries of AI and technology.",
  socials: {
    x: 'https://x.com/Cdrick237',
    facebook: 'https://www.facebook.com/profile.php?id=100011695911246',
    github: 'https://github.com/CeGeek23',
    linkedin: 'https://www.linkedin.com/in/cedrick-tchakonte',
    instagram: 'https://www.instagram.com/cedrick_frame',
  },
  email: 'cedrick.tchakonte@ensta.fr',
  phoneNumber: '0758744186',
  contactTitle: 'Get in touch',
  contactSubtitle:
    "I completed my 2A in AI and Cyber-Physical Systems at ENSTA Paris-Saclay and I'm currently on a gap year, working as a Machine Learning Research Intern at Stellantis. If you'd like to discuss potential collaborations or opportunities, please reach out using the form below.",
  analytics: {
    plausibleDataDomain: 'cedricktchakonte.com', // e.g. tailwind-nextjs-starter-blog.vercel.app
    googleAnalyticsId: 'G-XXXXXXX', // e.g. UA-000000-2 or G-XXXXXXX
  },
  // Navigation structure with dropdown menus
  siteNavLinks: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Academic',
      href: '#',
      submenu: [
        { name: 'Education', href: '/education' },
        { name: 'Certifications', href: '/certifications' },
        { name: 'International Mobility', href: '/international-mobility' },
      ],
    },
    {
      name: 'Professional',
      href: '#',
      submenu: [
        { name: 'Experience', href: '/experience' },
        { name: 'Projects', href: '/projects' },
        { name: 'Skills', href: '/skills' },
      ],
    },
    {
      name: 'Community',
      href: '#',
      submenu: [
        { name: 'Volunteer', href: '/volunteer' },
        { name: 'Hobbies', href: '/hobbies' },
      ],
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ],
  siteRepo: 'https://github.com/CeGeek23/myeportfolio',
  testimonial: {
    comment:
      '“I build AI systems that bridge research and real-world impact, from surrogate models for vehicle safety to Graph RAG for complex regulation. I care about rigor, clarity, and technology that genuinely helps people.”',
    author: 'Cedrick Tchakonte',
    authorTitle: 'AI & Cyber-Physical Systems Engineer in training, ENSTA Paris (IP Paris)',
    imgUrl: '/images/avatar.jpg',
    imageAttribution: 'Photo by Cedrick Tchakonte',
  },
  featureSection: {
    title: 'Why Choose Me?',
    description:
      'I am an engineering student with a passion for AI and robotics. My projects and experiences reflect my dedication and innovative approach in these fields.',
    href: '/contact',
  },
  // Professional experience and expertise areas
  experience: {
    title: "Things I've done trying to put my dent in the universe.",
    intro:
      "After completing my 2A at ENSTA Campus de Paris-Saclay (Institut Polytechnique de Paris), specializing in AI and Cyber-Physical Systems, I'm using my gap year to gain practical experience. I'm currently a Machine Learning Research Intern at Stellantis, and I've worked on impactful AI projects at STMicroelectronics, Objectware, and TAEP, ranging from Digital Twin simulation and embedded AI to LLM-based decision support and Graph RAG systems.",
  },
  education: [
    {
      schoolName: 'Institut Polytechnique de Paris',
      degree: '2A Computer Science (Completed) - Currently on Gap Year',
      description:
        'IP Paris is a prestigious engineering school in France. I completed my 2A specializing in AI and Cyber-Physical Systems. Currently on a gap year to gain professional experience before my 3rd year.',
      startDate: '2024',
      endDate: '2025',
      typeofDegree: 'Master of Science (In Progress)',
      ImageUrl: '/images/avatar.jpg',
      alt: 'Institut Polytechnique de Paris',
    },
    {
      schoolName: 'Ecole Nationale Supérieure de Techniques Avancées Paris',
      degree: '2A Computer Science - AI & Cyber-Physical Systems (Completed)',
      description:
        'ENSTA Paris is a prestigious engineering school in France. I completed my 2A with a specialization in Artificial Intelligence and Cyber-Physical Systems. The rigorous program provided me with strong theoretical foundations and practical skills in AI, robotics, and systems engineering.',
      startDate: '2024',
      endDate: '2025',
      typeofDegree: 'Engineering Degree (In Progress)',
      ImageUrl: '/images/avatar.jpg',
      alt: 'ENSTA Paris',
    },
    {
      schoolName: 'Ecole Nationale Supérieure Polytechnique de Yaoundé',
      degree: '1A Computer Science',
      description:
        'ENSPY is a prestigious engineering school in Cameroon. The computer science program is designed to provide students with a strong foundation in computer science and engineering.',
      startDate: '2022',
      endDate: '2024',
      ImageUrl: '/images/avatar.jpg',
      alt: 'ENSPY',
    },
    {
      schoolName: 'Ecole Nationale Supérieure Polytechnique de Yaoundé',
      degree: 'Integrated preparatory classes | Mathematics, physical sciences and computer science',
      description:
        'ENSPY is a prestigious engineering school in Cameroon. The preparatory classes program is designed to provide students with a strong foundation in mathematics, physical sciences and computer science.',
      startDate: '2020',
      endDate: '2022',
      ImageUrl: '/images/avatar.jpg',
      alt: 'ENSPY',
    },
    {
      schoolName: 'Lycée Bilingue de Nylon Ndogpassi',
      degree: 'Baccalauréat | Mathematics, physical sciences and computer science',
      description:
        'National examination in Cameroon. The program is designed to provide students with a strong foundation in mathematics, physical sciences and computer science.',
      startDate: '2019',
      endDate: '2020',
      ImageUrl: '/images/avatar.jpg',
      alt: 'Lycée Bilingue de Nylon Ndogpassi',
    },
  ],
}

export default siteMetadata
