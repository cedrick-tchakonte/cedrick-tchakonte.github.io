import Head from 'next/head'
import type { StaticImageData } from 'next/image'
import { EntryCard } from '@/components/EntryCard'
import { SectionHeading } from '@/components/SectionHeading'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'
import { useT, type I18n } from '@/i18n'
import stellantisLogo from '@/images/logos/stellantis.svg'
import taepLogo from '@/images/logos/taep.png'
import objectwareLogo from '@/images/logos/objectware.svg'
import stMicroLogo from '@/images/logos/stmicroelectronics.png'

interface ExperienceItem {
  title: I18n<string>
  company: string
  date: I18n<string>
  description: I18n<string[]>
  location: I18n<string>
  link: { url: string; label: string }
  logo: StaticImageData
}

const experiences: ExperienceItem[] = [
  {
    title: {
      en: 'Machine Learning Research Intern',
      fr: 'Stagiaire de recherche en Machine Learning',
    },
    company: 'Stellantis',
    date: { en: 'Feb 2026 - Present', fr: 'Févr. 2026 - Présent' },
    description: {
      en: [
        'Built a multimodal dataset from 3D scans, meshes and impact test data (Euro NCAP / China NCAP / Japan NCAP frameworks).',
        'Applied transfer learning (ResNet, ShuffleNet, EfficientNet) and designed 3D CNN/GNN surrogate models to predict pedestrian protection metrics.',
        'Benchmarked against physical tests and finite element simulations to support early-stage safety optimization.',
      ],
      fr: [
        "Construction d'un jeu de données multimodal à partir de scans 3D, de maillages et de données d'essais de choc (référentiels Euro NCAP / China NCAP / Japan NCAP).",
        "Application du transfert d'apprentissage (ResNet, ShuffleNet, EfficientNet) et conception de modèles de substitution CNN/GNN 3D pour prédire les métriques de protection des piétons.",
        "Comparaison avec des essais physiques et des simulations par éléments finis afin de soutenir l'optimisation de la sécurité en phase amont.",
      ],
    },
    location: { en: 'GrEEn-Campus Poissy, France', fr: 'GrEEn-Campus Poissy, France' },
    link: { url: 'https://www.stellantis.com/', label: 'Stellantis' },
    logo: stellantisLogo,
  },
  {
    title: { en: 'Junior AI Engineer', fr: 'Ingénieur IA junior' },
    company: 'TAEP (Junior Enterprise of ENSTA)',
    date: { en: 'Nov 2025 - Present', fr: 'Nov. 2025 - Présent' },
    description: {
      en: [
        'Developed a Graph RAG system for European financial regulation, building knowledge graphs from regulatory corpora to model relationships between directives, articles and legal entities.',
        'Engineered LLM-based entity and relation extraction pipelines to populate graph structures from unstructured legal texts.',
        'Combined vector search with graph traversal for hybrid retrieval, improving relevance over standard RAG.',
      ],
      fr: [
        "Développement d'un système Graph RAG pour la réglementation financière européenne, avec construction de graphes de connaissances à partir de corpus réglementaires pour modéliser les relations entre directives, articles et entités juridiques.",
        "Conception de pipelines d'extraction d'entités et de relations fondés sur des LLM pour alimenter les structures de graphe à partir de textes juridiques non structurés.",
        "Combinaison de la recherche vectorielle et du parcours de graphe pour une recherche hybride, améliorant la pertinence par rapport au RAG classique.",
      ],
    },
    location: { en: 'Palaiseau, France', fr: 'Palaiseau, France' },
    link: { url: 'https://www.taep.fr/', label: 'TAEP' },
    logo: taepLogo,
  },
  {
    title: {
      en: 'Junior AI Research Engineer',
      fr: 'Ingénieur de recherche IA junior',
    },
    company: 'Objectware',
    date: { en: 'Sept 2025 - Jan 2026', fr: 'Sept. 2025 - Janv. 2026' },
    description: {
      en: [
        'Created AI-based decision support systems using LLMs and NLP for predictive analytics and enterprise automation.',
        'Fine-tuned small language models using LoRA/QLoRA for domain-specific tasks with reduced compute cost.',
        'Collaborated with cross-functional teams to integrate AI solutions into enterprise workflows.',
      ],
      fr: [
        "Conception de systèmes d'aide à la décision fondés sur l'IA, à l'aide de LLM et de NLP, pour l'analyse prédictive et l'automatisation en entreprise.",
        "Affinage (fine-tuning) de petits modèles de langage avec LoRA/QLoRA pour des tâches métier spécifiques, à coût de calcul réduit.",
        "Collaboration avec des équipes pluridisciplinaires pour intégrer les solutions d'IA dans les processus métier de l'entreprise.",
      ],
    },
    location: { en: 'Paris, France', fr: 'Paris, France' },
    link: { url: 'https://www.objectware.fr/', label: 'Objectware' },
    logo: objectwareLogo,
  },
  {
    title: {
      en: 'R&D Intern - AI for Embedded Systems',
      fr: "Stagiaire R&D - IA pour les systèmes embarqués",
    },
    company: 'STMicroelectronics',
    date: { en: 'May 2025 - Aug 2025', fr: 'Mai 2025 - Août 2025' },
    description: {
      en: [
        'Worked within the System Level Modeling team on C++ "Digital Twin" simulations enabling virtual execution of embedded software across multiple ST divisions (automotive, RF, secure MCUs).',
        'Built AI-assisted workflows using LLMs, RAG and vector databases to automate documentation analysis and model generation for the simulation codebases.',
        'Benchmarked and integrated the solution into SOC Digital Twin development, improving documentation retrieval efficiency in simulation-driven validation.',
      ],
      fr: [
        "Travail au sein de l'équipe System Level Modeling sur des simulations \"Digital Twin\" en C++ permettant l'exécution virtuelle de logiciels embarqués pour plusieurs divisions de ST (automobile, RF, microcontrôleurs sécurisés).",
        "Mise en place de workflows assistés par l'IA, à l'aide de LLM, de RAG et de bases de données vectorielles, pour automatiser l'analyse de la documentation et la génération de modèles pour les bases de code de simulation.",
        "Évaluation et intégration de la solution dans le développement du Digital Twin de SoC, améliorant l'efficacité de la recherche documentaire lors de la validation par simulation.",
      ],
    },
    location: { en: 'Grenoble, France', fr: 'Grenoble, France' },
    link: { url: 'https://www.st.com/', label: 'STMicroelectronics' },
    logo: stMicroLogo,
  },
]

export default function Experience() {
  const t = useT()

  return (
    <>
      <Head>
        <title>{`Experience - ${siteMetadata.author}`}</title>
        <meta
          name="description"
          content={`Work experience of ${siteMetadata.author}`}
        />
      </Head>
      <SimpleLayout
        title={t(siteMetadata.experience.title)}
        intro={t(siteMetadata.experience.intro)}
      >
        <SectionHeading
          title={t({ en: 'Work Experience', fr: 'Expérience professionnelle' })}
          className="mb-10"
        />
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {experiences.map((experience, index) => (
            <li key={index}>
              <EntryCard
                logo={experience.logo}
                logoAlt={experience.company}
                title={`${t(experience.title)} ${t({ en: 'at', fr: 'chez' })} ${experience.company}`}
                date={t(experience.date)}
                location={t(experience.location)}
                bullets={t(experience.description)}
                link={experience.link}
              />
            </li>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
