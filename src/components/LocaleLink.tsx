import { forwardRef } from 'react'
import Link from 'next/link'

import { localizeHref, useLocale } from '@/i18n'

type LocaleLinkProps = React.ComponentPropsWithoutRef<typeof Link>

// next/link that keeps internal links in the current language (`/about` -> `/fr/about`)
export const LocaleLink = forwardRef<HTMLAnchorElement, LocaleLinkProps>(
  function LocaleLink({ href, ...props }, ref) {
    const { locale } = useLocale()
    const localizedHref =
      typeof href === 'string'
        ? localizeHref(href, locale)
        : href.pathname
        ? { ...href, pathname: localizeHref(href.pathname, locale) }
        : href

    return <Link ref={ref} href={localizedHref} {...props} />
  }
)
