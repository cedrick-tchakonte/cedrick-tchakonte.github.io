import Image from 'next/image'
import { motion } from 'framer-motion'

import { Container } from '@/components/Container'
import siteMetadata from '@/data/siteMetadata'
import { useT } from '@/i18n'
import { fadeUp, reveal } from '@/lib/motion'

/** Calm quote block with a small avatar (no gradient band, no gradient text). */
const Testimonial = () => {
  const t = useT()

  return (
    <div className="py-16 sm:py-20">
      <Container>
        <motion.figure
          variants={fadeUp}
          {...reveal}
          className="mx-auto max-w-3xl rounded-2xl border border-primaryText-200/70 bg-white p-6 shadow-sm dark:border-primaryText-800 dark:bg-primaryText-900 sm:p-10"
        >
          <svg
            className="h-8 w-8 text-accent-500/30 dark:text-accent-400/30"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <blockquote className="mt-6">
            <p className="text-xl font-medium leading-8 tracking-tight text-primaryText-900 dark:text-primaryText-50 sm:text-2xl sm:leading-9">
              {t(siteMetadata.testimonial.comment)}
            </p>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Image
              className="h-12 w-12 flex-none rounded-full object-cover ring-1 ring-primaryText-900/5 dark:ring-white/10"
              src={siteMetadata.testimonial.imgUrl}
              alt="testimonials"
              width={96}
              height={96}
              title={siteMetadata.testimonial.imageAttribution}
            />
            <div className="min-w-0">
              <p className="text-base font-semibold text-primaryText-900 dark:text-primaryText-50">
                {siteMetadata.testimonial.author}
              </p>
              <p className="text-sm text-primaryText-500">
                {t(siteMetadata.testimonial.authorTitle)}
              </p>
            </div>
          </figcaption>
        </motion.figure>
      </Container>
    </div>
  )
}

export default Testimonial
