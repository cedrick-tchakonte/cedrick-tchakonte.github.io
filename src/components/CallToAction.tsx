import Link from 'next/link'
import { useT } from '@/i18n'

const CallToAction = () => {
  const t = useT()

  return (
    <div className="bg-accent-50 dark:bg-accent-900/30">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-primaryText-900 md:text-4xl">
          <span className="block text-primaryText-800 dark:text-primaryText-100">
            {t({ en: 'Hiring me?', fr: 'Vous recrutez ?' })}
          </span>
          <span className="block text-accent-600 dark:text-accent-400">
            {t({
              en: 'This is an invitation to explore.',
              fr: "C'est une invitation à découvrir mon profil.",
            })}
          </span>
        </h2>
        <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-accent-500 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105"
            >
              {t({ en: 'Discuss with me now!', fr: 'Discutons-en !' })}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
