import Head from 'next/head'
import type { IconType } from 'react-icons'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'
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

interface Skill {
  name: string
  icon: IconType
}

interface SkillCategory {
  category: string
  items: Skill[]
}

const skills: SkillCategory[] = [
  {
    category: 'Programming Languages',
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
    category: 'AI and Machine Learning',
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
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Neo4j', icon: SiNeo4J },
      { name: 'Scylla DB', icon: SiScylladb },
      { name: 'Cassandra', icon: SiApachecassandra },
    ],
  },
  {
    category: 'Development Tools',
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
    category: 'Cloud Platforms',
    items: [
      { name: 'AWS', icon: FaAws },
      { name: 'Azure', icon: SiAzuredevops },
      { name: 'Google-Cloud', icon: SiGooglecloud },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { name: 'Node.JS', icon: FaNodeJs },
      { name: 'React', icon: FaReact },
      { name: 'Next.JS', icon: SiNextdotjs },
      { name: 'SpringBoot', icon: SiSpringboot },
      { name: 'Spring-Security', icon: SiSpringsecurity },
    ],
  },
]

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills - {siteMetadata.author}</title>
        <meta name="description" content={`Skills and expertise of ${siteMetadata.author}`} />
      </Head>
      <SimpleLayout title="Skills" intro="Here are the various skills and tools I have mastered in the field of computer science, with a focus on AI and robotics.">
        <div className="space-y-20">
          {skills.map((skillCategory) => (
            <section key={skillCategory.category}>
              <h2 className="text-lg font-semibold leading-8 text-accent-600 dark:text-accent-400">
                {skillCategory.category}
              </h2>
              <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 lg:grid-cols-6">
                {skillCategory.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-4 bg-white border shadow-sm dark:bg-primaryText-800 rounded-xl border-primaryText-200/50 dark:border-primaryText-700/50 transition-all duration-300 hover:shadow-md hover:border-accent-300 dark:hover:border-accent-600"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-lg bg-accent-500">
                      <skill.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div className="text-sm font-medium text-primaryText-900 dark:text-primaryText-100">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
