import React from 'react';
import Image, { type StaticImageData } from 'next/image';

type Location = {
  city: string;
  country: string;
  image: string | StaticImageData;
  description: string;
  startDate: string;
  endDate: string;
  university?: string;
};

type InternationalMobilityCardProps = {
  location: Location;
};

const InternationalMobilityCard = ({ location }: InternationalMobilityCardProps) => {
  return (
    <div className="relative w-full h-80 bg-white dark:bg-primaryText-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group border border-primaryText-200/50 dark:border-primaryText-700/50">
      {/* Image */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image
          src={location.image}
          alt={location.city}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>

      {/* Overlay avec la ville et le pays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-black/30 flex flex-col justify-between p-4">
        <div className="z-10">
          <h3 className="text-2xl font-semibold text-white drop-shadow-lg">
            {location.city}, {location.country}
          </h3>
          {location.university && (
            <p className="mt-1 text-sm text-white/90 drop-shadow">{location.university}</p>
          )}
        </div>
        <div className="absolute top-4 right-4 text-sm text-white bg-black/60 px-2 py-1 rounded-lg backdrop-blur-sm">
          {location.startDate} - {location.endDate}
        </div>
      </div>

      {/* Description de la localisation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-primaryText-900/95 backdrop-blur-sm p-4 rounded-b-2xl shadow-lg border-t border-primaryText-200/50 dark:border-primaryText-700/50">
        <h4 className="font-semibold text-lg text-primaryText-800 dark:text-primaryText-100">
          About {location.city}
        </h4>
        <p className="text-sm text-primaryText-600 dark:text-primaryText-400 mt-2 leading-relaxed">
          {location.description}
        </p>
      </div>
    </div>
  );
};

export default InternationalMobilityCard;
