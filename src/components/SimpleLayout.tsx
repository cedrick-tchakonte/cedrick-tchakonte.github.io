import { Container } from '@/components/Container'
import { motion } from 'framer-motion'

type SimpleLayoutProps = {
  title: React.ReactNode
  intro: React.ReactNode
  children: React.ReactNode
}

export function SimpleLayout({ title, intro, children }: SimpleLayoutProps) {
  return (
    <div className="min-h-screen py-16 sm:py-20">
      <Container className="px-2 sm:px-4">
        <header className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-primaryText-600 dark:text-primaryText-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {intro}
          </motion.p>
        </header>
        <motion.div
          className="mt-8 sm:mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </Container>
    </div>
  )
}
