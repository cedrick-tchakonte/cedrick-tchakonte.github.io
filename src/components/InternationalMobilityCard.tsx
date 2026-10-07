import React from 'react'
import Image, { type StaticImageData } from 'next/image'
import { FaCalendarAlt } from 'react-icons/fa'

import { Card } from '@/components/Card'
import { useT } from '@/i18n'

type Location = {
  city: string
  country: string
  image: string | StaticImageData
  description: string
  startDate: string
  endDate: string
  university?: string
  credit?: string
}

type InternationalMobilityCardProps = {
  location: Location
}

/** Mobility place in the shared card family. Scroll reveal is owned by the page grid. */
const InternationalMobilityCard = ({
  location,
}: InternationalMobilityCardProps) => {
  const t = useT()

  return (
    <Card className="h-full">
      {/* Photo */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-primaryText-100 ring-1 ring-primaryText-900/5 dark:bg-primaryText-800 dark:ring-white/10">
        <Image
          src={location.image}
          alt={location.city}
          className="object-cover transition-transform duration-500 ease-smooth motion-safe:group-hover:scale-[1.02]"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>

      {/* City, place and dates */}
      <Card.Title className="mt-6">
        {location.city}, {location.country}
      </Card.Title>
      {location.university && (
        <Card.Subtitle>{location.university}</Card.Subtitle>
      )}
      <Card.Meta className="mt-2">
        <Card.MetaItem icon={FaCalendarAlt}>
          {location.startDate === location.endDate
            ? location.startDate
            : `${location.startDate} - ${location.endDate}`}
        </Card.MetaItem>
      </Card.Meta>

      {/* About the place */}
      <h4 className="mt-5 text-sm font-semibold text-primaryText-900 dark:text-primaryText-50">
        {t({ en: 'About', fr: 'À propos de' })} {location.city}
      </h4>
      <p className="mt-1 text-sm leading-6 text-primaryText-600 dark:text-primaryText-400">
        {location.description}
      </p>

      {location.credit && (
        <p className="mt-auto pt-4 text-xs text-primaryText-500">
          {location.credit}
        </p>
      )}
    </Card>
  )
}

export default InternationalMobilityCard
