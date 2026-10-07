import { Container } from '@/components/Container'
import { LocaleLink } from '@/components/LocaleLink'
import siteMetadata from '@/data/siteMetadata'
import { useT, type I18n } from '@/i18n'

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <LocaleLink
      href={href}
      className="rounded-lg py-2 transition-colors duration-200 ease-smooth hover:text-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:hover:text-accent-400"
    >
      {children}
    </LocaleLink>
  )
}

type FooterNavLink = {
  name: I18n<string>
  href: string
}

export function Footer() {
  const t = useT()

  return (
    <footer className="mt-8">
      <Container.Outer>
        <div className="border-t border-primaryText-200/70 pb-16 pt-8 dark:border-primaryText-800">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-primaryText-600 dark:text-primaryText-400">
                {siteMetadata.siteNavLinks
                  .filter((link) => link.href !== '#')
                  .map((link: FooterNavLink) => (
                    <NavLink key={link.href} href={link.href}>
                      {t(link.name)}
                    </NavLink>
                  ))}
              </div>
              <p className="text-center text-sm text-primaryText-500 sm:text-left">
                &copy; {new Date().getFullYear()} Cedrick Tchakonte.{' '}
                {t({ en: 'All rights reserved.', fr: 'Tous droits réservés.' })}
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
