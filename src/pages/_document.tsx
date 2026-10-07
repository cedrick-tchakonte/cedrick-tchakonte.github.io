import { Head, Html, Main, NextScript } from 'next/document'
import type { DocumentProps } from 'next/document'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document(props: DocumentProps) {
  const page = props.__NEXT_DATA__?.page ?? '/'
  const locale = page === '/fr' || page.startsWith('/fr/') ? 'fr' : 'en'
  return (
    <Html className="h-full antialiased motion-safe:scroll-smooth" lang={locale}>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#000000" />
        {/* Browser UI color matches the page background (zinc-50 / zinc-950). */}
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fafafa"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#09090b"
        />
      </Head>

      <body className="flex h-full flex-col bg-primaryText-50 text-primaryText-900 dark:bg-primaryText-950 dark:text-primaryText-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
