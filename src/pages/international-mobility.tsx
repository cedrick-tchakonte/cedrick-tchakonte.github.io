import InternationalMobilityCard from '@/components/InternationalMobilityCard';
import Head from 'next/head';
import { PageLayout } from '@/components/PageLayout';
import { SectionHeading } from '@/components/SectionHeading';
import { LocationCarousel } from '@/components/LocationCarousel';
import siteMetadata from '@/data/siteMetadata';
import { useT } from '@/i18n';
import { mobilityData } from '@/content/mobility';

export default function InternationalMobility() {
  const t = useT();

  const localizedMobilityData = mobilityData.map((location) => ({
    ...location,
    description: t(location.description),
  }));

  return (
    <>
      <Head>
        <title>International Mobility - {siteMetadata.author}</title>
        <meta
          name="description"
          content="Explore Cedrick Tchakonte's international academic experiences."
        />
      </Head>
      <PageLayout
        title={t({ en: 'My International Mobility', fr: 'Ma mobilité internationale' })}
        subtitle={t({
          en: 'Discover the places I visited and the experiences I gained during my academic journey abroad.',
          fr: "Découvrez les lieux que j'ai visités et les expériences que j'ai acquises au cours de mon parcours académique à l'étranger.",
        })}
      >
        {/* Conteneur principal amélioré */}
        <div className="mx-auto max-w-7xl px-4 py-12">
          {/* Section de présentation améliorée */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/20 rounded-full mb-6">
              <svg className="w-8 h-8 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-900 dark:text-primaryText-100 sm:text-4xl">
              {t({ en: 'My Global Journey', fr: 'Mon parcours à travers le monde' })}
            </h2>
            <p className="text-lg text-primaryText-600 dark:text-primaryText-400 leading-relaxed max-w-3xl mx-auto">
              {t({
                en: 'As a passionate engineering student specializing in AI and Cyber-Physical Systems, I have had the privilege of studying and working in multiple countries. Each destination has enriched my academic and professional journey, shaping me into a global thinker with diverse perspectives.',
                fr: "En tant qu'étudiant ingénieur passionné, spécialisé en IA et systèmes cyber-physiques, j'ai eu le privilège d'étudier et de travailler dans plusieurs pays. Chaque destination a enrichi mon parcours académique et professionnel, faisant de moi un esprit ouvert sur le monde, aux perspectives variées.",
              })}
            </p>
            <p className="text-base text-primaryText-500 dark:text-primaryText-500 mt-4 max-w-2xl mx-auto">
              {t({
                en: 'From my birthplace in Douala, Cameroon, to my current studies in Paris and internship experiences in Grenoble, I continue to explore new horizons while contributing to meaningful projects in AI and technology.',
                fr: "De ma ville natale de Douala, au Cameroun, à mes études actuelles à Paris et à mes expériences de stage à Grenoble, je continue d'explorer de nouveaux horizons tout en contribuant à des projets porteurs de sens en IA et en technologie.",
              })}
            </p>
          </div>

          {/* Carrousel amélioré */}
          <div className="relative mb-16">
            <SectionHeading
              align="center"
              level={3}
              title={t({ en: "Places I've Lived & Worked", fr: "Lieux où j'ai vécu et travaillé" })}
              subtitle={t({
                en: 'Discover the cities that have shaped my journey',
                fr: 'Découvrez les villes qui ont façonné mon parcours',
              })}
              className="mb-8"
            />
            <div className="max-w-4xl mx-auto">
              <LocationCarousel slides={localizedMobilityData} />
            </div>
          </div>
        </div>

        {/* Cartes de mobilité détaillées */}
        <div className="mx-auto max-w-7xl px-4 py-8">
          <SectionHeading
            align="center"
            level={3}
            title={t({ en: 'Detailed Experience', fr: 'Expériences détaillées' })}
            subtitle={t({
              en: "Learn more about my experiences in each city and the valuable lessons I've gained along the way.",
              fr: "Apprenez-en davantage sur mes expériences dans chaque ville et sur les précieuses leçons que j'en ai tirées en chemin.",
            })}
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localizedMobilityData.map((location, index) => (
              <div key={index} className="group">
                <InternationalMobilityCard location={location} />
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
}
