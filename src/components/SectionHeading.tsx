import clsx from 'clsx'

type SectionHeadingProps = {
  /** Small accent label above the title. */
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: 'left' | 'center'
  /** 2 = major section heading (default), 3 = subsection heading. */
  level?: 2 | 3
  className?: string
}

/**
 * Shared section heading used across pages so every heading of the same level
 * looks identical (one consistent typographic "voice" per level). Level 2 is a
 * major section title; level 3 a subsection title. Supports an optional accent
 * eyebrow and subtitle, left- or center-aligned.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  level = 2,
  className,
}: SectionHeadingProps) {
  const Heading = level === 2 ? 'h2' : 'h3'
  const titleClass =
    level === 2
      ? 'text-2xl font-semibold tracking-tight sm:text-3xl'
      : 'text-xl font-semibold tracking-tight'

  return (
    <div className={clsx(align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p className="text-sm font-semibold text-accent-600 dark:text-accent-400">
          {eyebrow}
        </p>
      )}
      <Heading
        className={clsx(
          titleClass,
          'text-primaryText-900 dark:text-primaryText-50',
          eyebrow && 'mt-2'
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={clsx(
            'mt-4 max-w-2xl text-base text-primaryText-600 dark:text-primaryText-400',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
