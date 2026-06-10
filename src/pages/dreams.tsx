import Head from 'next/head'
import Link from 'next/link'
import Image, { type StaticImageData } from 'next/image'
import type { IconType } from 'react-icons'
import { FaRocket, FaGraduationCap, FaFlask, FaSquareRootAlt, FaQuoteLeft } from 'react-icons/fa'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { SectionHeading } from '@/components/SectionHeading'
import siteMetadata from '@/data/siteMetadata'
import avatarImage from '@/images/avatar.jpg'
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

interface DreamLab {
  name: string
  focus: string
  description: string
  href: string
  logo: StaticImageData
}

const dreamLabs: DreamLab[] = [
  {
    name: 'AMI Labs',
    focus: 'World Models (Paris)',
    description:
      "Yann LeCun's Paris-based frontier lab building world models: AI that learns abstract representations of the real world to predict, plan and act reliably. Advanced Machine Intelligence with safety and real-world impact at its core.",
    href: 'https://amilabs.xyz/',
    logo: amiLogo,
  },
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
  {
    name: 'Microsoft Research',
    focus: 'AI & Fundamental Research',
    description:
      'One of the largest industrial research organizations in the world, advancing AI, systems and theory, and turning research into technology used by billions of people.',
    href: 'https://www.microsoft.com/en-us/research/',
    logo: microsoftLogo,
  },
  {
    name: 'Mila',
    focus: 'Academic AI Research (Montreal)',
    description:
      "Founded by Yoshua Bengio, Mila is one of the world's leading academic AI institutes, a dream place to pursue a PhD at the deep-learning frontier.",
    href: 'https://mila.quebec/en',
    logo: milaLogo,
  },
  {
    name: 'Hugging Face',
    focus: 'Open-Source AI',
    description:
      'The home of open-source machine learning, from the Transformers library to a hub of shared models and datasets. French-founded and beloved by the whole ML community.',
    href: 'https://huggingface.co/',
    logo: huggingfaceLogo,
  },
  {
    name: 'xAI',
    focus: 'Frontier AI',
    description:
      'A frontier AI company building advanced general-purpose models (Grok) with massive compute, racing at the leading edge of the field.',
    href: 'https://x.ai/',
    logo: xaiLogo,
  },
  {
    name: 'Kyutai',
    focus: 'Open-Science AI (Paris)',
    description:
      'A Paris-based open-science AI lab releasing models and research in the open, including real-time speech systems, pushing European AI at the cutting edge.',
    href: 'https://kyutai.org/',
    logo: kyutaiLogo,
  },
]

const vision: string[] = [
  "It comes down to one thing: I love maths, and AI is where maths starts to think. I'm the kind of person who gets pulled into a research paper late at night, then spends the next morning trying to rebuild it just to see if it really works.",
  "I don't want to only use these models, I want to understand how they work and help build the next ones. My goal is to do genuine research, surrounded by people who push me, on problems that actually matter.",
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
        {/* Vision / why */}
        <div className="relative max-w-3xl mx-auto overflow-hidden bg-white border shadow-xl rounded-3xl dark:bg-primaryText-800 border-primaryText-200/60 dark:border-primaryText-700/50">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent-400 via-accent-500 to-accent-600" />
          <div
            className="absolute rounded-full pointer-events-none -top-20 -right-20 w-56 h-56 bg-accent-400/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative p-8 sm:p-12">
            <FaQuoteLeft className="text-accent-500/25 w-9 h-9" aria-hidden="true" />
            <p className="mt-6 text-xl font-medium leading-relaxed text-primaryText-800 dark:text-primaryText-100">
              {vision[0]}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-primaryText-600 dark:text-primaryText-300">
              {vision[1]}
            </p>
            <div className="flex items-center gap-3 mt-8">
              <Image
                src={avatarImage}
                alt="Cedrick Tchakonte"
                width={44}
                height={44}
                className="object-cover rounded-full w-11 h-11 ring-2 ring-accent-200 dark:ring-accent-700/50"
              />
              <div>
                <p className="text-sm font-semibold text-primaryText-800 dark:text-primaryText-100">
                  Cedrick Tchakonte
                </p>
                <p className="text-xs text-primaryText-500 dark:text-primaryText-400">
                  AI &amp; Cyber-Physical Systems · ENSTA Paris
                </p>
              </div>
            </div>
          </div>
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
            AI, you believe you can help me reach these goals, or you simply believe in the human
            behind them, feel free to reach out. If you can help me get there, come join me on the
            journey. I&apos;d love to connect.
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
