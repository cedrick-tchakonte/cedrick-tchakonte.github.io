import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-accent-600 font-semibold tracking-wide uppercase">FAQ</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primaryText-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-primaryText-600 dark:text-primaryText-400 lg:mx-auto">
            Here are some common questions about my work in AI and robotics.
          </p>
        </div>

        <div className="mt-12">
          <dl className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative p-6 bg-white dark:bg-primaryText-800 rounded-lg shadow-lg transform transition-transform duration-300 border border-primaryText-200/50 dark:border-primaryText-700/50"
              >
                <dt className="text-lg leading-6 font-medium text-primaryText-900 dark:text-white">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-primaryText-600 dark:text-primaryText-400">
                  {faq.answer}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <div className="lg:text-center">
          <p className="mt-4 text-lg text-primaryText-600 dark:text-primaryText-400">
            Can’t find the answer you’re looking for? Reach out to{' '}
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
    </div>
  )
}

export default Faq
