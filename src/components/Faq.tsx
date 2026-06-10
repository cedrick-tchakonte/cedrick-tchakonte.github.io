import siteMetadata from '@/data/siteMetadata'
import { Disclosure, Transition } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import { SectionHeading } from '@/components/SectionHeading'

type FaqItem = {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'What inspired you to pursue AI and robotics?',
    answer:
      'My passion for AI and robotics was sparked by the potential these technologies have to revolutionize various industries and improve lives. The ability to create intelligent systems that can learn and adapt fascinates me, and I am driven by the challenge of solving complex problems.',
  },
  {
    question: 'Can you describe a project you are particularly proud of?',
    answer:
      'One of the projects I am most proud of is developing an autonomous navigation system for a robotic vehicle. This project involved implementing machine learning algorithms for object recognition and path planning.',
  },
  {
    question: 'What programming languages and tools do you use?',
    answer:
      'I primarily use Python for its simplicity and extensive libraries for machine learning and data analysis. I also use C++ for performance-critical applications and Java for certain projects. Additionally, I am proficient with tools such as TensorFlow, PyTorch, and ROS (Robot Operating System).',
  },
  {
    question: 'How do you stay updated with the latest advancements in AI and robotics?',
    answer:
      'I stay updated with the latest advancements by reading research papers, attending conferences, participating in online forums, and taking advanced courses.',
  },
  {
    question: 'What are your future goals in AI and robotics?',
    answer:
      'My future goals include contributing to cutting-edge research, developing innovative solutions for real-world problems, and sharing my knowledge through teaching and mentoring. I aim to make a significant impact in the fields of AI and robotics and help drive technological advancements.',
  },
  {
    question: 'How do you handle challenges and setbacks in your projects?',
    answer:
      'I view challenges and setbacks as opportunities to learn and grow. When faced with a difficult problem, I analyze the situation, seek feedback from peers, and explore alternative approaches.',
  },
]

const Faq = () => {
  return (
    <div className="py-16 sm:py-20 bg-primaryText-50 dark:bg-primaryText-900">
      <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Here are some common questions about my work in AI and robotics."
        />

        <dl className="mt-10 overflow-hidden bg-white border divide-y shadow-sm rounded-2xl divide-primaryText-200/70 border-primaryText-200/60 dark:divide-primaryText-700/50 dark:border-primaryText-700/50 dark:bg-primaryText-800">
          {faqs.map((faq, index) => (
            <Disclosure as="div" key={index} defaultOpen={index === 0}>
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex items-center justify-between w-full gap-4 px-6 py-5 text-left transition-colors hover:bg-accent-50/50 dark:hover:bg-accent-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-inset">
                      <span className="text-base font-semibold text-primaryText-900 dark:text-primaryText-100">
                        {faq.question}
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
                      {faq.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </dl>

        <p className="mt-8 text-center text-primaryText-600 dark:text-primaryText-400">
          Can&apos;t find the answer you&apos;re looking for? Reach out to{' '}
          <a
            href={`mailto:${siteMetadata.email}`}
            className="font-medium text-accent-600 hover:text-accent-500"
          >
            me
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default Faq
