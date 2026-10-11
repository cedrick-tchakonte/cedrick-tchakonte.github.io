import type { IconType } from 'react-icons'
import {
  FaPython,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiPycharm,
  SiVisualstudio,
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
  SiMongodb,
  SiPostgresql,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiAnaconda,
  SiVisualstudiocode,
  SiEclipseide,
  SiIntellijidea,
  SiR,
  SiNeo4J,
  SiLatex,
  SiC,
} from 'react-icons/si'
import {
  FaTerminal,
  FaCode,
  FaRobot,
  FaDatabase,
  FaDrawPolygon,
  FaShapes,
  FaSearch,
  FaProjectDiagram,
  FaSitemap,
  FaLanguage,
  FaObjectGroup,
  FaCommentDots,
  FaKeyboard,
  FaPenFancy,
  FaSlidersH,
  FaExpand,
  FaEye,
  FaFilter,
  FaCube,
  FaLayerGroup,
  FaVial,
  FaExchangeAlt,
  FaBalanceScale,
  FaFlask,
  FaChartLine,
  FaSquareRootAlt,
} from 'react-icons/fa'
import { TbChartDots3 } from 'react-icons/tb'
import type { I18n } from '@/i18n'

export interface Skill {
  name: string | I18n<string>
  icon: IconType
}

export interface SkillCategory {
  category: I18n<string>
  items: Skill[]
}

export const skills: SkillCategory[] = [
  {
    category: { en: 'Programming Languages', fr: 'Langages de programmation' },
    items: [
      { name: 'Python', icon: FaPython },
      { name: 'R', icon: SiR },
      { name: 'MATLAB', icon: FaCode },
      { name: 'C', icon: SiC },
      { name: 'C++', icon: SiCplusplus },
      { name: 'Java', icon: FaJava },
      { name: 'Bash', icon: FaTerminal },
      { name: 'SQL', icon: FaDatabase },
      {
        name: { en: 'Object-Oriented Programming', fr: 'Programmation orientée objet' },
        icon: FaObjectGroup,
      },
    ],
  },
  {
    category: { en: 'AI and Machine Learning', fr: 'IA et machine learning' },
    items: [
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'Jupyter', icon: SiJupyter },
      { name: 'Keras', icon: SiKeras },
      { name: 'Scikit-Learn', icon: SiScikitlearn },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'Hugging Face', icon: FaRobot },
      { name: 'Transformers', icon: FaRobot },
      { name: 'LangChain', icon: FaCode },
    ],
  },
  {
    category: { en: 'LLM & NLP', fr: 'LLM et NLP' },
    items: [
      { name: 'LLM', icon: FaRobot },
      { name: 'Prompt Engineering', icon: FaCommentDots },
      { name: 'RAG', icon: FaSearch },
      { name: 'Graph RAG', icon: FaProjectDiagram },
      { name: { en: 'Knowledge Graphs', fr: 'Graphes de connaissances' }, icon: FaSitemap },
      { name: { en: 'Vector DBs', fr: 'Bases vectorielles' }, icon: FaDatabase },
      { name: { en: 'Information Retrieval', fr: "Recherche d'information" }, icon: FaSearch },
      { name: { en: 'Language Modeling', fr: 'Modélisation du langage' }, icon: FaKeyboard },
      { name: { en: 'Text Generation', fr: 'Génération de texte' }, icon: FaPenFancy },
      { name: { en: 'LoRA/QLoRA Fine-Tuning', fr: 'Fine-tuning LoRA/QLoRA' }, icon: FaSlidersH },
    ],
  },
  {
    category: { en: 'Computer Vision & 3D', fr: 'Vision par ordinateur et 3D' },
    items: [
      { name: { en: 'Point Clouds', fr: 'Nuages de points' }, icon: TbChartDots3 },
      { name: { en: 'Meshes', fr: 'Maillages' }, icon: FaDrawPolygon },
      { name: { en: '3D CNN/GNN', fr: '3D CNN/GNN' }, icon: FaCube },
      { name: 'Segmentation', icon: FaShapes },
      { name: { en: 'Super-Resolution', fr: 'Super-résolution' }, icon: FaExpand },
      { name: { en: 'Feature Detection', fr: 'Détection de caractéristiques' }, icon: FaEye },
      { name: { en: 'Image Filtering', fr: "Filtrage d'images" }, icon: FaFilter },
      { name: { en: 'Multimodal Data', fr: 'Données multimodales' }, icon: FaLayerGroup },
    ],
  },
  {
    category: { en: 'Modeling & Evaluation', fr: 'Modélisation et évaluation' },
    items: [
      { name: { en: 'Surrogate Models', fr: 'Modèles de substitution' }, icon: FaVial },
      { name: 'Transfer Learning', icon: FaExchangeAlt },
      {
        name: { en: 'Model Evaluation & Benchmarking', fr: 'Évaluation et comparaison de modèles' },
        icon: FaBalanceScale,
      },
      { name: { en: 'Data Processing', fr: 'Traitement de données' }, icon: FaFilter },
      { name: { en: 'Experimentation', fr: 'Expérimentation' }, icon: FaFlask },
    ],
  },
  {
    category: { en: 'Mathematics & Statistics', fr: 'Mathématiques et statistiques' },
    items: [
      { name: { en: 'Statistical Learning', fr: 'Apprentissage statistique' }, icon: FaChartLine },
      { name: { en: 'Kernel Methods', fr: 'Méthodes à noyaux' }, icon: FaSquareRootAlt },
      { name: { en: 'Convex Optimization', fr: 'Optimisation convexe' }, icon: FaSquareRootAlt },
    ],
  },
  {
    category: { en: 'Databases', fr: 'Bases de données' },
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Neo4j', icon: SiNeo4J },
    ],
  },
  {
    category: { en: 'Development Tools', fr: 'Outils de développement' },
    items: [
      { name: 'Docker', icon: FaDocker },
      { name: 'Git', icon: FaGitAlt },
      { name: 'Linux', icon: FaLinux },
      { name: 'LaTeX', icon: SiLatex },
      { name: 'Anaconda', icon: SiAnaconda },
      { name: 'VS Code', icon: SiVisualstudiocode },
      { name: 'Eclipse', icon: SiEclipseide },
      { name: 'IntelliJ IDEA', icon: SiIntellijidea },
      { name: 'Visual Studio', icon: SiVisualstudio },
      { name: 'Pycharm', icon: SiPycharm },
    ],
  },
  {
    category: { en: 'Web Development', fr: 'Développement web' },
    items: [
      { name: 'Node.JS', icon: FaNodeJs },
      { name: 'React', icon: FaReact },
      { name: 'Next.JS', icon: SiNextdotjs },
    ],
  },
  {
    category: { en: 'Languages', fr: 'Langues' },
    items: [
      { name: { en: 'French (Native)', fr: 'Français (langue maternelle)' }, icon: FaLanguage },
      { name: { en: 'English (C1)', fr: 'Anglais (C1)' }, icon: FaLanguage },
      { name: { en: 'German (A2)', fr: 'Allemand (A2)' }, icon: FaLanguage },
    ],
  },
]
