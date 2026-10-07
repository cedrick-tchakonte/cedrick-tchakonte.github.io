import { FaCalendarAlt } from 'react-icons/fa'

import { Card } from '@/components/Card'
import { useT } from '@/i18n'

interface Certification {
  name: string
  issuer: string
  date: string
  description: string
  logo: string
  tags?: string[]
  verificationLink?: string
}

/** Certification in the shared card family. Scroll reveal is owned by the page grid. */
const CertificationCard = ({
  certification,
}: {
  certification: Certification
}) => {
  const t = useT()

  return (
    <Card className="h-full">
      <Card.Logo
        src={certification.logo}
        alt={`${certification.issuer} logo`}
      />

      <Card.Title className="mt-6 line-clamp-2">
        {certification.name}
      </Card.Title>
      <Card.Subtitle>{certification.issuer}</Card.Subtitle>
      <Card.Meta className="mt-2">
        <Card.MetaItem icon={FaCalendarAlt}>{certification.date}</Card.MetaItem>
      </Card.Meta>

      <Card.Description className="mt-4 line-clamp-3">
        {certification.description}
      </Card.Description>

      {certification.tags && certification.tags.length > 0 && (
        <ul role="list" className="mt-4 flex flex-wrap gap-2">
          {certification.tags.slice(0, 4).map((tag, index) => (
            <li key={index}>
              <Card.Tag>{tag}</Card.Tag>
            </li>
          ))}
          {certification.tags.length > 4 && (
            <li>
              <Card.Tag>+{certification.tags.length - 4}</Card.Tag>
            </li>
          )}
        </ul>
      )}

      {certification.verificationLink && (
        <div className="mt-auto pt-6">
          <Card.Cta
            href={certification.verificationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t({ en: 'Verify certification', fr: 'Vérifier la certification' })}
          </Card.Cta>
        </div>
      )}
    </Card>
  )
}

export default CertificationCard
