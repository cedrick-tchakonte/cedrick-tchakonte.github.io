import clsx from 'clsx'
import Image, { type StaticImageData } from 'next/image'
import type { IconType } from 'react-icons'

import { LocaleLink } from '@/components/LocaleLink'

/*
 * One card family for the whole site: same surface, padding, radius, logo tile,
 * title / subtitle / meta typography, bullets, tags and link style. Experience,
 * volunteer, education, certification, mobility and home feature cards are all
 * built from these pieces so they stay visually identical.
 */

type CardProps<T extends React.ElementType> = {
  as?: T
  className?: string
  children?: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>

/** Spec surface; lifts on hover only when it holds a Card.Link. Extra props go to the rendered element. */
function CardRoot<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
  ...props
}: CardProps<T>) {
  const Component: React.ElementType = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'group relative isolate flex flex-col items-start',
        'rounded-2xl border border-primaryText-200/70 bg-white p-6 shadow-sm sm:p-8',
        'dark:border-primaryText-800 dark:bg-primaryText-900',
        'transition-[transform,box-shadow,border-color] duration-300 ease-smooth',
        // Only clickable cards (those with a Card.Link overlay) react to hover.
        '[&:has([data-card-link]):hover]:border-accent-300/60 [&:has([data-card-link]):hover]:shadow-md',
        'motion-safe:[&:has([data-card-link]):hover]:-translate-y-0.5',
        'dark:[&:has([data-card-link]):hover]:border-accent-500/40'
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

type CardLinkProps = React.ComponentPropsWithoutRef<typeof LocaleLink>

/** Makes the whole card clickable (overlay) with a subtle tinted hover. */
function CardLink({ children, className, ...props }: CardLinkProps) {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-2xl bg-accent-50/0 transition-colors duration-300 ease-smooth group-hover:bg-accent-50/70 dark:bg-accent-400/0 dark:group-hover:bg-accent-400/[0.04]"
      />
      <LocaleLink
        data-card-link
        className={clsx('group/link focus-visible:outline-none', className)}
        {...props}
      >
        <span className="absolute inset-0 z-20 rounded-2xl group-focus-visible/link:ring-2 group-focus-visible/link:ring-accent-500" />
        <span className="relative z-10">{children}</span>
      </LocaleLink>
    </>
  )
}

type CardTitleProps = {
  as?: React.ElementType
  href?: string
  className?: string
  children?: React.ReactNode
}

function CardTitle({
  as: Component = 'h3',
  href,
  className,
  children,
}: CardTitleProps) {
  return (
    <Component
      className={clsx(
        className,
        'text-lg font-semibold tracking-tight text-primaryText-900 dark:text-primaryText-50'
      )}
    >
      {href ? <CardLink href={href}>{children}</CardLink> : children}
    </Component>
  )
}

/** Secondary line under a title (institution, issuer, university). */
function CardSubtitle({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <p
      className={clsx(
        className,
        'mt-1 text-sm text-primaryText-600 dark:text-primaryText-400'
      )}
    >
      {children}
    </p>
  )
}

function CardDescription({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <p
      className={clsx(
        className,
        'relative z-10 mt-2 text-sm leading-6 text-primaryText-600 dark:text-primaryText-400'
      )}
    >
      {children}
    </p>
  )
}

type CardEyebrowProps = {
  as?: React.ElementType
  decorate?: boolean
  className?: string
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLElement>

function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}: CardEyebrowProps) {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-4 flex items-center text-sm font-semibold text-accent-600 dark:text-accent-400',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-accent-500/40 dark:bg-accent-400/40" />
        </span>
      )}
      {children}
    </Component>
  )
}

/** Date / location row: muted text with small muted icons. */
function CardMeta({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        className,
        'flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-primaryText-500 dark:text-primaryText-400'
      )}
    >
      {children}
    </div>
  )
}

function CardMetaItem({
  icon: Icon,
  children,
}: {
  icon: IconType
  children?: React.ReactNode
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Icon
        aria-hidden="true"
        className="h-3.5 w-3.5 flex-none text-primaryText-400 dark:text-primaryText-500"
      />
      {children}
    </span>
  )
}

/** Bullet list with a small accent dot. */
function CardList({
  items,
  className,
}: {
  items: string[]
  className?: string
}) {
  return (
    <ul
      role="list"
      className={clsx(
        className,
        'space-y-2 text-sm leading-6 text-primaryText-600 dark:text-primaryText-400'
      )}
    >
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-[0.5625rem] h-1.5 w-1.5 flex-none rounded-full bg-accent-500/70 dark:bg-accent-400/70"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** Neutral chip for tags. */
function CardTag({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <span
      className={clsx(
        className,
        'inline-flex items-center rounded-full bg-primaryText-100 px-2.5 py-0.5 text-xs font-medium text-primaryText-700 dark:bg-primaryText-800 dark:text-primaryText-300'
      )}
    >
      {children}
    </span>
  )
}

/** Logo in a white rounded tile with a ring; same height for square and wide logos. */
function CardLogo({
  src,
  alt,
  className,
}: {
  src: string | StaticImageData
  alt: string
  className?: string
}) {
  return (
    <div
      className={clsx(
        className,
        'relative z-10 flex h-12 min-w-[3rem] flex-none items-center justify-center rounded-xl bg-white px-2.5 ring-1 ring-primaryText-900/5 dark:ring-white/10'
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={160}
        height={48}
        unoptimized
        className="h-8 w-auto max-w-[8.5rem] object-contain"
      />
    </div>
  )
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  )
}

type CardCtaProps = {
  className?: string
  children?: React.ReactNode
  /** When set, renders a standalone link (e.g. external) instead of a label for a Card.Link card. */
  href?: string
  target?: string
  rel?: string
}

/** Accent link text with a small arrow that nudges on hover. */
function CardCta({ className, children, href, target, rel }: CardCtaProps) {
  const base =
    'relative z-10 inline-flex items-center gap-1 text-sm font-medium text-accent-600 dark:text-accent-400'

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={clsx(
          className,
          base,
          'group/cta -my-2 rounded-lg py-2 transition-colors duration-200 ease-smooth hover:text-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:hover:text-accent-300'
        )}
      >
        {children}
        <ChevronRightIcon className="h-4 w-4 flex-none transition-transform duration-200 ease-smooth motion-safe:group-hover/cta:translate-x-0.5" />
      </a>
    )
  }

  return (
    <div className={clsx(className, base)}>
      {children}
      <ChevronRightIcon className="h-4 w-4 flex-none transition-transform duration-200 ease-smooth motion-safe:group-hover:translate-x-0.5" />
    </div>
  )
}

export const Card = Object.assign(CardRoot, {
  Link: CardLink,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Description: CardDescription,
  Eyebrow: CardEyebrow,
  Meta: CardMeta,
  MetaItem: CardMetaItem,
  List: CardList,
  Tag: CardTag,
  Logo: CardLogo,
  Cta: CardCta,
})
