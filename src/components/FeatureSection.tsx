import { motion } from 'framer-motion'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { useT } from '@/i18n'
import { features } from '@/content/features'
import { fadeUp, reveal, stagger } from '@/lib/motion'

const FeatureSection = () => {
  const t = useT()

  return (
    <div className="py-16 sm:py-20">
      <Container>
        <motion.div variants={fadeUp} {...reveal}>
          <SectionHeading
            align="center"
            eyebrow={t({
              en: 'Engineering Student & AI Specialist',
              fr: 'Étudiant ingénieur et spécialiste en IA',
            })}
            title={t({ en: 'Why Choose Me?', fr: 'Pourquoi me choisir ?' })}
            subtitle={t({
              en: "I'm a final-year engineering student in AI and Cyber-Physical Systems at ENSTA Paris, with hands-on industry experience in machine learning research and AI engineering.",
              fr: "Je suis élève ingénieur en dernière année en IA et systèmes cyber-physiques à l'ENSTA Paris, avec une expérience concrète en entreprise en recherche en machine learning et en ingénierie IA.",
            })}
          />
        </motion.div>

        <motion.ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
          variants={stagger}
          {...reveal}
        >
          {features.map((feature) => (
            <motion.li key={feature.name.en} variants={fadeUp} className="grid">
              <Card className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 ring-1 ring-inset ring-accent-500/20 dark:bg-accent-400/10 dark:text-accent-400 dark:ring-accent-400/20">
                  <feature.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <Card.Title className="mt-5">{t(feature.name)}</Card.Title>
                <Card.Description>{t(feature.description)}</Card.Description>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </div>
  )
}

export default FeatureSection
