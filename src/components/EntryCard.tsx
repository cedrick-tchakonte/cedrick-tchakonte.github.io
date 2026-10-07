import type { StaticImageData } from 'next/image'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

import { Card } from '@/components/Card'

export type EntryCardProps = {
  /** Logo / brand mark shown in the badge. */
  logo: StaticImageData
  logoAlt: string
  /** Full heading, e.g. "Machine Learning Research Intern at Stellantis". */
  title: string
  date: string
  location: string
  /** Bullet points describing the entry. */
  bullets: string[]
  link: { url: string; label: string }
}

/**
 * Shared timeline/entry card used by the Experience and Volunteer pages so both
 * share one consistent layout (logo tile, title, date + location meta, bullet
 * list, source link). The whole card is the link. Scroll reveal is owned by the
 * page list (`stagger` + `fadeUp`), so the card itself does not animate in.
 */
export function EntryCard({
  logo,
  logoAlt,
  title,
  date,
  location,
  bullets,
  link,
}: EntryCardProps) {
  return (
    <Card className="h-full">
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-5">
        <Card.Logo src={logo} alt={logoAlt} />
        <div className="min-w-0">
          <Card.Title href={link.url}>{title}</Card.Title>
          <Card.Meta className="mt-2">
            <Card.MetaItem icon={FaCalendarAlt}>{date}</Card.MetaItem>
            <Card.MetaItem icon={FaMapMarkerAlt}>{location}</Card.MetaItem>
          </Card.Meta>
        </div>
      </div>

      <Card.List items={bullets} className="mt-5" />

      <Card.Cta className="mt-auto pt-6">{link.label}</Card.Cta>
    </Card>
  )
}
