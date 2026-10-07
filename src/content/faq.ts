import type { I18n } from '@/i18n'

export interface FaqItem {
  question: I18n<string>
  answer: I18n<string>
}

export const faqs: FaqItem[] = [
  {
    question: {
      en: 'What inspired you to pursue AI and robotics?',
      fr: "Qu'est-ce qui vous a poussé à vous orienter vers l'IA et la robotique ?",
    },
    answer: {
      en: 'My passion was sparked by their potential to transform industries and improve lives. Building systems that learn and adapt fascinates me, and I love tackling complex problems.',
      fr: "Ma passion est née de leur potentiel à transformer de nombreux secteurs et à améliorer le quotidien. Créer des systèmes qui apprennent et s'adaptent me fascine, et j'aime m'attaquer à des problèmes complexes.",
    },
  },
  {
    question: {
      en: 'Can you describe a project you are particularly proud of?',
      fr: 'Pouvez-vous décrire un projet dont vous êtes particulièrement fier ?',
    },
    answer: {
      en: 'An autonomous navigation system for a robotic vehicle, using machine learning for object recognition and path planning.',
      fr: "Un système de navigation autonome pour un véhicule robotique, avec du machine learning pour la reconnaissance d'objets et la planification de trajectoire.",
    },
  },
  {
    question: {
      en: 'What programming languages and tools do you use?',
      fr: 'Quels langages de programmation et outils utilisez-vous ?',
    },
    answer: {
      en: 'I mainly use Python for its ML and data libraries, C++ for performance-critical code and Java for some projects, plus TensorFlow, PyTorch and ROS (Robot Operating System).',
      fr: "J'utilise surtout Python pour ses bibliothèques de ML et de données, le C++ pour le code critique en performance et Java pour certains projets, ainsi que TensorFlow, PyTorch et ROS (Robot Operating System).",
    },
  },
  {
    question: {
      en: 'How do you stay updated with the latest advancements in AI and robotics?',
      fr: "Comment vous tenez-vous informé des dernières avancées en IA et en robotique ?",
    },
    answer: {
      en: 'I stay updated with the latest advancements by reading research papers, attending conferences, participating in online forums, and taking advanced courses.',
      fr: "Je me tiens informé des dernières avancées en lisant des articles de recherche, en assistant à des conférences, en participant à des forums en ligne et en suivant des cours avancés.",
    },
  },
  {
    question: {
      en: 'What are your future goals in AI and robotics?',
      fr: "Quels sont vos objectifs futurs en IA et en robotique ?",
    },
    answer: {
      en: 'Contributing to cutting-edge research, solving real-world problems, and sharing my knowledge through teaching and mentoring, to help move AI and robotics forward.',
      fr: "Contribuer à la recherche de pointe, résoudre des problèmes concrets et partager mes connaissances par l'enseignement et le mentorat, pour faire avancer l'IA et la robotique.",
    },
  },
  {
    question: {
      en: 'How do you handle challenges and setbacks in your projects?',
      fr: 'Comment gérez-vous les difficultés et les revers dans vos projets ?',
    },
    answer: {
      en: 'I see challenges and setbacks as chances to learn. Faced with a hard problem, I analyze the situation, seek feedback from peers and explore other approaches.',
      fr: "Je vois les difficultés et les revers comme des occasions d'apprendre. Face à un problème complexe, j'analyse la situation, je sollicite l'avis de mes pairs et j'explore d'autres approches.",
    },
  },
]
