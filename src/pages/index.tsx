import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from '@/components/SocialIcons'
import SocialLink from '@/components/SocialLink'
import Testimonial from '@/components/Testimonial'
import Faq from '@/components/Faq'
import FeatureSection from '@/components/FeatureSection'
import CallToAction from '@/components/CallToAction'
import DivideLine from '@/components/DivideLine'
import AvailabilityBadge from '@/components/AvailabilityBadge'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'
import { fadeUp, stagger } from '@/lib/motion'
import schoolLogo from '@/images/ensta-logo.png'

const Home = () => {
  const t = useT()

  return (
    <>
      <Head>
        <title>{t(siteMetadata.title)}</title>
        <meta name="description" content={t(siteMetadata.description)} />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Container className="pt-16 sm:pt-20">
        <motion.div
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-2xl">
            {/* Self-animating (fadeUp) and carries its own bottom margin */}
            <AvailabilityBadge />
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight text-primaryText-900 dark:text-primaryText-50 sm:text-5xl"
            >
              {t(siteMetadata.authorHeadline)}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-7 text-primaryText-600 dark:text-primaryText-400"
            >
              {t(siteMetadata.authorAbout)}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex items-center gap-6">
              <SocialLink
                href={siteMetadata.socials.x}
                aria-label="Follow on X"
                icon={XIcon}
              />
              <SocialLink
                href={siteMetadata.socials.github}
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              />
              <SocialLink
                href={siteMetadata.socials.linkedin}
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
              <SocialLink
                href={siteMetadata.socials.instagram}
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
            </motion.div>
          </div>
          <motion.div
            variants={fadeUp}
            className="mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto lg:max-w-md"
          >
            {/* Logo on a white panel in both themes (the mark has dark text) */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-primaryText-900/5 dark:ring-white/10 sm:p-8">
              <Image
                src={schoolLogo}
                alt="Ensta Paris Logo"
                width={400}
                height={400}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
      <div className="mt-16 sm:mt-20">
        <DivideLine />
      </div>
      <FeatureSection />
      <Testimonial />
      <Faq />
      <CallToAction />
    </>
  )
}

export default Home
