import { type I18n } from '@/i18n';

export type MobilityLocation = {
  city: string;
  country: string;
  image: string;
  description: I18n<string>;
  startDate: string;
  endDate: string;
  university: string;
  credit?: string;
};

export const mobilityData: MobilityLocation[] = [
    {
      city: 'Paris',
      country: 'France',
      image: '/images/paris.jpg',
      description: {
        en: 'Studied at ENSTA Paris, specializing in AI and Cyber-Physical Systems, and now based in the Paris region for my gap year, with AI roles at TAEP, Objectware and Stellantis.',
        fr: "J'ai étudié à ENSTA Paris, en me spécialisant en IA et systèmes cyber-physiques, et je suis désormais basé en région parisienne pour mon année de césure, avec des missions en IA chez TAEP, Objectware et Stellantis.",
      },
      startDate: '2024',
      endDate: 'Present',
      university: 'ENSTA Paris',
    },
    {
      city: 'Palaiseau',
      country: 'France',
      image: '/images/palaiseau.jpg',
      description: {
        en: 'Studying Artificial Intelligence and Cyber-Physical Systems at ENSTA Paris, on the Plateau de Saclay campus of the Institut Polytechnique de Paris.',
        fr: "J'étudie l'intelligence artificielle et les systèmes cyber-physiques à ENSTA Paris, sur le campus du Plateau de Saclay de l'Institut Polytechnique de Paris.",
      },
      startDate: '2024',
      endDate: 'Present',
      university: 'ENSTA Paris (IP Paris)',
      credit: 'Photo: RutoSu / Wikimedia, CC BY-SA 4.0',
    },
    {
      city: 'Poissy',
      country: 'France',
      image: '/images/poissy.jpg',
      description: {
        en: 'Machine Learning Research Intern at the Stellantis grEEn-Campus, building multimodal datasets and 3D CNN/GNN surrogate models to predict pedestrian protection metrics for vehicle safety.',
        fr: "Stagiaire chercheur en apprentissage automatique au grEEn-Campus de Stellantis, où je construis des jeux de données multimodaux et des modèles substituts CNN/GNN 3D pour prédire les métriques de protection des piétons liées à la sécurité des véhicules.",
      },
      startDate: '2026',
      endDate: 'Present',
      university: 'Stellantis grEEn-Campus',
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
    {
      city: 'Yaoundé',
      country: 'Cameroon',
      image: '/images/yaounde.png',
      description: {
        en: 'Studied Computer Science Engineering at Ecole Nationale Supérieure Polytechnique de Yaoundé, completing intensive preparatory program in mathematics and physical sciences.',
        fr: "J'ai étudié le génie informatique à l'École Nationale Supérieure Polytechnique de Yaoundé, en suivant un programme préparatoire intensif en mathématiques et sciences physiques.",
      },
      startDate: '2020',
      endDate: '2024',
      university: 'ENSPY - University of Yaoundé I',
    },
    {
      city: 'Douala',
      country: 'Cameroon',
      image: '/images/douala.png',
      description: {
        en: "My birthplace and hometown where I spent most of my childhood and completed my secondary studies, obtaining my Baccalaureate diploma with honors before continuing my studies in Yaoundé.",
        fr: "Ma ville natale, où j'ai passé la majeure partie de mon enfance et terminé mes études secondaires, obtenant mon baccalauréat avec mention avant de poursuivre mes études à Yaoundé.",
      },
      startDate: 'Birth',
      endDate: '2020',
      university: 'Lycée Bilingue de Nylon Ndogpassi',
    },
  ];
