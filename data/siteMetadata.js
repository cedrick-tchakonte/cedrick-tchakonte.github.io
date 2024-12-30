import { GiRobotGolem } from 'react-icons/gi'
import { RiRobotLine, RiBrainLine } from 'react-icons/ri'
import { IoSchoolOutline } from 'react-icons/io5'

const siteMetadata = {
  title: 'Portfolio of Cedrick Tchakonte',
  description:
    'Welcome to my personal portfolio. I am a computer science major with a passion for AI and robotics.',
  author: 'Cedrick Tchakonte',
  authorHeadline: '2nd Year Computer Science Major at ENSTA Paris, IP Paris',
  authorAbout:
    "Hi, I'm Cedrick, a 2nd year computer science major at ENSTA Paris, part of the Institut Polytechnique de Paris. I am passionate about robotics, artificial intelligence, and their applications.",
  authorAboutExtended:
    "Cedrick is a student at ENSTA Paris, a member of the Institut Polytechnique de Paris. He is passionate about robotics and artificial intelligence and their applications. In his personal life, Cedrick enjoys exploring new technologies and working on innovative projects.",
  socials: {
    x: 'https://x.com/Cdrick237',
    facebook: 'https://www.facebook.com/profile.php?id=100011695911246',
    github: 'https://github.com/CeGeek23',
    linkedin: 'https://www.linkedin.com/in/cedrick-tchakonte',
    instagram: 'https://www.instagram.com/cedrick_frame',
  },
  email: 'cedrick.tchakonte@ensta-paris.fr',
  phoneNumber: '0758744186',
  contactTitle: 'Get in touch',
  contactSubtitle:
    "I am currently studying computer science and working on exciting projects in robotics and AI. If you want to get in touch, please use the form below.",
  analytics: {
    plausibleDataDomain: 'https://cedricktchakonte.com/', // e.g. tailwind-nextjs-starter-blog.vercel.app
    googleAnalyticsId: 'G-XXXXXXX', // e.g. UA-000000-2 or G-XXXXXXX
  },
  // TODO: Add the name of the navbar items and the corresponding page. Used in the Header and Footer components.
  siteNavLinks: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Education',
      href: '/education',
      submenu: [
        { 
          name: 'Academic Background', 
          href: '/education/academic-background' 
        },
        { name: 'Certifications', 
          href: '/education/certifications' 
        },
      ],
    },
    { 
      name: 'Projects', 
      href: '/projects' 
    },

    {
      name: 'Experience',
      href: '/experience',
    },
    {
      name: 'Expertise',
      href: '/expertise',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'Skills',
      href: '/skills',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Education',
      href: '/education',
    },
    {
      name: 'Certifications',
      href: '/certifications',
    },
    {
      name: 'International Mobility',
      href: '/international-mobility',
    },

  ],
  siteRepo: 'https://github.com/myeportfolio',
  expertise: [
    {
      title: 'AI and Robotics Projects',
      description:
        'I will guide you through my AI and robotics projects, showcasing my skills and passion in these fields. From conceptualization to implementation, I will share my journey and the challenges I overcame. Whether you are a beginner or an enthusiast, you will find valuable insights and inspiration.',
      testimonial:
        '“Cedrick is an exceptional talent in AI and robotics. His dedication and innovative approach have greatly impressed me. I highly recommend him for any project in these domains.”',
      testimonialAuthor: 'M. John Doe',
      testimonialAuthorTitle: 'Professor at ENSTA Paris',
      imgUrl: '/images/avatar.jpg',
      imageAttribution: 'TODO',
    },
    {
      title: 'AI and Robotics Workshops',
      description:
        'Join my workshops to learn about AI and robotics. These sessions will cover the basics of AI, machine learning, and robotics, providing hands-on experience with real-world applications. Participants will gain practical knowledge and skills to kickstart their journey in these exciting fields.',
      testimonial: '“Cedrick is an exceptional talent in AI and robotics. His dedication and innovative approach have greatly impressed me. I highly recommend him for any project in these domains.”',
      testimonialAuthor: 'My Professor',
      testimonialAuthorTitle: 'Professor at ENSTA Paris',
      imgUrl: '/images/avatar.jpg',
      imageAttribution: 'TODO',
    },
  ],
  testimonial: {
    comment:
      '“Cedrick is an exceptional talent in AI and robotics. His dedication and innovative approach have greatly impressed me. I highly recommend him for any project in these domains.”',
    author: 'Professor John Doe',
    authorTitle: 'Professor at ENSTA Paris',
    imgUrl: '/images/avatar.jpg',
    imageAttribution: 'Photo by Cedrick Tchakonte',
  },
  featureSection: {
    title: 'Why Choose Me?',
    description:
      'I am a computer science major with a passion for AI and robotics. My projects and workshops reflect my dedication and innovative approach in these fields.',
    //TODO also need to update the features array in the FeatureSection component
  },
  experience: {
    title: 'Things I’ve done trying to put my dent in the universe.',
    intro:
      "I am a 2nd year computer science major at ENSTA Paris, part of the Institut Polytechnique de Paris. I have worked on various AI and robotics projects, and I am always eager to explore new technologies and innovative projects.",
    //TODO also need to update the experience array in the ExperienceSection component. This is because of the icons used.
    education: [
      {
        schoolName: 'Institut Polytechnique de Paris',
        degree: '2A Computer Science',
        description:
        'IP Paris is a prestigious engineering school in France. The computer science program is designed to provide students with a strong foundation in computer science and engineering.',
        startDate: '2023',
        endDate: '2025',
        typeofDegree: 'Master of Science',
        ImageUrl: '/images/avatar.jpg',
        alt: 'Institut Polytechnique de Paris',
      },
      {
        schoolName: 'Ecole Nationale Supérieure de Techniques Avancées Paris',
        degree: '2A Computer Science',
        description:
          'ENSTA Paris is a prestigious engineering school in France. The computer science program is designed to provide students with a strong foundation in computer science and engineering.',
        startDate: '2023',
        endDate: '2025',
        typeofDegree: 'Master of Science',
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
        startDate: '2022',
        endDate: '2024',
        ImageUrl: '/images/avatar.jpg',
        alt: 'Lycée Bilingue de Nylon Ndogpassi',
      },
    ],
  },

}

export default siteMetadata
