import Head from 'next/head'
import Link from 'next/link'
import Image, { type StaticImageData } from 'next/image'
import type { IconType } from 'react-icons'
import { FaRocket, FaGraduationCap, FaFlask, FaSquareRootAlt, FaQuoteLeft } from 'react-icons/fa'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { SectionHeading } from '@/components/SectionHeading'
import siteMetadata from '@/data/siteMetadata'
import { useT, type I18n } from '@/i18n'
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
  focus: I18n<string>
  description: I18n<string>
  href: string
  logo: StaticImageData
}

const dreamLabs: DreamLab[] = [
  {
    name: 'AMI Labs',
    focus: { en: 'World Models (Paris)', fr: "Modèles du monde (Paris)" },
    description: {
      en: "Yann LeCun's Paris-based frontier lab building world models: AI that learns abstract representations of the real world to predict, plan and act reliably. Advanced Machine Intelligence with safety and real-world impact at its core.",
      fr: "Le laboratoire de pointe de Yann LeCun, basé à Paris, qui construit des modèles du monde : une IA capable d'apprendre des représentations abstraites du monde réel pour prédire, planifier et agir de façon fiable. Une intelligence machine avancée plaçant la sûreté et l'impact concret au cœur de sa démarche.",
    },
    href: 'https://amilabs.xyz/',
    logo: amiLogo,
  },
  {
    name: 'Google DeepMind',
    focus: { en: 'AGI & Scientific Discovery', fr: "IA générale et découverte scientifique" },
    description: {
      en: 'From AlphaFold to Gemini, DeepMind treats intelligence as a scientific frontier, blending deep learning and reinforcement learning to solve problems that matter for science and society.',
      fr: "D'AlphaFold à Gemini, DeepMind aborde l'intelligence comme une frontière scientifique, mêlant apprentissage profond et apprentissage par renforcement pour résoudre des problèmes qui comptent pour la science et la société.",
    },
    href: 'https://deepmind.google/',
    logo: deepmindLogo,
  },
  {
    name: 'Meta FAIR',
    focus: { en: 'Open Frontier Research', fr: "Recherche de pointe ouverte" },
    description: {
      en: "Meta's Fundamental AI Research lab advances open science in large language models, computer vision and self-supervised learning, the kind of foundational work I want to contribute to.",
      fr: "Le laboratoire de recherche fondamentale en IA de Meta fait progresser la science ouverte autour des grands modèles de langage, de la vision par ordinateur et de l'apprentissage auto-supervisé : exactement le type de travaux fondamentaux auxquels je veux contribuer.",
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

const vision: I18n<string>[] = [
  {
    en: "It comes down to one thing: I love maths, and AI is where maths starts to think. I'm the kind of person who gets pulled into a research paper late at night, then spends the next morning trying to rebuild it just to see if it really works.",
    fr: "Tout se résume à une chose : j'aime les maths, et l'IA est l'endroit où les maths se mettent à penser. Je suis du genre à me plonger dans un article de recherche tard le soir, puis à passer la matinée suivante à essayer de le reconstruire, juste pour voir s'il fonctionne vraiment.",
  },
  {
    en: "I don't want to only use these models, I want to understand how they work and help build the next ones. My goal is to do genuine research, surrounded by people who push me, on problems that actually matter.",
    fr: "Je ne veux pas seulement utiliser ces modèles, je veux comprendre comment ils fonctionnent et aider à construire les prochains. Mon objectif est de faire de la vraie recherche, entouré de personnes qui me tirent vers le haut, sur des problèmes qui comptent réellement.",
  },
]

interface Goal {
  icon: IconType
  title: I18n<string>
  description: I18n<string>
}

const goals: Goal[] = [
  {
    icon: FaRocket,
    title: { en: 'End-of-studies internship (PFE)', fr: "Stage de fin d'études (PFE)" },
    description: {
      en: 'Join a world-class AI lab for my final-year internship and work shoulder to shoulder with researchers building the next generation of models.',
      fr: "Rejoindre un laboratoire d'IA de classe mondiale pour mon stage de fin d'études et travailler côte à côte avec des chercheurs qui construisent la prochaine génération de modèles.",
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

export default function Dreams() {
  const t = useT()

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
        title={t({ en: 'My Dreams', fr: 'Mes rêves' })}
        intro={t({
          en: "The labs I dream of joining, the technologies that fascinate me, and the goals I'm working towards.",
          fr: "Les laboratoires que je rêve de rejoindre, les technologies qui me fascinent et les objectifs vers lesquels je travaille.",
        })}
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
              {t(vision[0])}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-primaryText-600 dark:text-primaryText-300">
              {t(vision[1])}
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
          eyebrow={t({ en: 'Where I want to be', fr: "Là où je veux être" })}
          title={t({ en: 'Dream Labs & Companies', fr: 'Labos & entreprises de rêve' })}
          subtitle={t({
            en: "The research labs and companies at the cutting edge of AI that I'd love to be part of.",
            fr: "Les laboratoires de recherche et les entreprises à la pointe de l'IA dont j'adorerais faire partie.",
          })}
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
              <Card.Eyebrow decorate>{t(lab.focus)}</Card.Eyebrow>
              <Card.Description>{t(lab.description)}</Card.Description>
            </Card>
          ))}
        </ul>

        {/* Next goals */}
        <SectionHeading
          align="center"
          eyebrow={t({ en: "Where I'm heading", fr: "Là où je me dirige" })}
          title={t({ en: 'My Next Goals', fr: 'Mes prochains objectifs' })}
          subtitle={t({
            en: "The path I'm working towards over the coming years.",
            fr: "Le chemin que je construis pour les prochaines années.",
          })}
          className="mt-20 mb-12"
        />
        <ol className="max-w-3xl mx-auto space-y-6">
          {goals.map((goal) => (
            <li
              key={goal.title.en}
              className="flex gap-5 p-6 bg-white border shadow-sm rounded-2xl dark:bg-primaryText-800 border-primaryText-200/50 dark:border-primaryText-700/50"
            >
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-white shadow-md rounded-xl bg-gradient-to-br from-accent-500 to-accent-600">
                <goal.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primaryText-900 dark:text-primaryText-100">
                  {t(goal.title)}
                </h3>
                <p className="mt-1 text-base leading-relaxed text-primaryText-600 dark:text-primaryText-400">
                  {t(goal.description)}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Call to action */}
        <div className="max-w-3xl p-8 mx-auto mt-20 text-center text-white shadow-lg sm:p-12 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t({
              en: 'Think you can help me get there?',
              fr: "Vous pensez pouvoir m'aider à y arriver ?",
            })}
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
            {t({
              en: "Whether you're hiring for one of these labs, building something at the frontier of AI, you believe you can help me reach these goals, or you simply believe in the human behind them, feel free to reach out. If you can help me get there, come join me on the journey. I'd love to connect.",
              fr: "Que vous recrutiez pour l'un de ces laboratoires, que vous construisiez quelque chose à la frontière de l'IA, que vous pensiez pouvoir m'aider à atteindre ces objectifs ou que vous croyiez simplement en la personne qui les porte, n'hésitez pas à me contacter. Si vous pouvez m'aider à y arriver, rejoignez-moi dans l'aventure. J'adorerais échanger avec vous.",
            })}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 mt-8 text-base font-semibold transition rounded-md shadow-sm bg-white text-accent-600 hover:bg-accent-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent-600"
          >
            {t({ en: "Let's talk", fr: 'Discutons-en' })}
          </Link>
        </div>
      </SimpleLayout>
    </>
  )
}
