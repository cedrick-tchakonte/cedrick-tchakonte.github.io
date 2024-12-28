import React from 'react';
import Slider from 'react-slick';
import InternationalMobilityCard from '@/components/InternationalMobilityCard';
import Head from 'next/head';
import { SimpleLayout } from '@/components/SimpleLayout';
import Image from 'next/image';

// Import des styles slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const mobilityData = [
    {
      city: 'Paris',
      country: 'France',
      image: '/images/paris.jpg',
      description: 'Studied at Ecole Nationale Supérieure de Techniques Avancées | Institut Polytechnique de Paris.',
      startDate: '2024',
      endDate: 'Present',
      university: 'Sorbonne University',
    },
    {
      city: 'Yamoussoukro',
      country: 'Côte d\'Ivoire',
      image: '/images/yamoussoukro.jpg',
      description: "I spent 1 week there, during which time we took the oral entrance exams to the Ecole Polytechnique, often called l'X.",
      startDate: '2023',
      endDate: '2023',
      university: 'Institut National Polytechnique Félix Houphouët-Boigny',
    },
    {
      city: 'Yaoundé',
      country: 'Cameroon',
      image: '/images/yaounde.png',
      description: 'Studied Computer Science Engineering at Ecole Nationale Supérieure Polytechnique de Yaoundé',
      startDate: '2020',
      endDate: '2024',
      university: 'University of Yaoundé I',
    },
    {
      city: 'Douala',
      country: 'Cameroon',
      image: '/images/douala.png',
      description: "city ​​where I was born, and where I spent most of my childhood and my secondary studies, it is also where I obtained my Baccalaureate diploma before continuing my studies in the city of Yaoundé",
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
        <title>International Mobility</title>
        <meta
          name="description"
          content="Explore Cedrick Tchakonte's international academic experiences."
        />
      </Head>
      <SimpleLayout
        title="My International Mobility"
        intro="Discover the places I visited and the experiences I gained during my academic journey abroad."
      >
        {/* Conteneur principal en deux colonnes */}
        <div className="mx-auto max-w-screen-lg px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section de présentation à gauche */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-primaryText-800 dark:text-primaryText-100 mb-4">
              About Me
            </h2>
            <p className="text-base text-primaryText-600 dark:text-primaryText-400 leading-relaxed">
              Hi! I&apos;m Cedrick Tchakonte, a passionate student who loves exploring the world while 
              advancing my academic and professional journey. My experiences abroad have shaped 
              me into a global thinker, and I cherish the opportunities to learn from diverse cultures.
            </p>
            <p className="text-base text-primaryText-600 dark:text-primaryText-400 leading-relaxed mt-4">
              From Paris to Tokyo, each destination has left an indelible mark on my personal and 
              professional growth. Join me as I share my story and the incredible places I&apos;ve been.
            </p>
          </div>

          {/* Carrousel à droite */}
          <div className="relative">
            <Slider {...sliderSettings}>
              {mobilityData.map((location, index) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                  <Image
                    src={location.image}
                    alt={location.city}
                    className="w-full h-100 object-cover rounded-xl transition-transform duration-300 hover:scale-110"
                    width={500}
                    height={300}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Cartes de mobilité (optionnel, reste inchangé) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
          {mobilityData.map((location, index) => (
            <InternationalMobilityCard key={index} location={location} />
          ))}
        </div>
      </SimpleLayout>
    </>
  );
}
