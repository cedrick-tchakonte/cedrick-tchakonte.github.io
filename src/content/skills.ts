import type { IconType } from 'react-icons'
import {
  FaPython,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaAws,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import {
  SiSpringboot,
  SiNextdotjs,
  SiApachecassandra,
  SiScylladb,
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
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiAnaconda,
  SiVisualstudiocode,
  SiEclipseide,
  SiIntellijidea,
  SiGooglecloud,
  SiSpringsecurity,
  SiR,
  SiNeo4J,
  SiLatex,
} from 'react-icons/si'
import { SiAzuredevops } from 'react-icons/si'
import { FaTerminal, FaCode, FaRobot } from 'react-icons/fa'
import type { I18n } from '@/i18n'

export interface Skill {
  name: string
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
      { name: 'C++', icon: SiCplusplus },
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript', icon: FaJs },
      { name: 'R', icon: SiR },
      { name: 'Bash', icon: FaTerminal },
      { name: 'MATLAB', icon: FaCode },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
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
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Pandas', icon: SiPandas },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'Hugging Face', icon: FaRobot },
      { name: 'Transformers', icon: FaRobot },
      { name: 'LangChain', icon: FaCode },
    ],
  },
  {
    category: { en: 'Databases', fr: 'Bases de données' },
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Neo4j', icon: SiNeo4J },
      { name: 'Scylla DB', icon: SiScylladb },
      { name: 'Cassandra', icon: SiApachecassandra },
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
    category: { en: 'Cloud Platforms', fr: 'Plateformes cloud' },
    items: [
      { name: 'AWS', icon: FaAws },
      { name: 'Azure', icon: SiAzuredevops },
      { name: 'Google-Cloud', icon: SiGooglecloud },
    ],
  },
  {
    category: { en: 'Web Development', fr: 'Développement web' },
    items: [
      { name: 'Node.JS', icon: FaNodeJs },
      { name: 'React', icon: FaReact },
      { name: 'Next.JS', icon: SiNextdotjs },
      { name: 'SpringBoot', icon: SiSpringboot },
      { name: 'Spring-Security', icon: SiSpringsecurity },
    ],
  },
]
