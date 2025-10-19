import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from '@/components/SocialIcons'
import SocialLink from '@/components/SocialLink'
import Testimonial from '@/components/Testimonial'
import Faq from '@/components/Faq'
import FeatureSection from '@/components/FeatureSection'
import CallToAction from '@/components/CallToAction'
import DivideLine from '@/components/DivideLine'
import GapYearBadge from '@/components/GapYearBadge'
import siteMetadata from '@/data/siteMetadata'
import schoolLogo from '@/images/ensta-logo.jpg'


const Home = () => {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
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
      <Container className="mt-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-5xl bg-gradient-to-r from-primaryText-800 to-primaryText-600 dark:from-primaryText-100 dark:to-primaryText-300 bg-clip-text text-transparent">
              {siteMetadata.authorHeadline}
            </h1>
            <p className="mt-6 text-base text-primaryText-600 dark:text-primaryText-400">
              {siteMetadata.authorAbout}
            </p>
            {/* div container for social links */}
            <div className="flex gap-6 mt-6">
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
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-4">
            {/* Gap Year Badge à côté de la photo */}
            <GapYearBadge />
            
            <div className="relative group">
              {/* Effet de glow derrière l'image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              {/* Image avec effets */}
              <div className="relative">
                <Image
                  src={schoolLogo}
                  alt="Ensta Paris Logo"
                  width={400}
                  height={400}
                  priority
                  className="relative rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 border-4 border-primaryText-200/50 dark:border-primaryText-700/50 bg-white dark:bg-primaryText-800 p-4"
                />
                {/* Effet de reflet */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
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
