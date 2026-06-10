import InternationalMobilityCard from '@/components/InternationalMobilityCard';
import Head from 'next/head';
import { PageLayout } from '@/components/PageLayout';
import { SectionHeading } from '@/components/SectionHeading';
import { LocationCarousel } from '@/components/LocationCarousel';
import siteMetadata from '@/data/siteMetadata';

type MobilityLocation = {
  city: string;
  country: string;
  image: string;
  description: string;
  startDate: string;
  endDate: string;
  university: string;
};

const mobilityData: MobilityLocation[] = [
    {
      city: 'Paris',
      country: 'France',
      image: '/images/paris.jpg',
      description: 'Studied at ENSTA Paris, specializing in AI and Cyber-Physical Systems, and now based in the Paris region for my gap year, with AI roles at TAEP, Objectware and Stellantis.',
      startDate: '2024',
      endDate: 'Present',
      university: 'ENSTA Paris',
    },
    {
      city: 'Palaiseau',
      country: 'France',
      image: '/images/palaiseau.jpg',
      description:
        'Studying Artificial Intelligence and Cyber-Physical Systems at ENSTA Paris, on the Plateau de Saclay campus of the Institut Polytechnique de Paris.',
      startDate: '2024',
      endDate: 'Present',
      university: 'ENSTA Paris (IP Paris)',
    },
    {
      city: 'Poissy',
      country: 'France',
      image: '/images/poissy.jpg',
      description:
        'Machine Learning Research Intern at the Stellantis grEEn-Campus, building multimodal datasets and 3D CNN/GNN surrogate models to predict pedestrian protection metrics for vehicle safety.',
      startDate: '2026',
      endDate: 'Present',
      university: 'Stellantis grEEn-Campus',
    },
    {
      city: 'Grenoble',
      country: 'France',
      image: '/images/grenoble.jpg',
      description: 'Completed a Research and Development Internship at STMicroelectronics, working on Digital Twin simulations and AI-assisted workflows for documentation analysis.',
      startDate: '2025',
      endDate: '2025',
      university: 'STMicroelectronics',
    },
    {
      city: 'Yamoussoukro',
      country: 'Côte d\'Ivoire',
      image: '/images/yamoussoukro.jpg',
      description: "Spent 1 week there for oral entrance exams to the Ecole Polytechnique (l'X), experiencing the competitive engineering school selection process.",
      startDate: '2023',
      endDate: '2023',
      university: 'Institut National Polytechnique Félix Houphouët-Boigny',
    },
    {
      city: 'Yaoundé',
      country: 'Cameroon',
      image: '/images/yaounde.png',
      description: 'Studied Computer Science Engineering at Ecole Nationale Supérieure Polytechnique de Yaoundé, completing intensive preparatory program in mathematics and physical sciences.',
      startDate: '2020',
      endDate: '2024',
      university: 'ENSPY - University of Yaoundé I',
    },
    {
      city: 'Douala',
      country: 'Cameroon',
      image: '/images/douala.png',
      description: "My birthplace and hometown where I spent most of my childhood and completed my secondary studies, obtaining my Baccalaureate diploma with honors before continuing my studies in Yaoundé.",
      startDate: 'Birth',
      endDate: '2020',
      university: 'Lycée Bilingue de Nylon Ndogpassi',
    },
  ];

export default function InternationalMobility() {
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
        title="My International Mobility"
        subtitle="Discover the places I visited and the experiences I gained during my academic journey abroad."
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
              My Global Journey
            </h2>
            <p className="text-lg text-primaryText-600 dark:text-primaryText-400 leading-relaxed max-w-3xl mx-auto">
              As a passionate engineering student specializing in AI and Cyber-Physical Systems, I have had the privilege of studying and working in multiple countries.
              Each destination has enriched my academic and professional journey, shaping me into a global thinker with diverse perspectives.
            </p>
            <p className="text-base text-primaryText-500 dark:text-primaryText-500 mt-4 max-w-2xl mx-auto">
              From my birthplace in Douala, Cameroon, to my current studies in Paris and internship experiences in Grenoble,
              I continue to explore new horizons while contributing to meaningful projects in AI and technology.
            </p>
          </div>

          {/* Carrousel amélioré */}
          <div className="relative mb-16">
            <SectionHeading
              align="center"
              level={3}
              title="Places I've Lived & Worked"
              subtitle="Discover the cities that have shaped my journey"
              className="mb-8"
            />
            <div className="max-w-4xl mx-auto">
              <LocationCarousel slides={mobilityData} />
            </div>
          </div>
        </div>

        {/* Cartes de mobilité détaillées */}
        <div className="mx-auto max-w-7xl px-4 py-8">
          <SectionHeading
            align="center"
            level={3}
            title="Detailed Experience"
            subtitle="Learn more about my experiences in each city and the valuable lessons I've gained along the way."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobilityData.map((location, index) => (
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
