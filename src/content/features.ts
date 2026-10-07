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
      en: 'AI Specialization',
      fr: 'Spécialisation en IA',
    },
    description: {
      en: 'Final year at ENSTA Paris on a specialization track in Artificial Intelligence: machine learning, computer vision and robotic navigation, with PyTorch and TensorFlow.',
      fr: "Dernière année à l'ENSTA Paris en parcours de spécialisation en intelligence artificielle : machine learning, vision par ordinateur et navigation robotique, avec PyTorch et TensorFlow.",
    },
    icon: RiRobotLine,
  },
  {
    name: {
      en: 'Professional Experience',
      fr: 'Expérience professionnelle',
    },
    description: {
      en: "Junior AI Engineer at RagLogic, after Stellantis, Objectware and STMicroelectronics. My work spans surrogate modeling, Graph RAG, LLM decision support and Digital Twins.",
      fr: "Ingénieur IA junior chez RagLogic, après Stellantis, Objectware et STMicroelectronics. Mes travaux couvrent la modélisation de substitution, le Graph RAG, l'aide à la décision par LLM et les jumeaux numériques.",
    },
    icon: IoSchoolOutline,
  },
  {
    name: {
      en: 'Research & Innovation',
      fr: 'Recherche et innovation',
    },
    description: {
      en: "I've built retinal vessel segmentation systems, computer vision algorithms and 4D GPS navigation for VTOL aircraft. Always exploring new technologies.",
      fr: "J'ai développé des systèmes de segmentation des vaisseaux rétiniens, des algorithmes de vision par ordinateur et une navigation GPS 4D pour aéronefs VTOL. Toujours à explorer de nouvelles technologies.",
    },
    icon: IoBulbOutline,
  },
  {
    name: {
      en: 'Full-Stack Development',
      fr: 'Développement full-stack',
    },
    description: {
      en: 'Proficient in Python, R and MATLAB, as well as Java and C++, with experience in React, Next.js, Docker and Git, and solid software engineering foundations.',
      fr: "Maîtrise de Python, R et MATLAB, ainsi que Java et C++, avec une expérience de React, Next.js, Docker et Git, et de solides bases en génie logiciel.",
    },
    icon: IoCodeWorkingOutline,
  },
]
