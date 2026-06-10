import siteMetadata from '@/data/siteMetadata'
import { Disclosure, Transition } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import { SectionHeading } from '@/components/SectionHeading'
import { useT } from '@/i18n'
import { faqs } from '@/content/faq'

const Faq = () => {
  const t = useT()

  return (
    <div className="py-16 sm:py-20 bg-primaryText-50 dark:bg-primaryText-900">
      <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow={t({ en: 'FAQ', fr: 'FAQ' })}
          title={t({ en: 'Frequently Asked Questions', fr: 'Foire aux questions' })}
          subtitle={t({
            en: 'Here are some common questions about my work in AI and robotics.',
            fr: "Voici quelques questions fréquentes sur mon travail en IA et en robotique.",
          })}
        />

        <dl className="mt-10 overflow-hidden bg-white border divide-y shadow-sm rounded-2xl divide-primaryText-200/70 border-primaryText-200/60 dark:divide-primaryText-700/50 dark:border-primaryText-700/50 dark:bg-primaryText-800">
          {faqs.map((faq, index) => (
            <Disclosure as="div" key={index} defaultOpen={index === 0}>
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex items-center justify-between w-full gap-4 px-6 py-5 text-left transition-colors hover:bg-accent-50/50 dark:hover:bg-accent-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-inset">
                      <span className="text-base font-semibold text-primaryText-900 dark:text-primaryText-100">
                        {t(faq.question)}
                      </span>
                      <FaChevronDown
                        className={`h-4 w-4 flex-shrink-0 text-accent-500 transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="opacity-0 -translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition duration-150 ease-in"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-1"
                  >
                    <Disclosure.Panel
                      as="dd"
                      className="px-6 pb-5 -mt-1 text-base leading-relaxed text-primaryText-600 dark:text-primaryText-400"
                    >
                      {t(faq.answer)}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </dl>

        <p className="mt-8 text-center text-primaryText-600 dark:text-primaryText-400">
          {t({
            en: "Can't find the answer you're looking for? Reach out to",
            fr: 'Vous ne trouvez pas la réponse que vous cherchez ? Contactez',
          })}{' '}
          <a
            href={`mailto:${siteMetadata.email}`}
            className="font-medium text-accent-600 hover:text-accent-500"
          >
            {t({ en: 'me', fr: 'moi' })}
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default Faq
