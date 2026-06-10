interface NavSubLink {
  name: string
  href: string
}

interface NavLink {
  name: string
  href: string
  submenu?: NavSubLink[]
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
  experience: {
    title: string
    intro: string
  }
}

const siteMetadata: SiteMetadata = {
  title: 'Portfolio of Cedrick Tchakonte',
  description:
    'Welcome to my personal portfolio. I am an engineering student in AI and Cyber-Physical Systems, passionate about machine learning, robotics and their real-world applications.',
  author: 'Cedrick Tchakonte',
  authorHeadline:
    'Machine Learning & AI Engineering Student | Cyber-Physical Systems at ENSTA Paris (IP Paris)',
  authorAbout:
    "Hi, I'm Cedrick! I completed my 2A (2nd year) at ENSTA Paris specializing in Artificial Intelligence and Cyber-Physical Systems. I'm currently doing a gap year (césure) as a Machine Learning Research Intern at Stellantis, applying AI to real-world engineering and safety challenges. I'm now looking for an end-of-studies internship (with the possibility of continuing into a PhD) in a world-class AI lab such as Google DeepMind, OpenAI, Meta FAIR, Mistral AI or Anthropic, where I can work at the very heart of AI innovation.",
  authorAboutExtended:
    "Cedrick completed his 2A at ENSTA Paris (Institut Polytechnique de Paris), specializing in Artificial Intelligence and Cyber-Physical Systems. Passionate about machine learning, robotics, and their real-world applications, he is using his gap year to gain hands-on experience. He is currently a Machine Learning Research Intern at Stellantis and a Junior AI Engineer at TAEP (ENSTA's Junior Enterprise), and has previously worked at STMicroelectronics and Objectware. He is driven to contribute to impactful projects that push the boundaries of AI and technology.",
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
    "I completed my 2A in AI and Cyber-Physical Systems at ENSTA Paris and I'm currently on a gap year, working as a Machine Learning Research Intern at Stellantis. I'm looking for an end-of-studies internship (with the possibility of pursuing a PhD) in a leading AI lab where I can be at the heart of innovation. If you'd like to discuss potential collaborations or opportunities, please reach out using the form below.",
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
      name: 'Dreams',
      href: '/dreams',
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
    authorTitle: 'AI & Cyber-Physical Systems Engineering Student, ENSTA Paris (IP Paris)',
    imgUrl: '/images/avatar.jpg',
    imageAttribution: 'Photo by Cedrick Tchakonte',
  },
  // Professional experience and expertise areas
  experience: {
    title: "Things I've done trying to put my dent in the universe.",
    intro:
      "After completing my 2A at ENSTA Paris (Institut Polytechnique de Paris), specializing in AI and Cyber-Physical Systems, I'm using my gap year to gain practical experience. I'm currently a Machine Learning Research Intern at Stellantis, and I've worked on impactful AI projects at STMicroelectronics, Objectware, and TAEP, ranging from Digital Twin simulation and embedded AI to LLM-based decision support and Graph RAG systems.",
  },
}

export default siteMetadata
