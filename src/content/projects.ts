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
