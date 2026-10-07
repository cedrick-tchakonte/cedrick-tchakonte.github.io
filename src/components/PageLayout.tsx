import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Container } from '@/components/Container'
import { fadeUp, stagger } from '@/lib/motion'

const pageTitleClass =
  'text-4xl font-bold tracking-tight text-primaryText-900 sm:text-5xl dark:text-primaryText-50'
const pageSubtitleClass =
  'mx-auto mt-4 max-w-2xl text-lg text-primaryText-600 dark:text-primaryText-400'

type PageLayoutProps = {
  title: React.ReactNode
  subtitle?: React.ReactNode
  children: React.ReactNode
  className?: string
  showHeader?: boolean
  headerClassName?: string
}

/**
 * Page shell with a centered title (H1) and subtitle; SimpleLayout reuses it.
 * The page enters once: title, subtitle, then content fade up in sequence
 * (see src/lib/motion.ts).
 */
export function PageLayout({
  title,
  subtitle,
  children,
  className = '',
  showHeader = true,
  headerClassName = '',
}: PageLayoutProps) {
  return (
    <motion.div
      className={clsx('py-16 sm:py-20', className)}
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      {showHeader && (
        <Container>
          <header className={clsx('mx-auto max-w-3xl text-center', headerClassName)}>
            <motion.h1 variants={fadeUp} className={pageTitleClass}>
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p variants={fadeUp} className={pageSubtitleClass}>
                {subtitle}
              </motion.p>
            )}
          </header>
        </Container>
      )}

      <motion.div variants={fadeUp} className={clsx(showHeader && 'mt-12 sm:mt-16')}>
        <Container>{children}</Container>
      </motion.div>
    </motion.div>
  )
}

type SectionLayoutProps = {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionLayout({
  title,
  subtitle,
  children,
  className = '',
  id = '',
}: SectionLayoutProps) {
  return (
    <section id={id || undefined} className={clsx('py-16 sm:py-20', className)}>
      <Container>
        {(title || subtitle) && (
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-primaryText-900 sm:text-3xl dark:text-primaryText-50">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-primaryText-600 dark:text-primaryText-400">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}

type CardGridProps = {
  children: React.ReactNode
  className?: string
}

export function CardGrid({ children, className = '' }: CardGridProps) {
  return (
    <div className={clsx('grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8', className)}>
      {children}
    </div>
  )
}

type FeatureCardProps = {
  icon: React.ComponentType<{ className?: string }>
  title: React.ReactNode
  description: React.ReactNode
  className?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={clsx(
        'group relative rounded-2xl border border-primaryText-200/70 bg-white p-6 shadow-sm sm:p-8 dark:border-primaryText-800 dark:bg-primaryText-900',
        className
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 ring-1 ring-inset ring-accent-500/20 dark:bg-accent-400/10 dark:text-accent-400 dark:ring-accent-400/20">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-primaryText-900 dark:text-primaryText-50">
        {title}
      </h3>
      <p className="mt-2 text-base text-primaryText-600 dark:text-primaryText-400">
        {description}
      </p>
    </motion.div>
  )
}
