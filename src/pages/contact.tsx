import emailjs from '@emailjs/browser'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import { RiPhoneLine, RiMailLine } from 'react-icons/ri'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'
import { fadeUp, reveal, stagger } from '@/lib/motion'

const surfaceClass =
  'rounded-2xl border border-primaryText-200/70 bg-white p-6 shadow-sm dark:border-primaryText-800 dark:bg-primaryText-900 sm:p-8'

const iconTileClass =
  'flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 ring-1 ring-inset ring-accent-500/20 dark:bg-accent-400/10 dark:text-accent-400 dark:ring-accent-400/20'

const socialButtonClass =
  'flex rounded-full bg-primaryText-100 p-2.5 text-primaryText-900 transition-colors duration-200 ease-smooth hover:bg-primaryText-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:bg-primaryText-800 dark:text-primaryText-100 dark:hover:bg-primaryText-700'

const labelClass = 'block text-sm font-medium text-primaryText-900 dark:text-primaryText-100'

const inputClass =
  'mt-2 block w-full rounded-xl border-primaryText-300 bg-white px-4 py-2.5 text-primaryText-900 shadow-sm transition-colors duration-200 ease-smooth placeholder:text-primaryText-400 focus:border-accent-500 focus:ring-accent-500 dark:border-primaryText-700 dark:bg-primaryText-900 dark:text-primaryText-100'

const Contact = () => {
  const t = useT()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  // handle first name change
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
  }

  // handle last name change
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }

  // handle email change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  // handle phone change
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  // handle subject change
  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value)
  }

  // handle message change
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const templateParams = {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_USER_ID
      )
      .then(
        () => {
          setStatus('success')
          setFirstName('')
          setLastName('')
          setEmail('')
          setPhone('')
          setSubject('')
          setMessage('')
        },
        () => {
          setStatus('error')
        }
      )
  }

  return (
    <>
      <Head>
        <title>{`${t({ en: 'Contact', fr: 'Contact' })} - ${siteMetadata.author}`}</title>
        <meta name="description" content={t({ en: 'Contact', fr: 'Contact' })} />
      </Head>
      <SimpleLayout
        title={t(siteMetadata.contactTitle)}
        intro={t(siteMetadata.contactSubtitle)}
      >
        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="sr-only">
            {t({ en: 'Contact us', fr: 'Nous contacter' })}
          </h2>
          <motion.div
            className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8"
            variants={stagger}
            {...reveal}
          >
            {/* Contact information */}
            <motion.div variants={fadeUp} className={clsx(surfaceClass, 'lg:col-span-2')}>
              <h3 className="text-lg font-semibold text-primaryText-900 dark:text-primaryText-50">
                {t({ en: 'Contact information', fr: 'Coordonnées' })}
              </h3>
              <p className="mt-4 text-base leading-7 text-primaryText-600 dark:text-primaryText-400">
                {t({
                  en: 'Please contact me with any questions or comments you may have. You can also schedule a service through the form below.',
                  fr: "N'hésitez pas à me contacter pour toute question ou remarque. Vous pouvez également me solliciter via le formulaire ci-dessous.",
                })}
              </p>
              <dl className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <dt className={iconTileClass}>
                    <span className="sr-only">
                      {t({ en: 'Phone number', fr: 'Numéro de téléphone' })}
                    </span>
                    <RiPhoneLine className="h-5 w-5" aria-hidden="true" />
                  </dt>
                  <dd className="min-w-0 break-words text-base text-primaryText-700 dark:text-primaryText-300">
                    {siteMetadata.phoneNumber}
                  </dd>
                </div>
                <div className="flex items-center gap-4">
                  <dt className={iconTileClass}>
                    <span className="sr-only">{t({ en: 'Email', fr: 'Adresse e-mail' })}</span>
                    <RiMailLine className="h-5 w-5" aria-hidden="true" />
                  </dt>
                  <dd className="whitespace-nowrap text-base text-primaryText-700 dark:text-primaryText-300">
                    {siteMetadata.email}
                  </dd>
                </div>
              </dl>
              <ul role="list" className="mt-8 flex gap-3">
                <li>
                  <Link className={socialButtonClass} href={siteMetadata.socials.facebook}>
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link className={socialButtonClass} href={siteMetadata.socials.github}>
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link className={socialButtonClass} href={siteMetadata.socials.x}>
                    <span className="sr-only">X</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact form */}
            <motion.div variants={fadeUp} className={clsx(surfaceClass, 'lg:col-span-3')}>
              <h3 className="text-lg font-semibold text-primaryText-900 dark:text-primaryText-50">
                {t({ en: 'Send me a message', fr: 'Envoyez-moi un message' })}
              </h3>
              <form
                onSubmit={handleOnSubmit}
                method="POST"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6"
              >
                <div>
                  <label htmlFor="first-name" className={labelClass}>
                    {t({ en: 'First name', fr: 'Prénom' })}
                  </label>
                  <input
                    value={firstName}
                    onChange={handleFirstNameChange}
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className={labelClass}>
                    {t({ en: 'Last name', fr: 'Nom' })}
                  </label>
                  <input
                    value={lastName}
                    onChange={handleLastNameChange}
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    {t({ en: 'Email', fr: 'E-mail' })}
                  </label>
                  <input
                    value={email}
                    onChange={handleEmailChange}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={inputClass}
                  />
                </div>
                <div>
                  <div className="flex justify-between gap-4">
                    <label htmlFor="phone" className={labelClass}>
                      {t({ en: 'Phone', fr: 'Téléphone' })}
                    </label>
                    <span id="phone-optional" className="text-sm text-primaryText-500">
                      {t({ en: 'Optional', fr: 'Optionnel' })}
                    </span>
                  </div>
                  <input
                    value={phone}
                    onChange={handlePhoneChange}
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className={inputClass}
                    aria-describedby="phone-optional"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className={labelClass}>
                    {t({ en: 'Subject', fr: 'Objet' })}
                  </label>
                  <input
                    value={subject}
                    onChange={handleSubjectChange}
                    type="text"
                    name="subject"
                    id="subject"
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between gap-4">
                    <label htmlFor="message" className={labelClass}>
                      {t({ en: 'Message', fr: 'Message' })}
                    </label>
                    <span id="message-max" className="text-sm text-primaryText-500">
                      {t({ en: 'Max. 500 characters', fr: 'Max. 500 caractères' })}
                    </span>
                  </div>
                  <textarea
                    value={message}
                    onChange={handleMessageChange}
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={500}
                    className={inputClass}
                    aria-describedby="message-max"
                  />
                </div>
                <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-end sm:gap-4">
                  <p
                    aria-live="polite"
                    className={clsx(
                      'text-sm',
                      status === 'success' && 'text-green-600 dark:text-green-400',
                      status === 'error' && 'text-red-600 dark:text-red-400'
                    )}
                  >
                    {status === 'success' &&
                      t({
                        en: 'Thanks! Your message has been sent.',
                        fr: 'Merci ! Votre message a bien été envoyé.',
                      })}
                    {status === 'error' &&
                      t({
                        en: 'Something went wrong. Please try again or email me directly.',
                        fr: "Une erreur est survenue. Veuillez réessayer ou m'écrire directement par e-mail.",
                      })}
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    aria-busy={status === 'sending'}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 ease-smooth hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-accent-600 sm:w-auto"
                  >
                    {status === 'sending' && (
                      <svg
                        className="h-4 w-4 motion-safe:animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                    )}
                    {status === 'sending'
                      ? t({ en: 'Sending…', fr: 'Envoi…' })
                      : t({ en: 'Submit', fr: 'Envoyer' })}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </section>
      </SimpleLayout>
    </>
  )
}

export default Contact
