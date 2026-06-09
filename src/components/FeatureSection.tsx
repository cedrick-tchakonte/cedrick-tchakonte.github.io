import { RiRobotLine } from 'react-icons/ri'
import { IoSchoolOutline, IoCodeWorkingOutline, IoBulbOutline } from 'react-icons/io5'
import type { IconType } from 'react-icons'
import { SectionHeading } from '@/components/SectionHeading'

type Feature = {
  name: string
  description: string
  icon: IconType
}

const features: Feature[] = [
  {
    name: 'AI & Cyber-Physical Systems',
    description:
      'Currently specializing in AI and Cyber-Physical Systems at ENSTA Paris. Working on advanced machine learning algorithms, computer vision, and robotic navigation systems. Experience with TensorFlow, PyTorch, and ROS.',
    icon: RiRobotLine,
  },
  {
    name: 'Professional Experience',
    description:
      'Gaining hands-on industry experience as a Machine Learning Research Intern at Stellantis, and through internships at TAEP, Objectware and STMicroelectronics. My work spans surrogate modeling, Graph RAG, LLM-based decision support and Digital Twin simulations.',
    icon: IoSchoolOutline,
  },
  {
    name: 'Research & Innovation',
    description:
      'Passionate about pushing the boundaries of AI and technology. Developed retinal vessel segmentation systems, computer vision algorithms, and 4D GPS navigation for VTOL aircraft. Always exploring new technologies and innovative solutions.',
    icon: IoBulbOutline,
  },
  {
    name: 'Full-Stack Development',
    description:
      'Proficient in multiple programming languages including Python, C++, Java, JavaScript, and R. Experience with web development (React, Next.js), cloud platforms (AWS, Azure), and development tools (Docker, Git). Strong foundation in software engineering and system design.',
    icon: IoCodeWorkingOutline,
  },
]
const FeatureSection = () => {
  return (
    <div className="py-16 sm:py-20">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Engineering Student & AI Specialist"
          title="Why Choose Me?"
          subtitle="I am an engineering student specializing in AI and Cyber-Physical Systems at ENSTA Paris, currently on a gap year gaining hands-on industry experience. My projects and professional experiences reflect my dedication and innovative approach in AI and technology."
        />

        <div className="max-w-lg mt-12 sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex items-center justify-center w-12 h-12 text-white rounded-xl bg-accent-500 sm:shrink-0">
                  <feature.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-primaryText-800 dark:text-primaryText-100">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-primaryText-600 dark:text-primaryText-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
