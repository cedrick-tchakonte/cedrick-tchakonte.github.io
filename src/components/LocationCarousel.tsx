import { useState, useEffect, useCallback } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export type CarouselSlide = {
  city: string
  country: string
  image: string | StaticImageData
  startDate: string
  endDate: string
  university?: string
}

/**
 * Lightweight, on-brand carousel for the mobility locations. Replaces the
 * default-styled react-slick slider: accent controls and dots, smooth crossfade,
 * auto-advance that pauses on hover/focus, and keyboard-accessible buttons.
 */
export function LocationCarousel({
  slides,
  interval = 5000,
}: {
  slides: CarouselSlide[]
  interval?: number
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = slides.length

  const goTo = useCallback((i: number) => setIndex(((i % count) + count) % count), [count])
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])

  useEffect(() => {
    if (paused || count <= 1) return
    const id = window.setInterval(next, interval)
    return () => window.clearInterval(id)
  }, [paused, count, interval, next])

  if (count === 0) return null
  const slide = slides[index]

  return (
    <div
      className="relative overflow-hidden border shadow-2xl rounded-2xl border-primaryText-200/50 dark:border-primaryText-700/50 bg-primaryText-100 dark:bg-primaryText-800"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Places I have lived and worked"
    >
      <div className="relative w-full aspect-[16/10] sm:aspect-[2/1]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Image
              src={slide.image}
              alt={`${slide.city}, ${slide.country}`}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 56rem, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 pr-24 sm:p-8 sm:pr-28 text-white">
              <p className="text-sm font-semibold text-accent-300">
                {slide.startDate} - {slide.endDate}
              </p>
              <h4 className="mt-1 text-2xl font-bold drop-shadow sm:text-3xl">
                {slide.city}, {slide.country}
              </h4>
              {slide.university && (
                <p className="mt-1 text-sm text-white/90 sm:text-base">{slide.university}</p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous location"
        className="absolute z-10 flex items-center justify-center w-10 h-10 text-white transition rounded-full -translate-y-1/2 top-1/2 left-3 bg-black/30 hover:bg-accent-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-400"
      >
        <FaChevronLeft className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next location"
        className="absolute z-10 flex items-center justify-center w-10 h-10 text-white transition rounded-full -translate-y-1/2 top-1/2 right-3 bg-black/30 hover:bg-accent-500 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-400"
      >
        <FaChevronRight className="w-4 h-4" />
      </button>

      {/* Dots */}
      <div className="absolute z-10 flex gap-2 right-5 bottom-6 sm:bottom-8">
        {slides.map((s, i) => (
          <button
            key={s.city}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to ${s.city}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-accent-400' : 'w-2 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
