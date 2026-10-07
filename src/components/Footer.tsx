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
      className="transition hover:text-accent-500 dark:hover:text-accent-400"
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
    <footer className="mt-16">
      <Container.Outer>
        <div className="pt-10 pb-16 border-t border-primaryText-100 dark:border-primaryText-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-primaryText-800 dark:text-primaryText-200">
                {siteMetadata.siteNavLinks
                  .filter((link) => link.href !== '#')
                  .map((link: FooterNavLink) => (
                    <NavLink key={link.href} href={link.href}>
                      {t(link.name)}
                    </NavLink>
                  ))}
              </div>
              <p className="text-sm text-primaryText-400 dark:text-primaryText-500">
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
