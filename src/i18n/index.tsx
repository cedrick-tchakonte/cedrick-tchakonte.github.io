import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Locale = 'en' | 'fr'

export const LOCALES: Locale[] = ['en', 'fr']
export const DEFAULT_LOCALE: Locale = 'en'

/** A value provided in both supported languages. */
export type I18n<T> = { en: T; fr: T }

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

const STORAGE_KEY = 'locale'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  // Restore the saved language on mount (client only, avoids hydration mismatch).
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'fr') {
      setLocaleState(stored)
    }
  }, [])

  // Keep <html lang> in sync for accessibility / SEO.
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === 'en' ? 'fr' : 'en'
      window.localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

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
