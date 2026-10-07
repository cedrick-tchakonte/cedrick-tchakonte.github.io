import { type StaticImageData } from 'next/image'
import type { IconType } from 'react-icons'
import { FaRocket, FaGraduationCap, FaFlask, FaSquareRootAlt } from 'react-icons/fa'
import { type I18n } from '@/i18n'
import amiLogo from '@/images/dreams/ami.png'
import metaLogo from '@/images/dreams/meta.png'
import deepmindLogo from '@/images/dreams/deepmind.png'
import openaiLogo from '@/images/dreams/openai.png'
import anthropicLogo from '@/images/dreams/anthropic.png'
import mistralLogo from '@/images/dreams/mistral.png'
import nvidiaLogo from '@/images/dreams/nvidia.png'
import milaLogo from '@/images/dreams/mila.png'
import huggingfaceLogo from '@/images/dreams/huggingface.png'
import xaiLogo from '@/images/dreams/xai.png'
import microsoftLogo from '@/images/dreams/microsoft.png'
import kyutaiLogo from '@/images/dreams/kyutai.png'

export interface DreamLab {
  name: string
  focus: I18n<string>
  description: I18n<string>
  href: string
  logo: StaticImageData
}

export const dreamLabs: DreamLab[] = [
  {
    name: 'AMI Labs',
    focus: { en: 'World Models (Paris)', fr: "Modèles du monde (Paris)" },
    description: {
      en: "Yann LeCun's Paris-based frontier lab building world models: AI that learns abstract representations of the real world to predict, plan and act safely and reliably.",
      fr: "Le laboratoire de pointe de Yann LeCun, basé à Paris, qui construit des modèles du monde : une IA capable d'apprendre des représentations abstraites du monde réel pour prédire, planifier et agir de façon sûre et fiable.",
    },
    href: 'https://amilabs.xyz/',
    logo: amiLogo,
  },
  {
    name: 'Google DeepMind',
    focus: { en: 'AGI & Scientific Discovery', fr: "IA générale et découverte scientifique" },
    description: {
      en: 'From AlphaFold to Gemini, DeepMind treats intelligence as a scientific frontier, blending deep and reinforcement learning to solve problems that matter.',
      fr: "D'AlphaFold à Gemini, DeepMind aborde l'intelligence comme une frontière scientifique, mêlant apprentissage profond et par renforcement pour résoudre des problèmes qui comptent.",
    },
    href: 'https://deepmind.google/',
    logo: deepmindLogo,
  },
  {
    name: 'Meta FAIR',
    focus: { en: 'Open Frontier Research', fr: "Recherche de pointe ouverte" },
    description: {
      en: "Meta's Fundamental AI Research lab advances open science in LLMs, computer vision and self-supervised learning: foundational work I want to contribute to.",
      fr: "Le laboratoire de recherche fondamentale en IA de Meta fait progresser la science ouverte autour des LLM, de la vision par ordinateur et de l'apprentissage auto-supervisé : des travaux fondamentaux auxquels je veux contribuer.",
    },
    href: 'https://ai.meta.com/research/',
    logo: metaLogo,
  },
  {
    name: 'OpenAI',
    focus: { en: 'Frontier General-Purpose AI', fr: "IA généraliste de pointe" },
    description: {
      en: 'Building frontier general-purpose AI systems and the tooling around them, while pushing the limits of what large models can reason about and create.',
      fr: "Construire des systèmes d'IA généralistes de pointe et les outils qui les entourent, tout en repoussant les limites de ce que les grands modèles peuvent raisonner et créer.",
    },
    href: 'https://openai.com/',
    logo: openaiLogo,
  },
  {
    name: 'Anthropic',
    focus: { en: 'AI Safety & Interpretability', fr: "Sûreté et interprétabilité de l'IA" },
    description: {
      en: 'An AI safety lab building reliable, interpretable and steerable systems (Claude). The blend of rigorous research and a real focus on safety deeply resonates with me.',
      fr: "Un laboratoire dédié à la sûreté de l'IA, qui construit des systèmes fiables, interprétables et contrôlables (Claude). Ce mélange de recherche rigoureuse et d'attention réelle portée à la sûreté me parle profondément.",
    },
    href: 'https://www.anthropic.com/',
    logo: anthropicLogo,
  },
  {
    name: 'Mistral AI',
    focus: { en: 'Efficient Open Models', fr: "Modèles ouverts et efficients" },
    description: {
      en: 'A European frontier lab building remarkably efficient open-weight language models, proving that cutting-edge AI can be both performant and accessible.',
      fr: "Un laboratoire européen de pointe qui développe des modèles de langage à poids ouverts remarquablement efficients, prouvant qu'une IA de pointe peut être à la fois performante et accessible.",
    },
    href: 'https://mistral.ai/',
    logo: mistralLogo,
  },
  {
    name: 'NVIDIA Research',
    focus: { en: 'AI & Accelerated Computing', fr: "IA et calcul accéléré" },
    description: {
      en: 'Where AI meets accelerated computing: GPUs, generative models, simulation and robotics. The hardware and software that power the entire field are invented here.',
      fr: "Là où l'IA rencontre le calcul accéléré : GPU, modèles génératifs, simulation et robotique. Le matériel et les logiciels qui font tourner tout le domaine sont inventés ici.",
    },
    href: 'https://www.nvidia.com/en-us/research/',
    logo: nvidiaLogo,
  },
  {
    name: 'Microsoft Research',
    focus: { en: 'AI & Fundamental Research', fr: "IA et recherche fondamentale" },
    description: {
      en: 'One of the largest industrial research organizations in the world, advancing AI, systems and theory, and turning research into technology used by billions of people.',
      fr: "L'une des plus grandes organisations de recherche industrielle au monde, qui fait progresser l'IA, les systèmes et la théorie, et transforme la recherche en technologies utilisées par des milliards de personnes.",
    },
    href: 'https://www.microsoft.com/en-us/research/',
    logo: microsoftLogo,
  },
  {
    name: 'Mila',
    focus: { en: 'Academic AI Research (Montreal)', fr: "Recherche académique en IA (Montréal)" },
    description: {
      en: "Founded by Yoshua Bengio, Mila is one of the world's leading academic AI institutes, a dream place to pursue a PhD at the deep-learning frontier.",
      fr: "Fondé par Yoshua Bengio, Mila est l'un des plus grands instituts de recherche académique en IA au monde, un lieu rêvé pour faire une thèse à la frontière de l'apprentissage profond.",
    },
    href: 'https://mila.quebec/en',
    logo: milaLogo,
  },
  {
    name: 'Hugging Face',
    focus: { en: 'Open-Source AI', fr: "IA open source" },
    description: {
      en: 'The home of open-source machine learning, from the Transformers library to a hub of shared models and datasets. French-founded and beloved by the whole ML community.',
      fr: "La maison de l'apprentissage automatique open source, de la bibliothèque Transformers à une plateforme de modèles et de jeux de données partagés. Fondée par des Français et adorée par toute la communauté du ML.",
    },
    href: 'https://huggingface.co/',
    logo: huggingfaceLogo,
  },
  {
    name: 'xAI',
    focus: { en: 'Frontier AI', fr: "IA de pointe" },
    description: {
      en: 'A frontier AI company building advanced general-purpose models (Grok) with massive compute, racing at the leading edge of the field.',
      fr: "Une entreprise d'IA de pointe qui construit des modèles généralistes avancés (Grok) avec une puissance de calcul colossale, à la course en tête du domaine.",
    },
    href: 'https://x.ai/',
    logo: xaiLogo,
  },
  {
    name: 'Kyutai',
    focus: { en: 'Open-Science AI (Paris)', fr: "IA en science ouverte (Paris)" },
    description: {
      en: 'A Paris-based open-science AI lab releasing models and research in the open, including real-time speech systems, pushing European AI at the cutting edge.',
      fr: "Un laboratoire d'IA parisien en science ouverte qui publie ses modèles et ses recherches en libre accès, y compris des systèmes vocaux en temps réel, et pousse l'IA européenne à la pointe.",
    },
    href: 'https://kyutai.org/',
    logo: kyutaiLogo,
  },
]

export const vision: I18n<string>[] = [
  {
    en: "I love maths, and AI is where maths starts to think. I get pulled into papers late at night, then spend the next morning rebuilding them to see if they really work.",
    fr: "J'aime les maths, et l'IA est l'endroit où les maths se mettent à penser. Je me plonge dans des articles tard le soir, puis je passe la matinée suivante à les reconstruire pour voir s'ils fonctionnent vraiment.",
  },
  {
    en: "I don't just want to use these models, I want to understand them and help build the next ones: genuine research, with people who push me, on problems that matter.",
    fr: "Je ne veux pas seulement utiliser ces modèles, je veux les comprendre et aider à construire les prochains : de la vraie recherche, avec des personnes qui me tirent vers le haut, sur des problèmes qui comptent.",
  },
]

export interface Goal {
  icon: IconType
  title: I18n<string>
  description: I18n<string>
}

export const goals: Goal[] = [
  {
    icon: FaRocket,
    title: { en: 'End-of-studies internship (PFE)', fr: "Stage de fin d'études (PFE)" },
    description: {
      en: 'Join a world-class AI lab, in France or abroad, for my final-year internship and work shoulder to shoulder with researchers building the next generation of models.',
      fr: "Rejoindre un laboratoire d'IA de classe mondiale, en France ou à l'étranger, pour mon stage de fin d'études et travailler côte à côte avec des chercheurs qui construisent la prochaine génération de modèles.",
    },
  },
  {
    icon: FaGraduationCap,
    title: { en: 'Pursue a PhD', fr: "Poursuivre en thèse" },
    description: {
      en: 'Continue into a doctorate to go deep on a hard research problem at the frontier of artificial intelligence.',
      fr: "Continuer en doctorat pour approfondir un problème de recherche difficile à la frontière de l'intelligence artificielle.",
    },
  },
  {
    icon: FaFlask,
    title: { en: 'Work on cutting-edge AI', fr: "Travailler sur l'IA de pointe" },
    description: {
      en: 'Contribute to foundation models, multimodal learning, reinforcement learning and AI for science, where the most exciting problems live.',
      fr: "Contribuer aux modèles de fondation, à l'apprentissage multimodal, à l'apprentissage par renforcement et à l'IA pour la science, là où vivent les problèmes les plus passionnants.",
    },
  },
  {
    icon: FaSquareRootAlt,
    title: { en: 'Bridge maths and technology', fr: "Faire le pont entre maths et technologie" },
    description: {
      en: 'Bring rigorous mathematics together with engineering to build systems that are not only powerful, but principled and genuinely useful.',
      fr: "Réunir des mathématiques rigoureuses et l'ingénierie pour construire des systèmes qui ne sont pas seulement puissants, mais aussi rigoureux et réellement utiles.",
    },
  },
]
