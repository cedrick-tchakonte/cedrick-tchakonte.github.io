import clsx from 'clsx'

import { LocaleLink } from '@/components/LocaleLink'

const variantStyles = {
  primary:
    'bg-accent-600 font-semibold text-white shadow-sm hover:bg-accent-500 active:bg-accent-700',
  secondary:
    'bg-primaryText-100 font-semibold text-primaryText-900 hover:bg-primaryText-200 active:bg-primaryText-200 dark:bg-primaryText-800 dark:text-primaryText-100 dark:hover:bg-primaryText-700 dark:active:bg-primaryText-800',
}

type ButtonProps = { variant?: keyof typeof variantStyles } & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof LocaleLink>
)

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  className = clsx(
    'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm transition-colors duration-200 ease-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500',
    variantStyles[variant],
    className
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <LocaleLink className={className} {...props} />
  )
}
