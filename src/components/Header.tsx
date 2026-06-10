import { Fragment, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, Transition, Menu } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import avatarImage from '@/images/avatar.jpg'
import {
  CloseIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
} from '@/images/icons/NavIcons'
import siteMetadata from '@/data/siteMetadata'

type SubmenuItem = {
  name: string
  href: string
}

type NavLink = {
  name: string
  href: string
  submenu?: SubmenuItem[]
}

const siteNavLinks = siteMetadata.siteNavLinks as NavLink[]

// Desktop Dropdown Menu Component
function DropdownMenu({ link }: { link: NavLink }) {
  const router = useRouter()
  const isActive = link.submenu?.some(item => router.pathname === item.href)

  return (
    <li className="relative flex items-center">
      <Menu as="div" className="relative">
        {({ open }) => (
          <>
            <Menu.Button
              className={clsx(
                'relative px-3 py-2.5 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-accent-50 hover:to-accent-100 dark:hover:from-accent-900/30 dark:hover:to-accent-800/30 hover:shadow-md font-medium flex items-center gap-2 whitespace-nowrap group',
                'border border-transparent hover:border-accent-200 dark:hover:border-accent-700/50',
                isActive
                  ? 'text-accent-600 dark:text-accent-400 font-semibold bg-accent-50/50 dark:bg-accent-900/20'
                  : 'text-primaryText-700 dark:text-primaryText-300 hover:text-accent-600 dark:hover:text-accent-400'
              )}
            >
              <span>{link.name}</span>
              <svg
                className={clsx(
                  'w-4 h-4 transition-all duration-300 flex-shrink-0',
                  open && 'rotate-180',
                  'text-accent-500 dark:text-accent-400 group-hover:text-accent-600 dark:group-hover:text-accent-300 drop-shadow-sm'
                )}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Menu.Items className="absolute left-0 z-50 mt-3 w-56 origin-top-left rounded-2xl bg-white/95 dark:bg-primaryText-900/95 shadow-2xl ring-1 ring-primaryText-900/10 dark:ring-white/10 focus:outline-none border border-primaryText-200/50 dark:border-primaryText-700/50 backdrop-blur-xl py-2">
                {link.submenu?.map((item) => {
                  const isItemActive = router.pathname === item.href
                  return (
                    <Menu.Item key={item.href}>
                      {({ active }) => (
                        <Link
                          href={item.href}
                          className={clsx(
                            'block px-4 py-2.5 text-sm font-medium transition-all duration-200 mx-2 rounded-lg',
                            isItemActive
                              ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-md'
                              : active
                              ? 'bg-gradient-to-r from-accent-50 to-accent-100 dark:from-accent-900/30 dark:to-accent-800/30 text-accent-600 dark:text-accent-400'
                              : 'text-primaryText-700 dark:text-primaryText-300'
                          )}
                        >
                          {item.name}
                        </Link>
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
  const router = useRouter()

  if (submenu) {
    const hasActiveChild = submenu.some(item => router.pathname === item.href)

    return (
      <li>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300 hover:shadow-md font-medium text-left",
            hasActiveChild
              ? "bg-gradient-to-r from-accent-100 to-accent-50 dark:from-accent-900/40 dark:to-accent-800/40 text-accent-700 dark:text-accent-300"
              : "hover:bg-gradient-to-r hover:from-accent-50 hover:to-accent-100 dark:hover:from-accent-900/30 dark:hover:to-accent-800/30"
          )}
        >
          <span className="flex items-center gap-2">
            {children}
            <span className="text-xs opacity-60 font-normal">({submenu.length})</span>
          </span>
          <ChevronDownIcon className={clsx('w-5 h-5 transition-transform duration-300 stroke-2', isOpen && 'rotate-180')} />
        </button>
        {isOpen && (
          <ul className="pl-4 mt-2 space-y-1">
            {submenu.map((item) => {
              const isActive = router.pathname === item.href
              return (
                <li key={item.href}>
                  <Popover.Button
                    as={Link}
                    href={item.href}
                    className={clsx(
                      'block px-4 py-2 text-sm rounded-lg transition-all duration-200',
                      isActive
                        ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold shadow-md'
                        : 'text-primaryText-600 dark:text-primaryText-400 hover:bg-accent-50 dark:hover:bg-accent-900/20'
                    )}
                  >
                    {item.name}
                  </Popover.Button>
                </li>
              )
            })}
          </ul>
        )}
      </li>
    )
  }

  const isActive = router.pathname === href

  return (
    <li>
      <Popover.Button as={Link} href={href} className="block">
        <span className={clsx(
          "flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300 hover:shadow-md group font-medium",
          isActive
            ? "bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-md"
            : "hover:bg-gradient-to-r hover:from-accent-50 hover:to-accent-100 dark:hover:from-accent-900/30 dark:hover:to-accent-800/30"
        )}>
          <span>{children}</span>
          <svg className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Popover.Button>
    </li>
  )
}

// mobile nav on small screens
function MobileNavigation(props: React.ComponentPropsWithoutRef<typeof Popover>) {
  return (
    <Popover {...props}>
      <Popover.Button className="flex items-center px-5 py-2.5 text-sm font-semibold rounded-2xl shadow-xl group bg-gradient-to-r from-white/90 to-white/80 text-primaryText-800 shadow-primaryText-800/10 ring-1 ring-primaryText-900/10 backdrop-blur-md dark:from-primaryText-900/90 dark:to-primaryText-800/90 dark:text-primaryText-200 dark:ring-white/10 dark:hover:ring-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-primaryText-200/50 dark:border-primaryText-700/50">
        <span className="mr-2 font-bold">Menu</span>
        <ChevronDownIcon className="w-4 h-4 stroke-primaryText-600 group-hover:stroke-accent-600 dark:stroke-primaryText-400 dark:group-hover:stroke-accent-400 transition-all duration-300 group-data-[headlessui-state~=open]:rotate-180" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-primaryText-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed z-50 p-8 origin-top bg-gradient-to-br from-white/98 to-white/95 backdrop-blur-xl inset-x-4 top-8 rounded-3xl ring-1 ring-primaryText-900/10 shadow-2xl dark:from-primaryText-900/98 dark:to-primaryText-800/95 dark:ring-white/10 border-2 border-primaryText-200/50 dark:border-primaryText-700/50"
          >
            <div className="flex flex-row-reverse items-center justify-between mb-6">
              <Popover.Button aria-label="Close menu" className="p-2 -m-1 rounded-xl hover:bg-primaryText-100 dark:hover:bg-primaryText-800 transition-all duration-200 hover:scale-110">
                <CloseIcon className="w-6 h-6 text-primaryText-600 dark:text-primaryText-400" />
              </Popover.Button>
              <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-400 dark:from-accent-400 dark:to-accent-300">
                Navigation
              </h2>
            </div>
            <nav>
              <ul className="space-y-2 text-base text-primaryText-800 dark:text-primaryText-300">
                {siteNavLinks.map((link, index) => {
                  return (
                    <MobileNavItem key={link.href || index} href={link.href} submenu={link.submenu}>
                      {link.name}
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
  let isActive = useRouter().pathname === href

  return (
    <li className="relative flex items-center">
      <Link
        href={href}
        className={clsx(
          'relative px-3 py-2.5 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-accent-50 hover:to-accent-100 dark:hover:from-accent-900/30 dark:hover:to-accent-800/30 hover:shadow-md font-medium whitespace-nowrap flex items-center',
          isActive
            ? 'text-accent-600 dark:text-accent-400 font-semibold'
            : 'text-primaryText-700 dark:text-primaryText-300 hover:text-accent-600 dark:hover:text-accent-400'
        )}
      >
        {children}
      </Link>
    </li>
  )
}

// desktop nav on large screens
function DesktopNavigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul className="flex items-center gap-1 px-2 py-2 text-sm font-medium rounded-2xl shadow-xl bg-white/80 text-primaryText-800 shadow-primaryText-800/10 ring-1 ring-primaryText-900/10 backdrop-blur-md dark:bg-primaryText-900/80 dark:text-primaryText-200 dark:ring-white/10 border border-primaryText-200/50 dark:border-primaryText-700/50 transition-all duration-300">
        {siteNavLinks.map((link, index) => {
          // If link has a submenu, render DropdownMenu
          if (link.submenu) {
            return <DropdownMenu key={link.name || index} link={link} />
          }

          // Otherwise, render regular NavItem
          return (
            <NavItem key={link.href} href={link.href}>
              {link.name}
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
      className="px-3 py-3 transition-all duration-300 rounded-2xl shadow-xl group bg-gradient-to-br from-white/90 to-white/80 shadow-primaryText-800/10 ring-1 ring-primaryText-900/10 backdrop-blur-md dark:from-primaryText-900/90 dark:to-primaryText-800/90 dark:ring-white/10 dark:hover:ring-white/20 border border-primaryText-200/50 dark:border-primaryText-700/50 hover:scale-110 hover:shadow-2xl hover:rotate-12 active:scale-95"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-amber-100 stroke-amber-500 transition-all duration-300 group-hover:fill-amber-200 group-hover:stroke-amber-600 group-hover:rotate-90 dark:hidden [@media(prefers-color-scheme:dark)]:fill-accent-50 [@media(prefers-color-scheme:dark)]:stroke-accent-500" />
      <MoonIcon className="hidden h-6 w-6 fill-indigo-700 stroke-indigo-400 transition-all duration-300 dark:block group-hover:fill-indigo-600 group-hover:stroke-indigo-300 group-hover:-rotate-12 [@media_not_(prefers-color-scheme:dark)]:fill-accent-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-accent-500" />
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
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-primaryText-800/5 ring-1 ring-primaryText-900/5 backdrop-blur dark:bg-primaryText-800/90 dark:ring-white/10'
      )}
      {...props}
    />
  )
}

type AvatarProps = Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> & {
  large?: boolean
}

function Avatar({ large = false, className, ...props }: AvatarProps) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
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
    </Link>
  )
}

export function Header() {
  let isHomePage = useRouter().pathname === '/'

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
              <div className="flex justify-end flex-1 md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="hidden pointer-events-auto md:block" />
              </div>
              <div className="flex justify-end md:flex-1">
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
