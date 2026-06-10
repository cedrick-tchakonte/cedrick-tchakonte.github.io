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

function normalizeLocale(locale?: string): Locale {
  return locale === 'fr' ? 'fr' : 'en'
}

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  toggleLocale: () => {},
})

/**
 * Language state is driven by the URL locale (Next.js i18n routing): the English
 * site lives at `/` and the French site at `/fr/...`. Switching language simply
 * navigates to the same page in the other locale, so it stays a one-click toggle
 * while giving each language its own shareable, indexable URLs.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const locale = normalizeLocale(router.locale)

  // Keep <html lang> in sync for accessibility / SEO.
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback(
    (next: Locale) => {
      router.push(router.asPath, router.asPath, { locale: next, scroll: false })
    },
    [router]
  )

  const toggleLocale = useCallback(() => {
    const next: Locale = locale === 'en' ? 'fr' : 'en'
    router.push(router.asPath, router.asPath, { locale: next, scroll: false })
  }, [router, locale])

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale]
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
