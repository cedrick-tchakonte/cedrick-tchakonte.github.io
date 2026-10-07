import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'
import { fadeUp, reveal } from '@/lib/motion'

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
        className="group flex items-center gap-4 rounded-lg py-2 text-sm font-medium text-primaryText-800 transition-colors duration-200 ease-smooth hover:text-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:text-primaryText-200 dark:hover:text-accent-400"
      >
        <Icon className="h-6 w-6 flex-none fill-primaryText-500 transition-colors duration-200 ease-smooth group-hover:fill-accent-600 dark:fill-primaryText-400 dark:group-hover:fill-accent-400" />
        <span>{children}</span>
      </Link>
    </li>
  )
}

const About = () => {
  const t = useT()

  return (
    <>
      <Head>
        <title>{`${t({ en: 'About', fr: 'À propos' })} - ${siteMetadata.author}`}</title>
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
                className="aspect-square rounded-2xl bg-primaryText-100 object-cover ring-1 ring-primaryText-900/5 dark:bg-primaryText-800 dark:ring-white/10"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h2 className="text-2xl font-semibold tracking-tight text-primaryText-900 dark:text-primaryText-50 sm:text-3xl">
              {t(siteMetadata.authorHeadline)}
            </h2>
            <div className="mt-6 space-y-7 text-base leading-7 text-primaryText-600 dark:text-primaryText-400">
              <p className="whitespace-pre-wrap">
                {t(siteMetadata.authorAboutExtended)}
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <motion.div
              variants={fadeUp}
              {...reveal}
              className="rounded-2xl border border-primaryText-200/70 bg-white p-6 shadow-sm dark:border-primaryText-800 dark:bg-primaryText-900 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-primaryText-900 dark:text-primaryText-50">
                {t({ en: 'Connect with me', fr: 'Restons en contact' })}
              </h3>
              <ul role="list" className="mt-4 -mb-2">
                <SocialLink href={siteMetadata.socials.instagram} icon={InstagramIcon}>
                  {t({ en: 'Follow on Instagram', fr: 'Suivre sur Instagram' })}
                </SocialLink>
                <SocialLink href={siteMetadata.socials.github} icon={GitHubIcon}>
                  {t({ en: 'Follow on GitHub', fr: 'Suivre sur GitHub' })}
                </SocialLink>
                <SocialLink href={siteMetadata.socials.linkedin} icon={LinkedInIcon}>
                  {t({ en: 'Follow on LinkedIn', fr: 'Suivre sur LinkedIn' })}
                </SocialLink>
                <SocialLink
                  href={`mailto:${siteMetadata.email}`}
                  icon={MailIcon}
                  className="mt-4 border-t border-primaryText-100 pt-4 dark:border-primaryText-800"
                >
                  {siteMetadata.email}
                </SocialLink>
              </ul>
            </motion.div>
          </div>
        </div>
      </PageLayout>
    </>
  )
}

export default About
