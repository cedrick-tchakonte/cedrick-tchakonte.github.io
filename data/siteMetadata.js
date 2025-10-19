import { GiRobotGolem } from 'react-icons/gi'
import { RiRobotLine, RiBrainLine } from 'react-icons/ri'
import { IoSchoolOutline } from 'react-icons/io5'

const siteMetadata = {
  title: 'Portfolio of Cedrick Tchakonte',
  description:
    'Welcome to my personal portfolio. I am an engineering student on a gap year with a passion for AI and robotics.',
  author: 'Cedrick Tchakonte',
  authorHeadline: 'Engineering Student on Gap Year | AI & Cyber-Physical Systems at ENSTA Paris-Saclay, IP Paris',
  authorAbout:
    "Hi, I'm Cedrick! After completing my 2A (2nd year) at ENSTA Paris-Saclay specializing in Artificial Intelligence and Cyber-Physical Systems, I'm currently on a gap year. I'm actively seeking a 6-month internship to strengthen my expertise in AI and machine learning while exploring new fields of innovation.",
  authorAboutExtended:
    "Cedrick has completed his 2A at ENSTA Campus de Paris-Saclay, specializing in Artificial Intelligence and Cyber-Physical Systems. Passionate about robotics, artificial intelligence, and their real-world applications, he is now on a gap year to gain hands-on experience. He is seeking a 6-month internship to deepen his knowledge in AI and machine learning, discover new fields of innovation, and contribute to impactful projects that push the boundaries of technology.",
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
    "I have completed my 2A in AI and Cyber-Physical Systems at ENSTA Paris-Saclay and I'm currently on a gap year seeking internship opportunities. If you'd like to discuss potential collaborations or opportunities, please reach out using the form below.",
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
      name: 'About',
      href: '/about',
    },
    {
      name: 'Education',
      href: '/education',
    },
    {
      name: 'Experience',
      href: '/experience',
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
      name: 'Certifications',
      href: '/certifications',
    },
    {
      name: 'Mobility',
      href: '/international-mobility',
    },
    {
      name: 'Volunteer',
      href: '/volunteer',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ],
  siteRepo: 'https://github.com/myeportfolio',
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
    title: 'Things I\'ve done trying to put my dent in the universe.',
    intro:
      "After completing my 2A at ENSTA Campus de Paris-Saclay (Institut Polytechnique de Paris), specializing in AI and Cyber-Physical Systems, I'm now on a gap year to gain practical experience. I have already worked on impactful projects during internships at Objectware and STMicroelectronics, focusing on AI-based decision support systems and Digital Twin simulations. I'm now seeking new challenges to further develop my skills.",
    //TODO also need to update the experience array in the ExperienceSection component. This is because of the icons used.
    education: [
      {
        schoolName: 'Institut Polytechnique de Paris',
        degree: '2A Computer Science (Completed) - Currently on Gap Year',
        description:
        'IP Paris is a prestigious engineering school in France. I completed my 2A specializing in AI and Cyber-Physical Systems. Currently on a gap year to gain professional experience before my 3rd year.',
        startDate: '2023',
        endDate: '2024',
        typeofDegree: 'Master of Science (In Progress)',
        ImageUrl: '/images/avatar.jpg',
        alt: 'Institut Polytechnique de Paris',
      },
      {
        schoolName: 'Ecole Nationale Supérieure de Techniques Avancées Paris',
        degree: '2A Computer Science - AI & Cyber-Physical Systems (Completed)',
        description:
          'ENSTA Paris is a prestigious engineering school in France. I completed my 2A with a specialization in Artificial Intelligence and Cyber-Physical Systems. The rigorous program provided me with strong theoretical foundations and practical skills in AI, robotics, and systems engineering.',
        startDate: '2023',
        endDate: '2024',
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
        startDate: '2022',
        endDate: '2024',
        ImageUrl: '/images/avatar.jpg',
        alt: 'Lycée Bilingue de Nylon Ndogpassi',
      },
    ],
  },

}

export default siteMetadata
