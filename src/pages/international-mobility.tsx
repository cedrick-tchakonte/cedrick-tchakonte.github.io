import InternationalMobilityCard from '@/components/InternationalMobilityCard';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import { SectionHeading } from '@/components/SectionHeading';
import { LocationCarousel } from '@/components/LocationCarousel';
import siteMetadata from '@/data/siteMetadata';
import { useT, type I18n } from '@/i18n';
import { fadeUp, reveal, stagger } from '@/lib/motion';
import { mobilityData } from '@/content/mobility';

export default function InternationalMobility() {
  const t = useT();

  const resolve = (value: string | I18n<string>) =>
    typeof value === 'string' ? value : t(value);

  const localizedMobilityData = mobilityData.map((location) => ({
    ...location,
    description: t(location.description),
    startDate: resolve(location.startDate),
    endDate: resolve(location.endDate),
  }));

  return (
    <>
      <Head>
        <title>{`${t({ en: 'International Mobility', fr: 'Mobilité internationale' })} - ${siteMetadata.author}`}</title>
        <meta
          name="description"
          content={t({
            en: "Explore Cedrick Tchakonte's international academic experiences.",
            fr: 'Découvrez les expériences académiques internationales de Cedrick Tchakonte.',
          })}
        />
      </Head>
      <PageLayout
        title={t({ en: 'My International Mobility', fr: 'Ma mobilité internationale' })}
        subtitle={t({
          en: "Where I've studied and worked, and what I gained from each place.",
          fr: "Là où j'ai étudié et travaillé, et ce que chaque lieu m'a apporté.",
        })}
      >
        {/* Intro */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 ring-1 ring-inset ring-accent-500/20 dark:bg-accent-400/10 dark:text-accent-400 dark:ring-accent-400/20">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-primaryText-900 dark:text-primaryText-50 sm:text-3xl">
            {t({ en: 'My Global Journey', fr: 'Mon parcours à travers le monde' })}
          </h2>
          <p className="mt-4 text-lg leading-8 text-primaryText-600 dark:text-primaryText-400">
            {t({
              en: "Each of these places, in France and Côte d'Ivoire, has enriched my academic and professional journey and broadened my perspective.",
              fr: "Chacun de ces lieux, en France et en Côte d'Ivoire, a enrichi mon parcours académique et professionnel et élargi mes perspectives.",
            })}
          </p>
          <p className="mt-4 text-base leading-7 text-primaryText-500">
            {t({
              en: 'From my studies in Paris and Palaiseau to my internships in Grenoble and Poissy, I keep exploring new horizons.',
              fr: "De mes études à Paris et Palaiseau à mes stages à Grenoble et Poissy, je continue d'explorer de nouveaux horizons.",
            })}
          </p>
        </div>

        {/* Carousel */}
        <motion.section variants={fadeUp} {...reveal} className="mt-16 sm:mt-20">
          <SectionHeading
            align="center"
            level={3}
            title={t({ en: "Places I've Lived & Worked", fr: "Lieux où j'ai vécu et travaillé" })}
            subtitle={t({
              en: 'Discover the cities that have shaped my journey',
              fr: 'Découvrez les villes qui ont façonné mon parcours',
            })}
            className="mb-10"
          />
          <LocationCarousel slides={localizedMobilityData} />
        </motion.section>

        {/* Detailed mobility cards */}
        <section className="mt-16 sm:mt-20">
          <SectionHeading
            align="center"
            level={3}
            title={t({ en: 'Detailed Experience', fr: 'Expériences détaillées' })}
            subtitle={t({
              en: "Learn more about my experiences in each city and the valuable lessons I've gained along the way.",
              fr: "Apprenez-en davantage sur mes expériences dans chaque ville et sur les précieuses leçons que j'en ai tirées en chemin.",
            })}
            className="mb-10"
          />
          <motion.ul
            role="list"
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
            variants={stagger}
            {...reveal}
          >
            {localizedMobilityData.map((location, index) => (
              <motion.li key={index} variants={fadeUp} className="grid">
                <InternationalMobilityCard location={location} />
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </PageLayout>
    </>
  );
}
