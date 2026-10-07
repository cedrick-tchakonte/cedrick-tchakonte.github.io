import { motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useT } from '@/i18n'
import { fadeUp, reveal } from '@/lib/motion'

const CallToAction = () => {
  const t = useT()

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <motion.div
          variants={fadeUp}
          {...reveal}
          className="rounded-2xl border border-primaryText-200/70 bg-white p-6 shadow-sm sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:p-10 dark:border-primaryText-800 dark:bg-primaryText-900"
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            <span className="block text-primaryText-900 dark:text-primaryText-50">
              {t({ en: 'Hiring me?', fr: 'Vous recrutez ?' })}
            </span>
            <span className="block text-accent-600 dark:text-accent-400">
              {t({
                en: 'This is an invitation to explore.',
                fr: "C'est une invitation à découvrir mon profil.",
              })}
            </span>
          </h2>
          <div className="mt-6 flex lg:mt-0 lg:flex-shrink-0">
            <Button href="/contact">
              {t({ en: 'Discuss with me now!', fr: 'Discutons-en !' })}
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 ease-smooth motion-safe:group-hover:translate-x-0.5"
              >
                <path
                  d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default CallToAction
