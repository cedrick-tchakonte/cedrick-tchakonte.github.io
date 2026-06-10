import Head from 'next/head'
import Link from 'next/link'
import Image, { type StaticImageData } from 'next/image'
import type { IconType } from 'react-icons'
import { FaRocket, FaGraduationCap, FaFlask, FaSquareRootAlt } from 'react-icons/fa'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { SectionHeading } from '@/components/SectionHeading'
import siteMetadata from '@/data/siteMetadata'
import metaLogo from '@/images/dreams/meta.png'
import deepmindLogo from '@/images/dreams/deepmind.png'
import openaiLogo from '@/images/dreams/openai.png'
import anthropicLogo from '@/images/dreams/anthropic.png'
import mistralLogo from '@/images/dreams/mistral.png'
import nvidiaLogo from '@/images/dreams/nvidia.png'

interface DreamLab {
  name: string
  focus: string
  description: string
  href: string
  logo: StaticImageData
}

const dreamLabs: DreamLab[] = [
  {
    name: 'Google DeepMind',
    focus: 'AGI & Scientific Discovery',
    description:
      'From AlphaFold to Gemini, DeepMind treats intelligence as a scientific frontier, blending deep learning and reinforcement learning to solve problems that matter for science and society.',
    href: 'https://deepmind.google/',
    logo: deepmindLogo,
  },
  {
    name: 'Meta FAIR',
    focus: 'Open Frontier Research',
    description:
      "Meta's Fundamental AI Research lab advances open science in large language models, computer vision and self-supervised learning, the kind of foundational work I want to contribute to.",
    href: 'https://ai.meta.com/research/',
    logo: metaLogo,
  },
  {
    name: 'OpenAI',
    focus: 'Frontier General-Purpose AI',
    description:
      'Building frontier general-purpose AI systems and the tooling around them, while pushing the limits of what large models can reason about and create.',
    href: 'https://openai.com/',
    logo: openaiLogo,
  },
  {
    name: 'Anthropic',
    focus: 'AI Safety & Interpretability',
    description:
      'An AI safety lab building reliable, interpretable and steerable systems (Claude). The blend of rigorous research and a real focus on safety deeply resonates with me.',
    href: 'https://www.anthropic.com/',
    logo: anthropicLogo,
  },
  {
    name: 'Mistral AI',
    focus: 'Efficient Open Models',
    description:
      'A European frontier lab building remarkably efficient open-weight language models, proving that cutting-edge AI can be both performant and accessible.',
    href: 'https://mistral.ai/',
    logo: mistralLogo,
  },
  {
    name: 'NVIDIA Research',
    focus: 'AI & Accelerated Computing',
    description:
      'Where AI meets accelerated computing: GPUs, generative models, simulation and robotics. The hardware and software that power the entire field are invented here.',
    href: 'https://www.nvidia.com/en-us/research/',
    logo: nvidiaLogo,
  },
]

const vision: string[] = [
  "I'm driven by the frontier of artificial intelligence, the place where rigorous mathematics meets engineering to build systems that learn, reason and create. I'm fascinated by foundation models, multimodal learning, reinforcement learning and AI for science, and I want to spend my career where these ideas are invented, not just applied.",
  'Maths and technology have always been my playground. My dream is to bring that curiosity to a world-class research lab and help push the boundaries of what AI can do.',
]

interface Goal {
  icon: IconType
  title: string
  description: string
}

const goals: Goal[] = [
  {
    icon: FaRocket,
    title: 'End-of-studies internship (PFE)',
    description:
      'Join a world-class AI lab for my final-year internship and work shoulder to shoulder with researchers building the next generation of models.',
  },
  {
    icon: FaGraduationCap,
    title: 'Pursue a PhD',
    description:
      'Continue into a doctorate to go deep on a hard research problem at the frontier of artificial intelligence.',
  },
  {
    icon: FaFlask,
    title: 'Work on cutting-edge AI',
    description:
      'Contribute to foundation models, multimodal learning, reinforcement learning and AI for science, where the most exciting problems live.',
  },
  {
    icon: FaSquareRootAlt,
    title: 'Bridge maths and technology',
    description:
      'Bring rigorous mathematics together with engineering to build systems that are not only powerful, but principled and genuinely useful.',
  },
]

export default function Dreams() {
  return (
    <>
      <Head>
        <title>My Dreams - {siteMetadata.author}</title>
        <meta
          name="description"
          content={`The AI labs, technologies and goals ${siteMetadata.author} is aiming for.`}
        />
      </Head>
      <SimpleLayout
        title="My Dreams"
        intro="The labs I dream of joining, the technologies that fascinate me, and the goals I'm working towards."
      >
        {/* Vision / passion */}
        <div className="max-w-3xl p-8 mx-auto border sm:p-10 rounded-2xl bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 border-accent-200 dark:border-accent-700/50">
          {vision.map((paragraph, index) => (
            <p
              key={index}
              className={`text-lg leading-relaxed text-primaryText-700 dark:text-primaryText-300 ${index > 0 ? 'mt-4' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Dream labs */}
        <SectionHeading
          align="center"
          eyebrow="Where I want to be"
          title="Dream Labs & Companies"
          subtitle="The research labs and companies at the cutting edge of AI that I'd love to be part of."
          className="mt-20 mb-12"
        />
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {dreamLabs.map((lab) => (
            <Card as="li" key={lab.name}>
              <div className="relative z-10 flex items-center justify-center w-16 h-16 p-3 bg-white shadow-md rounded-2xl shadow-primaryText-800/5 ring-1 ring-primaryText-900/5 dark:bg-white dark:ring-0">
                <Image
                  src={lab.logo}
                  alt={`${lab.name} logo`}
                  className="object-contain w-full h-full"
                  unoptimized
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="mt-6 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                <Card.Link href={lab.href}>{lab.name}</Card.Link>
              </h3>
              <Card.Eyebrow decorate>{lab.focus}</Card.Eyebrow>
              <Card.Description>{lab.description}</Card.Description>
            </Card>
          ))}
        </ul>

        {/* Next goals */}
        <SectionHeading
          align="center"
          eyebrow="Where I'm heading"
          title="My Next Goals"
          subtitle="The path I'm working towards over the coming years."
          className="mt-20 mb-12"
        />
        <ol className="max-w-3xl mx-auto space-y-6">
          {goals.map((goal) => (
            <li
              key={goal.title}
              className="flex gap-5 p-6 bg-white border shadow-sm rounded-2xl dark:bg-primaryText-800 border-primaryText-200/50 dark:border-primaryText-700/50"
            >
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white shadow-md rounded-xl bg-gradient-to-br from-accent-500 to-accent-600">
                <goal.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primaryText-900 dark:text-primaryText-100">
                  {goal.title}
                </h3>
                <p className="mt-1 text-base leading-relaxed text-primaryText-600 dark:text-primaryText-400">
                  {goal.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Call to action */}
        <div className="max-w-3xl p-8 mx-auto mt-20 text-center text-white shadow-lg sm:p-12 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Think you can help me get there?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
            Whether you&apos;re hiring for one of these labs, building something at the frontier of
            AI, or you simply believe you can help me reach these goals, feel free to reach out. If
            you can help me get there, come join me on the journey. I&apos;d love to connect.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 mt-8 text-base font-semibold transition rounded-md shadow-sm bg-white text-accent-600 hover:bg-accent-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent-600"
          >
            Let&apos;s talk
          </Link>
        </div>
      </SimpleLayout>
    </>
  )
}
