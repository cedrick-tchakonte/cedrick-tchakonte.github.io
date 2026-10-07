import { Fragment, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Popover, Transition, Menu } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { LocaleLink } from '@/components/LocaleLink'
import { useLocale, useT, type I18n } from '@/i18n'
import avatarImage from '@/images/avatar.jpg'
import {
  CloseIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
} from '@/images/icons/NavIcons'
import siteMetadata from '@/data/siteMetadata'

type SubmenuItem = {
  name: I18n<string>
  href: string
}

type NavLink = {
  name: I18n<string>
  href: string
  submenu?: SubmenuItem[]
}

const siteNavLinks: NavLink[] = siteMetadata.siteNavLinks

// Shared nav styles: one pill surface, items that only change text color on hover.
const navPillSurface =
  'rounded-full bg-white/90 shadow-sm ring-1 ring-primaryText-900/5 backdrop-blur dark:bg-primaryText-900/90 dark:ring-white/10'

const navItemBase =
  'flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-sm font-medium transition-colors duration-200 ease-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 xl:px-3'

const navItemActive =
  'bg-accent-500/10 text-accent-600 dark:bg-accent-400/10 dark:text-accent-400'

const navItemIdle =
  'text-primaryText-700 hover:text-accent-600 dark:text-primaryText-300 dark:hover:text-accent-400'

// Floating panel used by the desktop dropdowns and the mobile menu.
const panelSurface =
  'bg-white shadow-lg ring-1 ring-primaryText-900/5 dark:bg-primaryText-900 dark:ring-white/10'

// Rows inside a panel (dropdown entries, mobile menu entries).
const panelItemBase =
  'rounded-xl px-3 py-2 font-medium transition-colors duration-200 ease-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500'

const panelItemCurrent =
  'bg-accent-500/10 text-accent-700 dark:bg-accent-400/10 dark:text-accent-300'

const panelItemHover =
  'bg-primaryText-100 text-primaryText-900 dark:bg-primaryText-800 dark:text-primaryText-50'

const panelItemIdle =
  'text-primaryText-700 hover:bg-primaryText-100 hover:text-primaryText-900 dark:text-primaryText-300 dark:hover:bg-primaryText-800 dark:hover:text-primaryText-50'

// Round icon buttons in the header (theme + language toggles).
const iconButton =
  'group flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primaryText-700 shadow-sm ring-1 ring-primaryText-900/5 backdrop-blur transition-[color,box-shadow] duration-200 ease-smooth hover:text-accent-600 hover:ring-primaryText-900/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:bg-primaryText-900/90 dark:text-primaryText-300 dark:ring-white/10 dark:hover:text-accent-400 dark:hover:ring-white/20'

// Desktop Dropdown Menu Component
function DropdownMenu({ link }: { link: NavLink }) {
  const { pathname } = useLocale()
  const t = useT()
  const isActive = link.submenu?.some(item => pathname === item.href)

  return (
    <li className="relative flex items-center">
      <Menu as="div" className="relative">
        {({ open }) => (
          <>
            <Menu.Button
              className={clsx(
                navItemBase,
                'gap-1.5',
                isActive
                  ? navItemActive
                  : open
                  ? 'text-accent-600 dark:text-accent-400'
                  : navItemIdle
              )}
            >
              <span>{t(link.name)}</span>
              <ChevronDownIcon
                className={clsx(
                  'h-auto w-2 flex-shrink-0 stroke-current opacity-70 transition-transform duration-200 ease-smooth',
                  open && 'rotate-180'
                )}
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition-[opacity,transform] duration-200 ease-smooth"
              enterFrom="opacity-0 motion-safe:translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition-[opacity,transform] duration-150 ease-smooth"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 motion-safe:translate-y-1"
            >
              <Menu.Items
                className={clsx(
                  'absolute left-0 z-50 mt-3 w-56 origin-top-left space-y-0.5 rounded-2xl p-2 focus:outline-none',
                  panelSurface
                )}
              >
                {link.submenu?.map((item) => {
                  const isItemActive = pathname === item.href
                  return (
                    <Menu.Item key={item.href}>
                      {({ active }) => (
                        <LocaleLink
                          href={item.href}
                          aria-current={isItemActive ? 'page' : undefined}
                          className={clsx(
                            panelItemBase,
                            'block text-sm',
                            isItemActive
                              ? panelItemCurrent
                              : active
                              ? panelItemHover
                              : 'text-primaryText-700 dark:text-primaryText-300'
                          )}
                        >
                          {t(item.name)}
                        </LocaleLink>
                      )}
                    </Menu.Item>
                  )
                })}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </li>
  )
}

type MobileNavItemProps = {
  href: string
  children: React.ReactNode
  submenu?: SubmenuItem[]
}

// used to list items in mobile nav
function MobileNavItem({ href, children, submenu }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocale()
  const t = useT()

  if (submenu) {
    const hasActiveChild = submenu.some(item => pathname === item.href)

    return (
      <li>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className={clsx(
            panelItemBase,
            'flex w-full items-center justify-between py-2.5 text-left',
            hasActiveChild ? panelItemCurrent : panelItemIdle
          )}
        >
          <span className="flex items-center gap-2">
            {children}
            <span className="text-xs font-normal text-primaryText-500">({submenu.length})</span>
          </span>
          <ChevronDownIcon
            className={clsx(
              'h-auto w-2.5 stroke-current opacity-70 transition-transform duration-200 ease-smooth',
              isOpen && 'rotate-180'
            )}
          />
        </button>
        {isOpen && (
          <ul className="mb-1 ml-3 mt-1 space-y-0.5 border-l border-primaryText-200/70 pl-3 dark:border-primaryText-800">
            {submenu.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Popover.Button
                    as={LocaleLink}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={clsx(
                      panelItemBase,
                      'block text-sm',
                      isActive ? panelItemCurrent : panelItemIdle
                    )}
                  >
                    {t(item.name)}
                  </Popover.Button>
                </li>
              )
            })}
          </ul>
        )}
      </li>
    )
  }

  const isActive = pathname === href

  return (
    <li>
      <Popover.Button
        as={LocaleLink}
        href={href}
        aria-current={isActive ? 'page' : undefined}
        className={clsx(
          panelItemBase,
          'group flex w-full items-center justify-between py-2.5',
          isActive ? panelItemCurrent : panelItemIdle
        )}
      >
        <span>{children}</span>
        <svg
          className="ml-2 h-4 w-4 opacity-50 transition-transform duration-200 ease-smooth motion-safe:group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Popover.Button>
    </li>
  )
}

// mobile nav on small screens
function MobileNavigation(props: React.ComponentPropsWithoutRef<typeof Popover>) {
  const t = useT()
  return (
    <Popover {...props}>
      <Popover.Button
        className={clsx(
          navPillSurface,
          'group flex h-10 items-center gap-2 px-4 text-sm font-medium text-primaryText-800 transition-[color,box-shadow] duration-200 ease-smooth hover:text-accent-600 hover:ring-primaryText-900/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:text-primaryText-200 dark:hover:text-accent-400 dark:hover:ring-white/20'
        )}
      >
        Menu
        <ChevronDownIcon className="h-auto w-2 stroke-current opacity-70 transition-transform duration-200 ease-smooth group-data-[headlessui-state~=open]:rotate-180" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-200 ease-smooth"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150 ease-smooth"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-primaryText-900/40 backdrop-blur-sm dark:bg-black/60" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition-[opacity,transform] duration-200 ease-smooth"
          enterFrom="opacity-0 motion-safe:translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition-[opacity,transform] duration-150 ease-smooth"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 motion-safe:translate-y-1"
        >
          <Popover.Panel
            focus
            className={clsx(
              'fixed inset-x-4 top-8 z-50 max-h-[calc(100dvh-4rem)] origin-top overflow-y-auto rounded-2xl p-6',
              panelSurface
            )}
          >
            <div className="mb-4 flex flex-row-reverse items-center justify-between">
              <Popover.Button
                aria-label="Close menu"
                className="-m-2 flex h-10 w-10 items-center justify-center rounded-full text-primaryText-500 transition-colors duration-200 ease-smooth hover:bg-primaryText-100 hover:text-primaryText-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:text-primaryText-400 dark:hover:bg-primaryText-800 dark:hover:text-primaryText-50"
              >
                <CloseIcon className="h-6 w-6" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-primaryText-600 dark:text-primaryText-400">
                Navigation
              </h2>
            </div>
            <nav>
              <ul className="-mx-3 space-y-0.5 text-base">
                {siteNavLinks.map((link) => {
                  return (
                    <MobileNavItem key={link.name.en} href={link.href} submenu={link.submenu}>
                      {t(link.name)}
                    </MobileNavItem>
                  )
                })}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

type NavItemProps = {
  href: string
  children: React.ReactNode
}

// used to list items in desktop nav
function NavItem({ href, children }: NavItemProps) {
  let isActive = useLocale().pathname === href

  return (
    <li className="relative flex items-center">
      <LocaleLink
        href={href}
        aria-current={isActive ? 'page' : undefined}
        className={clsx(navItemBase, isActive ? navItemActive : navItemIdle)}
      >
        {children}
      </LocaleLink>
    </li>
  )
}

// desktop nav on large screens
function DesktopNavigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  const t = useT()
  return (
    <nav {...props}>
      <ul className={clsx(navPillSurface, 'flex h-10 items-center gap-0.5 px-1')}>
        {siteNavLinks.map((link) => {
          // If link has a submenu, render DropdownMenu
          if (link.submenu) {
            return <DropdownMenu key={link.name.en} link={link} />
          }

          // Otherwise, render regular NavItem
          return (
            <NavItem key={link.href} href={link.href}>
              {t(link.name)}
            </NavItem>
          )
        })}
      </ul>
    </nav>
  )
}

// used to transition between light and dark mode
function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className={iconButton}
      onClick={toggleMode}
    >
      <SunIcon className="h-5 w-5 fill-primaryText-100 stroke-primaryText-500 transition-colors duration-200 ease-smooth group-hover:fill-accent-50 group-hover:stroke-accent-600 dark:hidden [@media(prefers-color-scheme:dark)]:fill-accent-50 [@media(prefers-color-scheme:dark)]:stroke-accent-500 [@media(prefers-color-scheme:dark)]:group-hover:stroke-accent-600" />
      <MoonIcon className="hidden h-5 w-5 fill-primaryText-700 stroke-primaryText-400 transition-colors duration-200 ease-smooth group-hover:fill-accent-400/10 group-hover:stroke-accent-400 dark:block [@media_not_(prefers-color-scheme:dark)]:fill-accent-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-accent-400" />
    </button>
  )
}

// language switcher (English / French)
function LanguageToggle() {
  let { locale, toggleLocale } = useLocale()
  const label = locale === 'en' ? 'Passer en français' : 'Switch to English'

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={label}
      title={label}
      className={clsx(iconButton, 'text-xs font-semibold tracking-wide')}
    >
      <span>{locale.toUpperCase()}</span>
    </button>
  )
}

// helper to help with scaling of avatar when user scrolls down
function scrollHeight(number: number, a: number, b: number) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function AvatarContainer({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-sm ring-1 ring-primaryText-900/5 backdrop-blur dark:bg-primaryText-900/90 dark:ring-white/10'
      )}
      {...props}
    />
  )
}

type AvatarProps = Omit<React.ComponentPropsWithoutRef<typeof LocaleLink>, 'href'> & {
  large?: boolean
}

function Avatar({ large = false, className, ...props }: AvatarProps) {
  return (
    <LocaleLink
      href="/"
      aria-label="Home"
      className={clsx(
        className,
        'pointer-events-auto rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500'
      )}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? '4rem' : '2.25rem'}
        loading="eager"
        className={clsx(
          'rounded-full bg-primaryText-100 object-cover dark:bg-primaryText-800',
          large ? 'h-16 w-16' : 'h-9 w-9'
        )}
      />
    </LocaleLink>
  )
}

export function Header() {
  let isHomePage = useLocale().pathname === '/'

  let headerRef = useRef<HTMLDivElement>(null)
  let avatarRef = useRef<HTMLDivElement>(null)
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property: string, value: string) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property: string) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      if (!headerRef.current) {
        return
      }

      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = scrollHeight(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return
      }

      let fromScale = 1
      let toScale = 36 / 64
      let fromX = 0
      let toX = 2 / 16

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = scrollHeight(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = scrollHeight(x, fromX, toX)

      setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      )

      let borderScale = 1 / (toScale / scale)
      let borderX = (-toX + x) * borderScale
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty('--avatar-border-transform', borderTransform)
      setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0')
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles)
      window.removeEventListener('resize', updateStyles)
    }
  }, [isHomePage])

  return (
    <>
      <header
        className="relative z-50 flex flex-col pointer-events-none"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        {isHomePage && (
          <>
            <div
              ref={avatarRef}
              className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
            />
            <Container
              className="top-0 order-last pt-3 -mb-3"
              style={{ position: 'var(--header-position)' as React.CSSProperties['position'] }}
            >
              <div
                className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                style={{ position: 'var(--header-inner-position)' as React.CSSProperties['position'] }}
              >
                <div className="relative">
                  <AvatarContainer
                    className="absolute left-0 transition-opacity origin-left top-3"
                    style={{
                      opacity: 'var(--avatar-border-opacity, 0)' as React.CSSProperties['opacity'],
                      transform: 'var(--avatar-border-transform)',
                    }}
                  />
                  <Avatar
                    large
                    className="block w-16 h-16 origin-left"
                    style={{ transform: 'var(--avatar-image-transform)' }}
                  />
                </div>
              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{ position: 'var(--header-position)' as React.CSSProperties['position'] }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{ position: 'var(--header-inner-position)' as React.CSSProperties['position'] }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                {!isHomePage && (
                  <AvatarContainer>
                    <Avatar />
                  </AvatarContainer>
                )}
              </div>
              <div className="flex flex-1 justify-end lg:justify-center">
                <MobileNavigation className="pointer-events-auto lg:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden lg:block" />
              </div>
              <div className="flex justify-end gap-2 lg:flex-1">
                <div className="pointer-events-auto">
                  <LanguageToggle />
                </div>
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div style={{ height: 'var(--content-offset)' }} />}
    </>
  )
}
