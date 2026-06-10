import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { SectionHeading } from '@/components/SectionHeading'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'
import avatarImage from '@/images/avatar.jpg'
import { dreamLabs, goals, vision } from '@/content/dreams'

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
