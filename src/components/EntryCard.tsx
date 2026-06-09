import Image, { type StaticImageData } from 'next/image'
import { Card } from '@/components/Card'
import { RiLinksLine } from 'react-icons/ri'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

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
 * share one consistent layout (logo badge, title, date + location meta, bullet
 * list, source link). Bullets render as a real <ul> for valid, accessible markup.
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
    <Card>
      <div className="relative z-10 flex items-center justify-center w-12 h-12 p-2 overflow-hidden bg-white rounded-full shadow-md shadow-primaryText-800/5 ring-1 ring-primaryText-900/5 dark:bg-white dark:ring-0">
        <Image
          src={logo}
          alt={logoAlt}
          className="object-contain w-8 h-8"
          unoptimized
          width={32}
          height={32}
        />
      </div>

      <h2 className="mt-6 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
        <Card.Link href={link.url}>{title}</Card.Link>
      </h2>

      {/* Date and location */}
      <div className="relative z-30 mt-3 space-y-2">
        <p className="flex items-center text-sm text-primaryText-600 dark:text-primaryText-400">
          <FaCalendarAlt className="flex-none w-4 h-4 mr-2 text-accent-500" />
          {date}
        </p>
        <p className="flex items-center text-sm text-primaryText-600 dark:text-primaryText-400">
          <FaMapMarkerAlt className="flex-none w-4 h-4 mr-2 text-accent-500" />
          {location}
        </p>
      </div>

      <ul className="relative z-10 mt-4 space-y-2 text-base leading-7 text-primaryText-600 dark:text-primaryText-400 transition-colors duration-300 group-hover:text-primaryText-700 dark:group-hover:text-primaryText-300">
        {bullets.map((item, index) => (
          <li className="ml-4 list-disc" key={index}>
            {item}
          </li>
        ))}
      </ul>

      <div className="relative z-10 flex mt-6 text-sm font-medium transition text-primaryText-400 group-hover:text-accent-500 dark:text-primaryText-200">
        <RiLinksLine className="flex-none w-6 h-6" />
        <span className="ml-2">{link.label}</span>
      </div>
    </Card>
  )
}
