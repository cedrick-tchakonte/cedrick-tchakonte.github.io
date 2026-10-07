import type { IconType } from 'react-icons'
import {
  FaEye,
  FaShieldAlt,
  FaCamera,
  FaPlaneDeparture,
  FaRobot,
  FaVideo,
} from 'react-icons/fa'

import { type I18n } from '@/i18n'

export interface Project {
  title: I18n<string>
  description: I18n<string>
  icon: IconType
  href: string
  category: I18n<string>
}

export const projectsData: Project[] = [
  {
    title: {
      en: 'Retinal Vessel Segmentation in SLO Ophthalmoscopy',
      fr: 'Segmentation des vaisseaux rétiniens en ophtalmoscopie SLO',
    },
    description: {
      en: 'Automated retinal vessel segmentation in SLO images using derivation operators, vascular and morphological filters; two approaches evaluated on IOSTAR ground truth.',
      fr: "Automatisation de la segmentation des vaisseaux rétiniens sur des images SLO à l'aide d'opérateurs de dérivation et de filtres vasculaires et morphologiques ; deux approches évaluées sur les vérités terrain IOSTAR.",
    },
    icon: FaEye,
    href: 'https://github.com/cedrick-tchakonte/retinal-vessel-segmentation',
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
      en: 'Implemented targeted and untargeted FGSM attacks on DeepLabV3 and FCN (MS-COCO, PyTorch), evaluating cross-architecture transferability and exposing their vulnerability.',
      fr: "Mise en œuvre d'attaques FGSM ciblées et non ciblées contre DeepLabV3 et FCN (MS-COCO, PyTorch), avec évaluation de la transférabilité entre architectures, révélant leur vulnérabilité.",
    },
    icon: FaShieldAlt,
    href: 'https://github.com/cedrick-tchakonte/adversarial-attacks-segmentation',
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
      en: 'Implemented pixel-level skin detection (Bayesian classification, K-means; Essex dataset) and an OpenCV feature-matching pipeline (Harris, ORB, KAZE) robust across scales.',
      fr: "Mise en œuvre d'une détection de peau au niveau du pixel (classification bayésienne, K-means ; jeu de données Essex) et d'un pipeline d'appariement de caractéristiques OpenCV (Harris, ORB, KAZE) robuste aux changements d'échelle.",
    },
    icon: FaCamera,
    href: 'https://github.com/cedrick-tchakonte/computer-vision-projects',
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
      en: 'Developed VTOL trajectory optimization with Technoplane, using 3D mapping and dynamic weather as a 4th dimension; simulated real-time path planning for autonomous flight.',
      fr: "Optimisation de trajectoire pour VTOL avec Technoplane, en utilisant la cartographie 3D et la météo dynamique comme 4e dimension ; simulation de planification de trajectoire en temps réel pour le vol autonome.",
    },
    icon: FaPlaneDeparture,
    href: 'https://github.com/cedrick-tchakonte/vtol-navigation-system',
    category: {
      en: 'Aerospace & Navigation Systems',
      fr: 'Aérospatiale et systèmes de navigation',
    },
  },
  {
    title: { en: 'Chatbot with PyQt5', fr: 'Chatbot avec PyQt5' },
    description: {
      en: 'Built a desktop chatbot with PyQt5 that answers simple questions and provides weather information via the OpenWeatherMap API.',
      fr: "Développement d'un chatbot de bureau avec PyQt5, qui répond à des questions simples et fournit des informations météo via l'API OpenWeatherMap.",
    },
    icon: FaRobot,
    href: 'https://github.com/cedrick-tchakonte/chatbot',
    category: { en: 'Desktop Application', fr: 'Application de bureau' },
  },
  {
    title: {
      en: 'Intrusion Detection System',
      fr: "Système de détection d'intrusion",
    },
    description: {
      en: "Built an intrusion detection system (Arduino, motion sensors, micro cameras) that alerts the user's phone, with a Python/Flask server and a React Native app.",
      fr: "Développement d'un système de détection d'intrusion (Arduino, capteurs de mouvement, micro-caméras) qui envoie une alerte sur le téléphone de l'utilisateur, avec un serveur Python/Flask et une application React Native.",
    },
    icon: FaVideo,
    href: 'https://github.com/cedrick-tchakonte/Syst-me_detection_d_intrusion',
    category: { en: 'Security System', fr: 'Système de sécurité' },
  },
]
