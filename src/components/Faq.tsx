import siteMetadata from '@/data/siteMetadata'
import { Disclosure, Transition } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import { SectionHeading } from '@/components/SectionHeading'
import { useT } from '@/i18n'
import type { I18n } from '@/i18n'

type FaqItem = {
  question: I18n<string>
  answer: I18n<string>
}

const faqs: FaqItem[] = [
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

const Faq = () => {
  const t = useT()

  return (
    <div className="py-16 sm:py-20 bg-primaryText-50 dark:bg-primaryText-900">
      <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow={t({ en: 'FAQ', fr: 'FAQ' })}
          title={t({ en: 'Frequently Asked Questions', fr: 'Foire aux questions' })}
          subtitle={t({
            en: 'Here are some common questions about my work in AI and robotics.',
            fr: "Voici quelques questions fréquentes sur mon travail en IA et en robotique.",
          })}
        />

        <dl className="mt-10 overflow-hidden bg-white border divide-y shadow-sm rounded-2xl divide-primaryText-200/70 border-primaryText-200/60 dark:divide-primaryText-700/50 dark:border-primaryText-700/50 dark:bg-primaryText-800">
          {faqs.map((faq, index) => (
            <Disclosure as="div" key={index} defaultOpen={index === 0}>
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex items-center justify-between w-full gap-4 px-6 py-5 text-left transition-colors hover:bg-accent-50/50 dark:hover:bg-accent-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-inset">
                      <span className="text-base font-semibold text-primaryText-900 dark:text-primaryText-100">
                        {t(faq.question)}
                      </span>
                      <FaChevronDown
                        className={`h-4 w-4 flex-shrink-0 text-accent-500 transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="opacity-0 -translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition duration-150 ease-in"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-1"
                  >
                    <Disclosure.Panel
                      as="dd"
                      className="px-6 pb-5 -mt-1 text-base leading-relaxed text-primaryText-600 dark:text-primaryText-400"
                    >
                      {t(faq.answer)}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </dl>

        <p className="mt-8 text-center text-primaryText-600 dark:text-primaryText-400">
          {t({
            en: "Can't find the answer you're looking for? Reach out to",
            fr: 'Vous ne trouvez pas la réponse que vous cherchez ? Contactez',
          })}{' '}
          <a
            href={`mailto:${siteMetadata.email}`}
            className="font-medium text-accent-600 hover:text-accent-500"
          >
            {t({ en: 'me', fr: 'moi' })}
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default Faq
