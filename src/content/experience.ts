import type { StaticImageData } from 'next/image'
import type { I18n } from '@/i18n'
import stellantisLogo from '@/images/logos/stellantis.svg'
import taepLogo from '@/images/logos/taep.png'
import stMicroLogo from '@/images/logos/stmicroelectronics.png'

export interface ExperienceItem {
  title: I18n<string>
  company: I18n<string>
  date: I18n<string>
  description: I18n<string[]>
  location: I18n<string>
  link: { url: string; label: string }
  logo: StaticImageData
}

export const experiences: ExperienceItem[] = [
  {
    title: {
      en: 'Machine Learning Research Intern',
      fr: 'Stagiaire de recherche en Machine Learning',
    },
    company: { en: 'Stellantis', fr: 'Stellantis' },
    date: { en: 'Feb 2026 - Aug 2026', fr: 'Févr. 2026 - Août 2026' },
    description: {
      en: [
        'Built a multimodal dataset from 3D scans, meshes and impact-test data (Euro/China/Japan NCAP).',
        'Designed 3D CNN/GNN surrogate models with transfer learning (ResNet, EfficientNet) to predict pedestrian-protection metrics, benchmarked against finite-element simulations.',
      ],
      fr: [
        "Constitution d'un jeu de données multimodal (scans 3D, maillages, essais de choc Euro/China/Japan NCAP).",
        'Conception de modèles de substitution 3D CNN/GNN avec transfer learning (ResNet, EfficientNet) pour prédire les critères de protection des piétons, comparés aux simulations par éléments finis.',
      ],
    },
    location: { en: 'GrEEn Campus Poissy, France', fr: 'GrEEn Campus Poissy, France' },
    link: { url: 'https://www.stellantis.com/', label: 'Stellantis' },
    logo: stellantisLogo,
  },
  {
    title: { en: 'Junior AI Engineer', fr: 'Ingénieur IA junior' },
    company: {
      en: 'RagLogic (with TAEP, Junior Enterprise of ENSTA)',
      fr: "RagLogic (avec TAEP, Junior-Entreprise de l'ENSTA)",
    },
    date: { en: 'Nov 2025 - Present', fr: 'Nov. 2025 - Présent' },
    description: {
      en: [
        'Co-developed an AI assistant for financial regulatory analysis, focusing on the AI layer: a Graph RAG pipeline building knowledge graphs from regulatory corpora via LLM-based entity and relation extraction.',
        'Built LLM/NLP decision-support systems for regulatory compliance; fine-tuned small language models with LoRA/QLoRA to cut compute cost.',
      ],
      fr: [
        "Co-développement d'un assistant IA d'analyse réglementaire financière, centré sur la couche IA : pipeline Graph RAG bâtissant des graphes de connaissances depuis des corpus réglementaires (extraction d'entités et de relations par LLM).",
        "Développement de systèmes d'aide à la décision LLM/NLP pour la conformité réglementaire ; fine-tuning de petits modèles de langage avec LoRA/QLoRA pour réduire le coût de calcul.",
      ],
    },
    location: { en: 'Station F, Paris, France', fr: 'Station F, Paris, France' },
    link: { url: 'https://www.taep.fr/', label: 'TAEP' },
    logo: taepLogo,
  },
  {
    title: {
      en: 'R&D Intern, AI for Embedded Systems',
      fr: 'Stagiaire R&D, IA pour systèmes embarqués',
    },
    company: { en: 'STMicroelectronics', fr: 'STMicroelectronics' },
    date: { en: 'May 2025 - Aug 2025', fr: 'Mai 2025 - Août 2025' },
    description: {
      en: [
        'Automated C++ Digital-Twin generation from SoC documentation, a task where current LLMs struggle with hardware code (Verilog/VHDL): explored several approaches (RAG with vector databases, LoRA/QLoRA fine-tuning); solution integrated across ST divisions (automotive, RF, MCUs).',
      ],
      fr: [
        'Génération automatique de modèles C++ de jumeaux numériques à partir de la documentation SoC, une tâche où les LLM actuels butent sur le code matériel (Verilog/VHDL) : exploration de plusieurs approches (RAG avec bases vectorielles, fine-tuning LoRA/QLoRA) ; solution intégrée dans plusieurs divisions ST (automobile, RF, microcontrôleurs).',
      ],
    },
    location: { en: 'Grenoble, France', fr: 'Grenoble, France' },
    link: { url: 'https://www.st.com/', label: 'STMicroelectronics' },
    logo: stMicroLogo,
  },
]
