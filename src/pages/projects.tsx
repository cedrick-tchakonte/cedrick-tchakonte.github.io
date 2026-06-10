import Head from 'next/head'
import type { IconType } from 'react-icons'
import {
  FaEye,
  FaShieldAlt,
  FaCamera,
  FaPlaneDeparture,
  FaRobot,
  FaVideo,
  FaTrafficLight,
} from 'react-icons/fa'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'
import { useT, type I18n } from '@/i18n'

interface Project {
  title: I18n<string>
  description: I18n<string>
  icon: IconType
  href: string
  category: I18n<string>
}

const projectsData: Project[] = [
  {
    title: {
      en: 'Retinal Vessel Segmentation in SLO Ophthalmoscopy',
      fr: 'Segmentation des vaisseaux rétiniens en ophtalmoscopie SLO',
    },
    description: {
      en: 'Developed automated retinal vessel segmentation system using image derivation operators and specialized vascular filters for Scanning Laser Ophthalmoscopy (SLO) retinal images. Implemented two segmentation approaches against IOSTAR database ground truth, applying advanced image processing techniques including gradient operators and morphological filtering for precise vascular structure detection.',
      fr: "Développement d'un système automatisé de segmentation des vaisseaux rétiniens à l'aide d'opérateurs de dérivation d'image et de filtres vasculaires spécialisés pour des images rétiniennes acquises en ophtalmoscopie laser à balayage (SLO). Mise en œuvre de deux approches de segmentation évaluées sur les vérités terrain de la base IOSTAR, en appliquant des techniques avancées de traitement d'images, notamment des opérateurs de gradient et un filtrage morphologique, pour une détection précise des structures vasculaires.",
    },
    icon: FaEye,
    href: 'https://github.com/CeGeek23/retinal-vessel-segmentation',
    category: {
      en: 'Computer Vision & Biomedical Imaging',
      fr: 'Vision par ordinateur et imagerie biomédicale',
    },
  },
  {
    title: {
      en: 'Adversarial Attacks on Segmentation Models',
      fr: 'Attaques adverses sur des modèles de segmentation',
    },
    description: {
      en: 'Implemented FGSM-based targeted and untargeted adversarial attacks on DeepLabV3 and FCN segmentation models (MS-COCO, PyTorch). Evaluated cross-architecture transferability and the impact of perturbations on segmentation robustness, highlighting the vulnerability of deep vision models to adversarial perturbations.',
      fr: "Mise en œuvre d'attaques adverses ciblées et non ciblées fondées sur FGSM contre les modèles de segmentation DeepLabV3 et FCN (MS-COCO, PyTorch). Évaluation de la transférabilité entre architectures et de l'impact des perturbations sur la robustesse de la segmentation, mettant en évidence la vulnérabilité des modèles de vision profonds aux perturbations adverses.",
    },
    icon: FaShieldAlt,
    href: 'https://github.com/CeGeek23/adversarial-attacks-segmentation',
    category: {
      en: 'Deep Learning & Adversarial ML',
      fr: 'Apprentissage profond et ML adverse',
    },
  },
  {
    title: {
      en: 'Computer Vision and Feature Detection Projects',
      fr: 'Projets de vision par ordinateur et de détection de caractéristiques',
    },
    description: {
      en: 'Implemented comprehensive computer vision solutions including Bayesian classification and K-means clustering for skin detection using Essex dataset, achieving robust pixel-level classification. Developed feature detection pipeline using Harris corner detection, ORB, and KAZE algorithms with OpenCV, applying gradient analysis and morphological operations for robust point matching across scales and transformations.',
      fr: "Mise en œuvre de solutions complètes de vision par ordinateur, dont une classification bayésienne et un partitionnement par K-means pour la détection de la peau sur le jeu de données Essex, atteignant une classification robuste au niveau du pixel. Développement d'un pipeline de détection de caractéristiques à l'aide des algorithmes Harris, ORB et KAZE avec OpenCV, en appliquant une analyse de gradient et des opérations morphologiques pour un appariement de points robuste à différentes échelles et transformations.",
    },
    icon: FaCamera,
    href: 'https://github.com/CeGeek23/computer-vision-projects',
    category: {
      en: 'Computer Vision & Image Processing',
      fr: "Vision par ordinateur et traitement d'images",
    },
  },
  {
    title: {
      en: '4D GPS Navigation System for VTOL Aircraft',
      fr: 'Système de navigation GPS 4D pour aéronefs à décollage vertical (VTOL)',
    },
    description: {
      en: 'Developed trajectory optimization algorithms for vertical takeoff and landing aircraft in collaboration with Technoplane company, using 3D mapping and dynamic weather modeling as a 4th dimension. Simulated and analyzed real-time path planning strategies for autonomous flight systems.',
      fr: "Développement d'algorithmes d'optimisation de trajectoire pour des aéronefs à décollage et atterrissage verticaux, en collaboration avec l'entreprise Technoplane, en utilisant la cartographie 3D et la modélisation météorologique dynamique comme 4e dimension. Simulation et analyse de stratégies de planification de trajectoire en temps réel pour des systèmes de vol autonomes.",
    },
    icon: FaPlaneDeparture,
    href: 'https://github.com/CeGeek23/vtol-navigation-system',
    category: {
      en: 'Aerospace & Navigation Systems',
      fr: 'Aérospatiale et systèmes de navigation',
    },
  },
  {
    title: { en: 'Chatbot with PyQt5', fr: 'Chatbot avec PyQt5' },
    description: {
      en: 'This is a simple chatbot that I built using PyQt5. I wanted to learn more about PyQt5 and how to build desktop applications. The chatbot is a simple application that allows you to chat with a bot. The bot can answer simple questions and provide information about the weather. The chatbot uses the OpenWeatherMap API to get the weather information.',
      fr: "Un chatbot simple que j'ai réalisé avec PyQt5. Je voulais approfondir PyQt5 et apprendre à développer des applications de bureau. Le chatbot est une application simple qui permet de discuter avec un bot. Celui-ci peut répondre à des questions simples et fournir des informations sur la météo. Le chatbot utilise l'API OpenWeatherMap pour récupérer les informations météorologiques.",
    },
    icon: FaRobot,
    href: 'https://github.com/CeGeek23/chatbot',
    category: { en: 'Desktop Application', fr: 'Application de bureau' },
  },
  {
    title: {
      en: 'Intrusion Detection System',
      fr: "Système de détection d'intrusion",
    },
    description: {
      en: "This project is a simple intrusion detection system composed of a mobile application, arduino cards, micro cameras and a server. The system is designed to detect intruders in a room and send an alert to the user's mobile phone. The system uses a combination of motion sensors, cameras and a server to detect intruders and send an alert to the user's mobile phone. The system is built using Arduino, Python, Flask and React Native.",
      fr: "Ce projet est un système simple de détection d'intrusion composé d'une application mobile, de cartes Arduino, de micro-caméras et d'un serveur. Le système est conçu pour détecter des intrus dans une pièce et envoyer une alerte sur le téléphone mobile de l'utilisateur. Il combine des capteurs de mouvement, des caméras et un serveur pour détecter les intrus et envoyer une alerte sur le téléphone de l'utilisateur. Le système est développé avec Arduino, Python, Flask et React Native.",
    },
    icon: FaVideo,
    href: 'https://github.com/CeGeek23/Syst-me_detection_d_intrusion',
    category: { en: 'Security System', fr: 'Système de sécurité' },
  },
  {
    title: {
      en: 'Traffic prediction app in the city of Yaoundé (Cameroon)',
      fr: 'Application de prévision du trafic dans la ville de Yaoundé (Cameroun)',
    },
    description: {
      en: 'This project is a simple traffic prediction application for the city of Yaoundé in Cameroon. The application uses historical traffic data to predict traffic conditions in the city. The application uses a machine learning model to predict traffic conditions based on historical data. The application is built using Python, Flask and React.',
      fr: "Ce projet est une application simple de prévision du trafic pour la ville de Yaoundé, au Cameroun. L'application s'appuie sur des données de trafic historiques pour prédire les conditions de circulation dans la ville. Elle utilise un modèle de machine learning pour prédire ces conditions à partir des données historiques. L'application est développée avec Python, Flask et React.",
    },
    icon: FaTrafficLight,
    href: 'https://github.com/CeGeek23/traffic-prediction-yaounde',
    category: {
      en: 'Machine Learning Model',
      fr: 'Modèle de machine learning',
    },
  },
]

function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  const t = useT()

  return (
    <>
      <Head>
        <title>Projects - {siteMetadata.author}</title>
        <meta name="description" content="Personal projects by Cedrick Tchakonte" />
      </Head>
      <SimpleLayout
        title={t({
          en: "Projects I've worked on",
          fr: "Projets sur lesquels j'ai travaillé",
        })}
        intro={t({
          en: "These are some of the projects that I'm most proud of. I've built them to learn new technologies, or to solve a problem that I've encountered.",
          fr: "Voici quelques-uns des projets dont je suis le plus fier. Je les ai réalisés pour apprendre de nouvelles technologies ou pour résoudre un problème que j'ai rencontré.",
        })}
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project) => (
            <Card as="li" key={project.href}>
              <div className="relative z-10 flex items-center justify-center w-12 h-12 text-white shadow-md rounded-xl bg-gradient-to-br from-accent-500 to-accent-600">
                <project.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                <Card.Link href={project.href}>{t(project.title)}</Card.Link>
              </h3>
              {/* Eyebrow - texte complémentaire */}
              <Card.Eyebrow decorate>{t(project.category)}</Card.Eyebrow>
              <Card.Description>{t(project.description)}</Card.Description>
              <p className="relative z-10 flex mt-6 text-sm font-medium transition text-primaryText-400 group-hover:text-accent-500 dark:text-primaryText-200">
                <LinkIcon className="flex-none w-6 h-6" />
                <span className="ml-2">{t({ en: 'View on GitHub', fr: 'Voir sur GitHub' })}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
