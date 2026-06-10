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
      en: 'My passion for AI and robotics was sparked by the potential these technologies have to revolutionize various industries and improve lives. The ability to create intelligent systems that can learn and adapt fascinates me, and I am driven by the challenge of solving complex problems.',
      fr: "Ma passion pour l'IA et la robotique est née du potentiel de ces technologies à révolutionner de nombreux secteurs et à améliorer le quotidien. La possibilité de créer des systèmes intelligents capables d'apprendre et de s'adapter me fascine, et je suis animé par le défi de résoudre des problèmes complexes.",
    },
  },
  {
    question: {
      en: 'Can you describe a project you are particularly proud of?',
      fr: 'Pouvez-vous décrire un projet dont vous êtes particulièrement fier ?',
    },
    answer: {
      en: 'One of the projects I am most proud of is developing an autonomous navigation system for a robotic vehicle. This project involved implementing machine learning algorithms for object recognition and path planning.',
      fr: "L'un des projets dont je suis le plus fier est le développement d'un système de navigation autonome pour un véhicule robotique. Ce projet impliquait la mise en œuvre d'algorithmes de machine learning pour la reconnaissance d'objets et la planification de trajectoire.",
    },
  },
  {
    question: {
      en: 'What programming languages and tools do you use?',
      fr: 'Quels langages de programmation et outils utilisez-vous ?',
    },
    answer: {
      en: 'I primarily use Python for its simplicity and extensive libraries for machine learning and data analysis. I also use C++ for performance-critical applications and Java for certain projects. Additionally, I am proficient with tools such as TensorFlow, PyTorch, and ROS (Robot Operating System).',
      fr: "J'utilise principalement Python pour sa simplicité et sa richesse de bibliothèques dédiées au machine learning et à l'analyse de données. J'emploie aussi le C++ pour les applications critiques en performance et Java pour certains projets. Je maîtrise par ailleurs des outils tels que TensorFlow, PyTorch et ROS (Robot Operating System).",
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
      en: 'My future goals include contributing to cutting-edge research, developing innovative solutions for real-world problems, and sharing my knowledge through teaching and mentoring. I aim to make a significant impact in the fields of AI and robotics and help drive technological advancements.',
      fr: "Mes objectifs futurs incluent la contribution à des recherches de pointe, le développement de solutions innovantes pour des problèmes concrets et le partage de mes connaissances par l'enseignement et le mentorat. Je souhaite avoir un impact significatif dans les domaines de l'IA et de la robotique et contribuer à faire avancer la technologie.",
    },
  },
  {
    question: {
      en: 'How do you handle challenges and setbacks in your projects?',
      fr: 'Comment gérez-vous les difficultés et les revers dans vos projets ?',
    },
    answer: {
      en: 'I view challenges and setbacks as opportunities to learn and grow. When faced with a difficult problem, I analyze the situation, seek feedback from peers, and explore alternative approaches.',
      fr: "Je considère les difficultés et les revers comme des occasions d'apprendre et de progresser. Face à un problème complexe, j'analyse la situation, je sollicite les retours de mes pairs et j'explore d'autres approches.",
    },
  },
]
