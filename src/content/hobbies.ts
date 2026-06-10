import { FaVolleyballBall, FaChess, FaFutbol, FaBicycle, FaCode, FaBook, FaPlane } from 'react-icons/fa'
import { GiSoccerField } from 'react-icons/gi'
import type { IconType } from 'react-icons'
import type { I18n } from '@/i18n'

export type Hobby = {
  name: I18n<string>
  description: I18n<string>
  icon: IconType
}

export const hobbies: Hobby[] = [
  {
    name: { en: 'Volleyball', fr: 'Volleyball' },
    description: {
      en: 'Played for a year with the volleyball team at ENSTA.',
      fr: "Un an passé avec l'équipe de volley de l'ENSTA.",
    },
    icon: FaVolleyballBall,
  },
  {
    name: { en: 'Chess', fr: 'Échecs' },
    description: {
      en: 'Strategy, tactics and the occasional online game.',
      fr: "Stratégie, tactique et une partie en ligne de temps en temps.",
    },
    icon: FaChess,
  },
  {
    name: { en: 'Football', fr: 'Football' },
    description: {
      en: 'Casual matches with friends and following the game.',
      fr: "Des matchs entre amis et le plaisir de suivre le jeu.",
    },
    icon: FaFutbol,
  },
  {
    name: { en: 'Babyfoot', fr: 'Babyfoot' },
    description: {
      en: 'Competitive table football, a campus favorite.',
      fr: "Du baby-foot en mode compétition, un incontournable du campus.",
    },
    icon: GiSoccerField,
  },
  {
    name: { en: 'Cycling', fr: 'Vélo' },
    description: {
      en: 'Long rides to explore, stay active and unwind.',
      fr: "De longues sorties pour explorer, rester actif et décompresser.",
    },
    icon: FaBicycle,
  },
  {
    name: { en: 'Coding Projects', fr: 'Projets perso' },
    description: {
      en: 'Building side projects and contributing to open source.',
      fr: "Développer des projets perso et contribuer à l'open source.",
    },
    icon: FaCode,
  },
  {
    name: { en: 'Reading', fr: 'Lecture' },
    description: {
      en: 'Tech books, sci-fi novels and AI research papers.',
      fr: "Livres techniques, romans de science-fiction et articles de recherche en IA.",
    },
    icon: FaBook,
  },
  {
    name: { en: 'Travel', fr: 'Voyages' },
    description: {
      en: 'Exploring new cultures and destinations.',
      fr: "Découvrir de nouvelles cultures et destinations.",
    },
    icon: FaPlane,
  },
]
