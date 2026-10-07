import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import { Card } from '@/components/Card'
import { LocaleLink } from '@/components/LocaleLink'
import { SimpleLayout } from '@/components/SimpleLayout'
import { SectionHeading } from '@/components/SectionHeading'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'
import { fadeUp, reveal, stagger } from '@/lib/motion'
import avatarImage from '@/images/avatar.jpg'
import { dreamLabs, goals, vision } from '@/content/dreams'

export default function Dreams() {
  const t = useT()

  return (
    <>
      <Head>
        <title>{`${t({ en: 'My Dreams', fr: 'Mes rêves' })} - ${siteMetadata.author}`}</title>
        <meta
          name="description"
          content={t({
            en: `The AI labs, technologies and goals ${siteMetadata.author} is aiming for.`,
            fr: `Les laboratoires d'IA, les technologies et les objectifs que vise ${siteMetadata.author}.`,
          })}
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
        <div className="mx-auto max-w-3xl rounded-2xl border border-primaryText-200/70 bg-white p-6 shadow-sm dark:border-primaryText-800 dark:bg-primaryText-900 sm:p-8">
          <FaQuoteLeft className="h-8 w-8 text-accent-500/30 dark:text-accent-400/30" aria-hidden="true" />
          <p className="mt-6 text-xl font-medium leading-8 text-primaryText-900 dark:text-primaryText-50">
            {t(vision[0])}
          </p>
          <p className="mt-4 text-base leading-7 text-primaryText-600 dark:text-primaryText-400 sm:text-lg sm:leading-8">
            {t(vision[1])}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Image
              src={avatarImage}
              alt="Cedrick Tchakonte"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover ring-1 ring-primaryText-900/5 dark:ring-white/10"
            />
            <div>
              <p className="text-sm font-semibold text-primaryText-900 dark:text-primaryText-50">
                Cedrick Tchakonte
              </p>
              <p className="text-sm text-primaryText-500">
                {t({ en: 'AI specialization track', fr: 'Parcours de spécialisation en IA' })} · ENSTA Paris
              </p>
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
          className="mt-16 mb-10 sm:mt-20"
        />
        <motion.ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={stagger}
          {...reveal}
        >
          {dreamLabs.map((lab) => (
            <motion.li key={lab.name} variants={fadeUp} className="grid">
              <Card className="h-full">
                <Card.Logo src={lab.logo} alt={`${lab.name} logo`} />
                <p className="relative z-10 mt-6 text-sm font-semibold text-accent-600 dark:text-accent-400">
                  {t(lab.focus)}
                </p>
                <Card.Title href={lab.href} className="mt-1">
                  {lab.name}
                </Card.Title>
                <Card.Description>{t(lab.description)}</Card.Description>
              </Card>
            </motion.li>
          ))}
        </motion.ul>

        {/* Next goals */}
        <SectionHeading
          align="center"
          eyebrow={t({ en: "Where I'm heading", fr: "Là où je me dirige" })}
          title={t({ en: 'My Next Goals', fr: 'Mes prochains objectifs' })}
          subtitle={t({
            en: "The path I'm working towards over the coming years.",
            fr: "Le chemin que je construis pour les prochaines années.",
          })}
          className="mt-16 mb-10 sm:mt-20"
        />
        <motion.ol className="mx-auto max-w-3xl space-y-6" variants={stagger} {...reveal}>
          {goals.map((goal) => (
            <motion.li
              key={goal.title.en}
              variants={fadeUp}
              className="flex gap-4 rounded-2xl border border-primaryText-200/70 bg-white p-6 shadow-sm dark:border-primaryText-800 dark:bg-primaryText-900 sm:gap-5"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 ring-1 ring-inset ring-accent-500/20 dark:bg-accent-400/10 dark:text-accent-400 dark:ring-accent-400/20">
                <goal.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-primaryText-900 dark:text-primaryText-50">
                  {t(goal.title)}
                </h3>
                <p className="mt-1 text-base leading-7 text-primaryText-600 dark:text-primaryText-400">
                  {t(goal.description)}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        {/* Call to action */}
        <motion.div
          variants={fadeUp}
          {...reveal}
          className="mx-auto mt-16 max-w-3xl rounded-2xl border border-primaryText-200/70 bg-white p-6 text-center shadow-sm dark:border-primaryText-800 dark:bg-primaryText-900 sm:mt-20 sm:p-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-primaryText-900 dark:text-primaryText-50 sm:text-3xl">
            {t({
              en: 'Think you can help me get there?',
              fr: "Vous pensez pouvoir m'aider à y arriver ?",
            })}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-primaryText-600 dark:text-primaryText-400">
            {t({
              en: "Whether you're hiring for one of these labs, building at the frontier of AI, or simply believe in the person behind these goals, feel free to reach out. I'd love to connect.",
              fr: "Que vous recrutiez pour l'un de ces laboratoires, que vous construisiez à la frontière de l'IA ou que vous croyiez simplement en la personne derrière ces objectifs, n'hésitez pas à me contacter. J'adorerais échanger avec vous.",
            })}
          </p>
          <LocaleLink
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 ease-smooth hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
          >
            {t({ en: "Let's talk", fr: 'Discutons-en' })}
          </LocaleLink>
        </motion.div>
      </SimpleLayout>
    </>
  )
}
