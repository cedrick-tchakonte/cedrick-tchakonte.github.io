import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'

import { PageLayout } from '@/components/PageLayout'
import {
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/SocialIcons'
import avatarImage from '@/images/avatar.jpg'

type SocialLinkProps = {
  className?: string
  href: string
  children: React.ReactNode
  icon: React.ComponentType<{ className?: string }>
}

function SocialLink({ className, href, children, icon: Icon }: SocialLinkProps) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-primaryText-800 hover:text-accent-500 dark:text-primaryText-200 dark:hover:text-accent-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-primaryText-500 group-hover:fill-accent-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

const About = () => {
  const t = useT()

  return (
    <>
      <Head>
        <title>About - {siteMetadata.author}</title>
        <meta name="description" content={t(siteMetadata.description)} />
      </Head>
      <PageLayout
        title={t({ en: 'About Me', fr: 'À propos de moi' })}
        subtitle={t({
          en: 'Learn more about my journey, passion, and professional background',
          fr: 'Découvrez mon parcours, mes passions et mon expérience professionnelle.',
        })}
      >
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={avatarImage}
                alt="picture of the author"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rounded-2xl bg-primaryText-100 dark:bg-primaryText-800 shadow-xl border-4 border-white dark:border-primaryText-700"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h2 className="text-4xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-5xl">
              {t(siteMetadata.authorHeadline)}
            </h2>
            <div className="mt-6 text-base space-y-7 text-primaryText-600 dark:text-primaryText-400">
              <p className="whitespace-pre-wrap leading-relaxed">
                {t(siteMetadata.authorAboutExtended)}
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <div className="bg-white/50 dark:bg-primaryText-800/50 backdrop-blur-sm rounded-2xl p-8 border border-primaryText-200/50 dark:border-primaryText-700/50">
              <h3 className="text-lg font-semibold text-primaryText-800 dark:text-primaryText-100 mb-6">
                {t({ en: 'Connect with me', fr: 'Restons en contact' })}
              </h3>
              <ul role="list" className="space-y-4">
                <SocialLink
                  href={siteMetadata.socials.instagram}
                  icon={InstagramIcon}
                  className="group"
                >
                  <span className="group-hover:text-accent-500 transition-colors">{t({ en: 'Follow on Instagram', fr: 'Suivre sur Instagram' })}</span>
                </SocialLink>
                <SocialLink
                  href={siteMetadata.socials.github}
                  icon={GitHubIcon}
                  className="group"
                >
                  <span className="group-hover:text-accent-500 transition-colors">{t({ en: 'Follow on GitHub', fr: 'Suivre sur GitHub' })}</span>
                </SocialLink>
                <SocialLink
                  href={siteMetadata.socials.linkedin}
                  icon={LinkedInIcon}
                  className="group"
                >
                  <span className="group-hover:text-accent-500 transition-colors">{t({ en: 'Follow on LinkedIn', fr: 'Suivre sur LinkedIn' })}</span>
                </SocialLink>
                <SocialLink
                  href={`mailto:${siteMetadata.email}`}
                  icon={MailIcon}
                  className="pt-6 mt-6 border-t border-primaryText-100 dark:border-primaryText-700/40 group"
                >
                  <span className="group-hover:text-accent-500 transition-colors">{siteMetadata.email}</span>
                </SocialLink>
              </ul>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  )
}

export default About
