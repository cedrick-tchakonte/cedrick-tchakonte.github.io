import { type I18n } from '@/i18n';

export type MobilityLocation = {
  city: string;
  country: string;
  image: string;
  description: I18n<string>;
  startDate: string | I18n<string>;
  endDate: string | I18n<string>;
  university: string;
  credit?: string;
};

export const mobilityData: MobilityLocation[] = [
    {
      city: 'Paris',
      country: 'France',
      image: '/images/paris.jpg',
      description: {
        en: 'Based in the Paris region since 2024 for my engineering studies at ENSTA Paris, and currently a Junior AI Engineer at RagLogic (Station F).',
        fr: "Basé en région parisienne depuis 2024 pour mes études d'ingénieur à l'ENSTA Paris, et actuellement ingénieur IA junior chez RagLogic (Station F).",
      },
      startDate: '2024',
      endDate: { en: 'Present', fr: 'Présent' },
      university: 'ENSTA Paris',
    },
    {
      city: 'Palaiseau',
      country: 'France',
      image: '/images/palaiseau.jpg',
      description: {
        en: "Final year at ENSTA Paris on a specialization track in AI, alongside IP Paris's Master's in Data Science and AI, on the Plateau de Saclay campus.",
        fr: "Dernière année à l'ENSTA Paris en parcours de spécialisation en IA, en parallèle du master Data Science et Intelligence Artificielle de l'IP Paris, sur le campus du Plateau de Saclay.",
      },
      startDate: '2024',
      endDate: { en: 'Present', fr: 'Présent' },
      university: 'ENSTA Paris (IP Paris)',
      credit: 'Photo: RutoSu / Wikimedia, CC BY-SA 4.0',
    },
    {
      city: 'Poissy',
      country: 'France',
      image: '/images/poissy.jpg',
      description: {
        en: 'Machine Learning Research internship at the Stellantis GrEEn Campus: built a multimodal dataset and 3D CNN/GNN surrogate models to predict pedestrian-protection metrics.',
        fr: "Stage de recherche en machine learning au GrEEn Campus de Stellantis : constitution d'un jeu de données multimodal et de modèles de substitution 3D CNN/GNN pour prédire les critères de protection des piétons.",
      },
      startDate: '2026',
      endDate: '2026',
      university: 'Stellantis GrEEn Campus',
      credit: 'Photo: Akiry / Wikimedia, CC BY-SA 3.0',
    },
    {
      city: 'Grenoble',
      country: 'France',
      image: '/images/grenoble.jpg',
      description: {
        en: 'Completed a Research and Development Internship at STMicroelectronics, working on Digital Twin simulations and AI-assisted workflows for documentation analysis.',
        fr: "J'ai effectué un stage de recherche et développement chez STMicroelectronics, en travaillant sur des simulations de jumeaux numériques et des workflows assistés par l'IA pour l'analyse de documentation.",
      },
      startDate: '2025',
      endDate: '2025',
      university: 'STMicroelectronics',
    },
    {
      city: 'Yamoussoukro',
      country: 'Côte d\'Ivoire',
      image: '/images/yamoussoukro.jpg',
      description: {
        en: "Spent 1 week there for oral entrance exams to the Ecole Polytechnique (l'X), experiencing the competitive engineering school selection process.",
        fr: "J'y ai passé une semaine pour les oraux du concours d'entrée à l'École Polytechnique (l'X), découvrant le processus de sélection des grandes écoles d'ingénieurs.",
      },
      startDate: '2023',
      endDate: '2023',
      university: 'Institut National Polytechnique Félix Houphouët-Boigny',
    },
  ];
