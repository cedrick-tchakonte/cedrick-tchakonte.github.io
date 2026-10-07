import { useState, useEffect, useCallback } from 'react'
import Image, { type StaticImageData } from 'next/image'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { useT } from '@/i18n'
import { EASE } from '@/lib/motion'

export type CarouselSlide = {
  city: string
  country: string
  image: string | StaticImageData
  startDate: string
  endDate: string
  university?: string
  credit?: string
}

const controlButton =
  'flex h-10 w-10 items-center justify-center rounded-full bg-primaryText-100 text-primaryText-700 transition-colors duration-200 ease-smooth hover:bg-primaryText-200 hover:text-primaryText-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:bg-primaryText-800 dark:text-primaryText-200 dark:hover:bg-primaryText-700 dark:hover:text-primaryText-50'

/**
 * Lightweight, on-brand carousel for the mobility locations: smooth crossfade,
 * auto-advance that pauses on hover/focus, and keyboard-accessible controls in
 * a bar under the photo (so they never cover the caption or the photo credit).
 */
export function LocationCarousel({
  slides,
  interval = 5000,
}: {
  slides: CarouselSlide[]
  interval?: number
}) {
  const t = useT()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = slides.length

  const goTo = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count]
  )
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count]
  )

  useEffect(() => {
    if (paused || count <= 1) return
    const id = window.setInterval(next, interval)
    return () => window.clearInterval(id)
  }, [paused, count, interval, next])

  if (count === 0) return null
  const slide = slides[index]

  return (
    <div
      className="overflow-hidden rounded-2xl border border-primaryText-200/70 bg-white shadow-sm dark:border-primaryText-800 dark:bg-primaryText-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={t({ en: 'Places I have lived and worked', fr: "Lieux où j'ai vécu et travaillé" })}
    >
      <div className="relative aspect-[16/10] w-full bg-primaryText-100 dark:bg-primaryText-800 sm:aspect-[2/1]">
        {/*
          Crossfade: the incoming slide (rendered last, so on top) fades in while
          the outgoing one stays opaque underneath, then the old one is removed.
          No dip to the background colour mid-transition.
        */}
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: EASE } }}
            exit={{ opacity: 0, transition: { duration: 0.2, delay: 0.4 } }}
          >
            <Image
              src={slide.image}
              alt={`${slide.city}, ${slide.country}`}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 56rem, 100vw"
              className="object-cover"
            />
            {/* Bottom scrim for caption legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {slide.credit && (
              <p className="absolute left-3 top-3 z-10 max-w-[calc(100%-1.5rem)] rounded-lg bg-black/60 px-2 py-0.5 text-xs text-white/90">
                {slide.credit}
              </p>
            )}
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8">
              <p className="text-sm font-medium text-white/80">
                {slide.startDate === slide.endDate
                  ? slide.startDate
                  : `${slide.startDate} - ${slide.endDate}`}
              </p>
              <h4 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                {slide.city}, {slide.country}
              </h4>
              {slide.university && (
                <p className="mt-1 text-sm text-white/80 sm:text-base">
                  {slide.university}
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls: dots on the left, prev / next on the right */}
      <div className="flex items-center justify-between gap-4 px-3 py-2 sm:px-5">
        <div className="flex flex-wrap items-center">
          {slides.map((s, i) => (
            <button
              key={s.city}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${t({ en: 'Go to', fr: 'Aller à' })} ${s.city}`}
              aria-current={i === index}
              className="group/dot flex h-10 items-center rounded-full px-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-500"
            >
              <span
                aria-hidden="true"
                className={clsx(
                  'block h-2 rounded-full transition-[width,background-color] duration-300 ease-smooth',
                  i === index
                    ? 'w-6 bg-accent-500 dark:bg-accent-400'
                    : 'w-2 bg-primaryText-300 group-hover/dot:bg-primaryText-400 dark:bg-primaryText-600 dark:group-hover/dot:bg-primaryText-500'
                )}
              />
            </button>
          ))}
        </div>

        <div className="flex flex-none items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label={t({ en: 'Previous location', fr: 'Lieu précédent' })}
            className={controlButton}
          >
            <FaChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={t({ en: 'Next location', fr: 'Lieu suivant' })}
            className={controlButton}
          >
            <FaChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
