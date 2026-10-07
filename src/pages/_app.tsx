import { useEffect, useRef } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MotionConfig } from 'framer-motion'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LanguageProvider, getLocaleFromPath, stripLocale } from '@/i18n'
import siteMetadata from '@/data/siteMetadata'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious<T>(value: T) {
  let ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }: AppProps) {
  let previousPathname = usePrevious(router.pathname)

  // Build per-locale alternate URLs for SEO (trailing slashes match the static export).
  const isErrorPage = router.pathname === '/404' || router.pathname === '/_error'
  const siteUrl = siteMetadata.siteUrl.replace(/\/$/, '')
  const pathname = stripLocale(router.pathname)
  const path = pathname === '/' ? '/' : `${pathname}/`
  const enUrl = `${siteUrl}${path}`
  const frUrl = `${siteUrl}/fr${path}`
  const canonical = getLocaleFromPath(router.pathname) === 'fr' ? frUrl : enUrl

  return (
    <LanguageProvider>
      {!isErrorPage && (
        <Head>
          <link rel="canonical" href={canonical} />
          <link rel="alternate" hrefLang="en" href={enUrl} />
          <link rel="alternate" hrefLang="fr" href={frUrl} />
          <link rel="alternate" hrefLang="x-default" href={enUrl} />
        </Head>
      )}
      {/* Every framer-motion animation honours the OS "reduce motion" setting. */}
      <MotionConfig reducedMotion="user">
        <div className="flex min-h-screen w-full flex-col bg-primaryText-50 dark:bg-primaryText-950">
          <Header />

          <main className="flex-grow">
            <Component previousPathname={previousPathname} {...pageProps} />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LanguageProvider>
  )
}
