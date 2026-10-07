import type { StaticImageData } from 'next/image'
import { FaCalendarAlt } from 'react-icons/fa'

import { Card } from '@/components/Card'

type Education = {
  degree: string
  institution: string
  logo?: string | StaticImageData
  startDate: string
  endDate: string
  description: string
  highlights?: string[]
}

type BackgroundEducationCardProps = {
  education: Education
}

/** Education entry in the shared card family. Scroll reveal is owned by the page list. */
const BackgroundEducationCard = ({
  education,
}: BackgroundEducationCardProps) => {
  return (
    <Card className="h-full">
      {/* Header: logo tile, then degree / institution / dates (stacks on mobile) */}
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-5">
        {education.logo && (
          <Card.Logo
            src={education.logo}
            alt={`${education.institution} logo`}
          />
        )}
        <div className="min-w-0">
          <Card.Title>{education.degree}</Card.Title>
          <Card.Subtitle>{education.institution}</Card.Subtitle>
          <Card.Meta className="mt-2">
            <Card.MetaItem icon={FaCalendarAlt}>
              {education.startDate} - {education.endDate}
            </Card.MetaItem>
          </Card.Meta>
        </div>
      </div>

      <Card.Description className="mt-5">
        {education.description}
      </Card.Description>

      {education.highlights && education.highlights.length > 0 && (
        <Card.List items={education.highlights} className="mt-4" />
      )}
    </Card>
  )
}

export default BackgroundEducationCard
