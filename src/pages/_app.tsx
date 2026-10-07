import { useEffect, useRef } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LanguageProvider, getLocaleFromPath, stripLocale } from '@/i18n'
import siteMetadata from '@/data/siteMetadata'

import Preloader from '@/components/Preloader'

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
      <Preloader />
      <div className="fixed flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-gradient-to-br from-primaryText-50 to-primaryText-100 ring-1 ring-primaryText-100 dark:from-primaryText-900 dark:to-primaryText-800 dark:ring-primaryText-300/20" />
        </div>
      </div>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-primaryText-50 to-primaryText-100 dark:from-primaryText-900 dark:to-primaryText-800">
        <Header />

        <main className="flex-grow">
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
