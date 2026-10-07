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
    category: { en: '3D, Vision & NLP', fr: '3D, vision & NLP' },
    items: [
      { name: { en: 'Point Clouds', fr: 'Nuages de points' }, icon: TbChartDots3 },
      { name: { en: 'Meshes', fr: 'Maillages' }, icon: FaDrawPolygon },
      { name: 'Segmentation', icon: FaShapes },
      { name: 'RAG', icon: FaSearch },
      { name: 'Graph RAG', icon: FaProjectDiagram },
      { name: { en: 'Knowledge Graphs', fr: 'Graphes de connaissances' }, icon: FaSitemap },
      { name: { en: 'Vector DBs', fr: 'Bases vectorielles' }, icon: FaDatabase },
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
