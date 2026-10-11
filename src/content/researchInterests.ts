import type { IconType } from 'react-icons'
import { FaVial, FaCube, FaLayerGroup, FaRobot, FaCompress, FaShieldAlt } from 'react-icons/fa'
import type { I18n } from '@/i18n'

export interface ResearchInterest {
  title: I18n<string>
  description: I18n<string>
  // Where the interest comes from in my work (experience, project or course).
  basis: I18n<string>
  icon: IconType
}

export const researchInterests: ResearchInterest[] = [
  {
    title: { en: 'Learned Simulation', fr: 'Simulation apprise' },
    description: {
      en: 'Models that replace costly physical simulations, and their evaluation.',
      fr: 'Modèles qui remplacent des simulations physiques coûteuses, et leur évaluation.',
    },
    basis: {
      en: 'Surrogate models at Stellantis',
      fr: 'Modèles de substitution chez Stellantis',
    },
    icon: FaVial,
  },
  {
    title: {
      en: '3D Deep Learning and Computer Vision',
      fr: 'Deep learning 3D et vision par ordinateur',
    },
    description: {
      en: 'Learning from 3D scans, meshes and images.',
      fr: 'Apprendre à partir de scans 3D, maillages et images.',
    },
    basis: {
      en: 'Stellantis, Point Clouds and 3D Modeling (MVA)',
      fr: 'Stellantis, Nuages de points et modélisation 3D (MVA)',
    },
    icon: FaCube,
  },
  {
    title: { en: 'Multimodal Learning and VLMs', fr: 'Apprentissage multimodal et VLM' },
    description: {
      en: 'Learning jointly from images, 3D data and text.',
      fr: "Apprendre à partir d'images, de données 3D et de texte.",
    },
    basis: {
      en: 'Multimodal dataset at Stellantis',
      fr: 'Jeu de données multimodal chez Stellantis',
    },
    icon: FaLayerGroup,
  },
  {
    title: {
      en: 'Large Language Models for Specialized Domains',
      fr: 'Grands modèles de langage spécialisés',
    },
    description: {
      en: 'RAG and efficient fine-tuning.',
      fr: 'RAG et fine-tuning efficace.',
    },
    basis: {
      en: 'RagLogic, STMicroelectronics, Language Modeling course',
      fr: 'RagLogic, STMicroelectronics, cours Language Modeling',
    },
    icon: FaRobot,
  },
  {
    title: {
      en: 'Efficient Deep Learning and Model Compression',
      fr: 'Deep learning efficace et compression des modèles',
    },
    description: {
      en: 'Smaller and faster neural networks at inference: quantization, parameter-efficient adaptation (LoRA/QLoRA), lightweight architectures (ShuffleNet, EfficientNet), and what compression costs in accuracy compared with the original model.',
      fr: "Des réseaux de neurones plus légers et plus rapides à l'inférence : quantification, adaptation légère (LoRA/QLoRA), architectures compactes (ShuffleNet, EfficientNet), et ce que la compression coûte en précision face au modèle d'origine.",
    },
    basis: {
      en: 'LoRA/QLoRA fine-tuning, lightweight models at Stellantis',
      fr: 'Fine-tuning LoRA/QLoRA, modèles légers chez Stellantis',
    },
    icon: FaCompress,
  },
  {
    title: { en: 'Robustness of Vision Models', fr: 'Robustesse des modèles de vision' },
    description: {
      en: 'How vision models react to small, targeted input changes.',
      fr: 'Comment les modèles de vision réagissent à de petites modifications ciblées.',
    },
    basis: {
      en: 'Adversarial attacks on segmentation models',
      fr: 'Attaques adverses sur modèles de segmentation',
    },
    icon: FaShieldAlt,
  },
]
