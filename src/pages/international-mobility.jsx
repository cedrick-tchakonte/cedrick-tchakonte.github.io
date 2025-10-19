import React from 'react';
import Slider from 'react-slick';
import InternationalMobilityCard from '@/components/InternationalMobilityCard';
import Head from 'next/head';
import { PageLayout } from '@/components/PageLayout';
import Image from 'next/image';
import siteMetadata from '@/data/siteMetadata';

// Import des styles slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const mobilityData = [
    {
      city: 'Paris',
      country: 'France',
      image: '/images/paris.jpg',
      description: 'Currently studying at ENSTA Campus de Paris-Saclay, specializing in AI and Cyber-Physical Systems. Also working as Junior Research Engineer Intern at Objectware.',
      startDate: '2024',
      endDate: 'Present',
      university: 'ENSTA Campus de Paris-Saclay',
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
  
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

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
            <h2 className="text-3xl font-bold text-primaryText-800 dark:text-primaryText-100 mb-6">
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
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-primaryText-800 dark:text-primaryText-100 mb-2">
                Places I&apos;ve Lived & Worked
              </h3>
              <p className="text-primaryText-600 dark:text-primaryText-400">
                Discover the cities that have shaped my journey
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Slider {...sliderSettings}>
                {mobilityData.map((location, index) => (
                  <div key={index} className="px-4">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 group">
                      <Image
                        src={location.image}
                        alt={location.city}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        width={800}
                        height={256}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h4 className="text-2xl font-bold mb-2">{location.city}, {location.country}</h4>
                        <p className="text-sm opacity-90 mb-1">{location.startDate} - {location.endDate}</p>
                        <p className="text-sm opacity-90">{location.university}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* Cartes de mobilité détaillées */}
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-primaryText-800 dark:text-primaryText-100 mb-4">
              Detailed Experience
            </h3>
            <p className="text-primaryText-600 dark:text-primaryText-400 max-w-2xl mx-auto">
              Learn more about my experiences in each city and the valuable lessons I&apos;ve gained along the way.
            </p>
          </div>
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
