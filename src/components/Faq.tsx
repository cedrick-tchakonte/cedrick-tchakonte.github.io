import clsx from 'clsx'
import { Disclosure } from '@headlessui/react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'
import { faqs } from '@/content/faq'
import { EASE, fadeUp, reveal } from '@/lib/motion'

const panel = {
  collapsed: { height: 0, opacity: 0 },
  open: { height: 'auto', opacity: 1 },
}

const Faq = () => {
  const t = useT()
  // Height is not a transform, so MotionConfig's reducedMotion does not cover it.
  const reduceMotion = useReducedMotion()
  const panelTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: EASE }

  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <motion.div variants={fadeUp} {...reveal}>
            <SectionHeading
              align="center"
              eyebrow={t({ en: 'FAQ', fr: 'FAQ' })}
              title={t({
                en: 'Frequently Asked Questions',
                fr: 'Foire aux questions',
              })}
              subtitle={t({
                en: 'Here are some common questions about my work in AI and robotics.',
                fr: 'Voici quelques questions fréquentes sur mon travail en IA et en robotique.',
              })}
            />
          </motion.div>

          <motion.dl
            variants={fadeUp}
            {...reveal}
            className="mt-10 divide-y divide-primaryText-200/70 overflow-hidden rounded-2xl border border-primaryText-200/70 bg-white shadow-sm dark:divide-primaryText-800 dark:border-primaryText-800 dark:bg-primaryText-900"
          >
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={index} defaultOpen={index === 0}>
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 ease-smooth hover:bg-primaryText-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-500 dark:hover:bg-primaryText-800/50">
                        <span className="text-base font-semibold text-primaryText-900 dark:text-primaryText-50">
                          {t(faq.question)}
                        </span>
                        <FaChevronDown
                          className={clsx(
                            'h-3.5 w-3.5 flex-none text-primaryText-400 transition-transform duration-200 ease-smooth motion-reduce:transition-none',
                            open && 'rotate-180'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                    </dt>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.dd
                          key="answer"
                          className="overflow-hidden"
                          variants={panel}
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          transition={panelTransition}
                        >
                          <Disclosure.Panel
                            static
                            className="px-6 pb-5 text-base leading-7 text-primaryText-600 dark:text-primaryText-400"
                          >
                            {t(faq.answer)}
                          </Disclosure.Panel>
                        </motion.dd>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Disclosure>
            ))}
          </motion.dl>

          <p className="mt-8 text-center text-primaryText-600 dark:text-primaryText-400">
            {t({
              en: "Can't find the answer you're looking for? Reach out to",
              fr: 'Vous ne trouvez pas la réponse que vous cherchez ? Contactez',
            })}{' '}
            <a
              href={`mailto:${siteMetadata.email}`}
              className="font-medium text-accent-600 transition-colors duration-200 ease-smooth hover:text-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:text-accent-400 dark:hover:text-accent-300"
            >
              {t({ en: 'me', fr: 'moi' })}
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Faq
