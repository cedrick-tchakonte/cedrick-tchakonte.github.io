import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react'
import { useRouter } from 'next/router'

export type Locale = 'en' | 'fr'

export const LOCALES: Locale[] = ['en', 'fr']
export const DEFAULT_LOCALE: Locale = 'en'

/** A value provided in both supported languages. */
export type I18n<T> = { en: T; fr: T }

const FR_PREFIX = '/fr'

/** Returns the locale encoded in a path: `/fr` and `/fr/...` are French. */
export function getLocaleFromPath(path: string): Locale {
  return path === FR_PREFIX || path.startsWith(`${FR_PREFIX}/`) ? 'fr' : 'en'
}

/** Removes the `/fr` prefix from a path: `/fr/about` -> `/about`, `/fr` -> `/`. */
export function stripLocale(path: string): string {
  if (getLocaleFromPath(path) !== 'fr') return path
  return path.slice(FR_PREFIX.length) || '/'
}

/**
 * Prefixes an internal href with the locale: `/about` -> `/fr/about`, `/` -> `/fr`.
 * Only hrefs starting with a single `/` are touched; `#...`, `mailto:`,
 * `http(s)://` and protocol-relative `//` links are returned unchanged.
 */
export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith('/') || href.startsWith('//')) return href
  const path = href.replace(/^\/fr(?=$|[/?#])/, '') || '/'
  if (locale === DEFAULT_LOCALE) return path
  return path === '/' || /^\/[?#]/.test(path)
    ? `${FR_PREFIX}${path.slice(1)}`
    : `${FR_PREFIX}${path}`
}

type LanguageContextValue = {
  locale: Locale
  /** Current route without the locale prefix (e.g. `/about` on `/fr/about`). */
  pathname: string
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: DEFAULT_LOCALE,
  pathname: '/',
  setLocale: () => {},
  toggleLocale: () => {},
})

/**
 * Language state is driven by the route: the English site lives at `/` and the
 * French site at `/fr/...` (real pages under src/pages/fr, so the site can be
 * statically exported). Switching language navigates to the counterpart page,
 * giving each language its own shareable, indexable URLs.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const locale = getLocaleFromPath(router.pathname)
  const pathname = stripLocale(router.pathname)

  // Keep <html lang> in sync for accessibility / SEO.
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return
      // The error pages have no French counterpart: fall back to the home page.
      const target = pathname === '/404' || pathname === '/_error' ? '/' : pathname
      const hashIndex = router.asPath.indexOf('#')
      const hash = hashIndex === -1 ? '' : router.asPath.slice(hashIndex)
      router.push(`${localizeHref(target, next)}${hash}`, undefined, {
        scroll: false,
      })
    },
    [router, locale, pathname]
  )

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'fr' : 'en')
  }, [setLocale, locale])

  const value = useMemo(
    () => ({ locale, pathname, setLocale, toggleLocale }),
    [locale, pathname, setLocale, toggleLocale]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLocale() {
  return useContext(LanguageContext)
}

/**
 * Returns a translator that resolves a bilingual value to the current language.
 * Usage: const t = useT(); t({ en: 'Hello', fr: 'Bonjour' })
 */
export function useT() {
  const { locale } = useLocale()
  return useCallback(<T,>(value: I18n<T>): T => value[locale], [locale])
}
