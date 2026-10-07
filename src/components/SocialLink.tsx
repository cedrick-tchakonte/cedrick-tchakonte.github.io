import Link, { type LinkProps } from 'next/link'

type SocialLinkProps = Omit<
  React.ComponentPropsWithoutRef<typeof Link>,
  'href'
> &
  LinkProps & {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }

/** Plain social icon link: muted icon, accent on hover, 40px tap target. Pass an aria-label. */
const SocialLink = ({ icon: Icon, ...props }: SocialLinkProps) => {
  return (
    <Link
      className="group -m-2 inline-flex items-center justify-center rounded-full p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
      {...props}
    >
      <Icon
        aria-hidden="true"
        className="h-6 w-6 fill-primaryText-500 transition-colors duration-200 ease-smooth group-hover:fill-accent-600 dark:fill-primaryText-400 dark:group-hover:fill-accent-400"
      />
    </Link>
  )
}

export default SocialLink
