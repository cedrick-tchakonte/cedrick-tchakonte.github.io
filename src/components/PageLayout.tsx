import { Container } from '@/components/Container'
import { motion } from 'framer-motion'

type PageLayoutProps = {
  title: React.ReactNode
  subtitle?: React.ReactNode
  children: React.ReactNode
  className?: string
  showHeader?: boolean
  headerClassName?: string
}

export function PageLayout({
  title,
  subtitle,
  children,
  className = '',
  showHeader = true,
  headerClassName = '',
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen ${className}`}>
      {showHeader && (
        <motion.header
          className={`py-16 sm:py-20 ${headerClassName}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                className="text-4xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {title}
              </motion.h1>
              {subtitle && (
                <motion.p
                  className="mt-6 text-lg text-primaryText-600 dark:text-primaryText-400 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
          </Container>
        </motion.header>
      )}

      <motion.main
        className="pb-16 sm:pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Container>
          {children}
        </Container>
      </motion.main>
    </div>
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
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
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
    <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
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
      className={`group relative bg-white/50 dark:bg-primaryText-800/50 backdrop-blur-sm rounded-2xl p-8 border border-primaryText-200/50 dark:border-primaryText-700/50 hover:border-accent-300 dark:hover:border-accent-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-center w-12 h-12 text-white rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 group-hover:from-accent-600 group-hover:to-accent-700 transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-primaryText-800 dark:text-primaryText-100">
        {title}
      </h3>
      <p className="mt-4 text-base text-primaryText-600 dark:text-primaryText-400">
        {description}
      </p>
    </motion.div>
  )
}
