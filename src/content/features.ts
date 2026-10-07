import { RiRobotLine } from 'react-icons/ri'
import { IoSchoolOutline, IoCodeWorkingOutline, IoBulbOutline } from 'react-icons/io5'
import type { IconType } from 'react-icons'
import type { I18n } from '@/i18n'

export type Feature = {
  name: I18n<string>
  description: I18n<string>
  icon: IconType
}

export const features: Feature[] = [
  {
    name: {
      en: 'AI & Cyber-Physical Systems',
      fr: 'IA et systèmes cyber-physiques',
    },
    description: {
      en: 'In my final year at ENSTA Paris, specializing in AI and Cyber-Physical Systems. Working on advanced machine learning algorithms, computer vision, and robotic navigation systems. Experience with TensorFlow, PyTorch, and ROS.',
      fr: "En dernière année à l'ENSTA Paris, spécialisé en IA et systèmes cyber-physiques. Je travaille sur des algorithmes avancés de machine learning, la vision par ordinateur et les systèmes de navigation robotique. Expérience avec TensorFlow, PyTorch et ROS.",
    },
    icon: RiRobotLine,
  },
  {
    name: {
      en: 'Professional Experience',
      fr: 'Expérience professionnelle',
    },
    description: {
      en: "Gaining hands-on industry experience as a Junior AI Engineer at RagLogic (with TAEP, ENSTA's Junior Enterprise), and through research and R&D internships at Stellantis and STMicroelectronics. My work spans surrogate modeling, Graph RAG, LLM-based decision support and Digital Twin generation.",
      fr: "J'acquiers une expérience concrète en entreprise en tant qu'ingénieur IA junior chez RagLogic (avec la TAEP, la Junior-Entreprise de l'ENSTA), ainsi que lors de stages de recherche et de R&D chez Stellantis et STMicroelectronics. Mes travaux couvrent la modélisation de substitution, le Graph RAG, l'aide à la décision fondée sur les LLM et la génération de jumeaux numériques.",
    },
    icon: IoSchoolOutline,
  },
  {
    name: {
      en: 'Research & Innovation',
      fr: 'Recherche et innovation',
    },
    description: {
      en: 'Passionate about pushing the boundaries of AI and technology. Developed retinal vessel segmentation systems, computer vision algorithms, and 4D GPS navigation for VTOL aircraft. Always exploring new technologies and innovative solutions.',
      fr: "Passionné par le fait de repousser les limites de l'IA et de la technologie. J'ai développé des systèmes de segmentation des vaisseaux rétiniens, des algorithmes de vision par ordinateur et une navigation GPS 4D pour aéronefs VTOL. Toujours à explorer de nouvelles technologies et des solutions innovantes.",
    },
    icon: IoBulbOutline,
  },
  {
    name: {
      en: 'Full-Stack Development',
      fr: 'Développement full-stack',
    },
    description: {
      en: 'Proficient in multiple programming languages including Python, C++, Java, JavaScript, and R. Experience with web development (React, Next.js), cloud platforms (AWS, Azure), and development tools (Docker, Git). Strong foundation in software engineering and system design.',
      fr: "Maîtrise de plusieurs langages de programmation, dont Python, C++, Java, JavaScript et R. Expérience en développement web (React, Next.js), sur les plateformes cloud (AWS, Azure) et avec les outils de développement (Docker, Git). Solides bases en génie logiciel et en conception de systèmes.",
    },
    icon: IoCodeWorkingOutline,
  },
]
