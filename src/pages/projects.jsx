import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'

import ecomLogo from '@/images/projects/ecom.svg'
import bananaLogo from '@/images/projects/bananaApp.svg'
import supaSnacksLogo from '@/images/projects/supaSnacks.svg'
import payByFonieLogo from '@/images/projects/payByFonie.svg'
import { ChevronRightIcon } from '@/images/icons/NavIcons'

// TODO: Add your own projects here. Logo images from https://heroicons.com/
const projectsData = [
  {
    title: "Retinal Vessel Segmentation in SLO Ophthalmoscopy",
    description: "Developed automated retinal vessel segmentation system using image derivation operators and specialized vascular filters for Scanning Laser Ophthalmoscopy (SLO) retinal images. Implemented two segmentation approaches against IOSTAR database ground truth, applying advanced image processing techniques including gradient operators and morphological filtering for precise vascular structure detection.",
    logo: ecomLogo,
    href: "https://github.com/CeGeek23/retinal-vessel-segmentation",
    category: "Computer Vision & Biomedical Imaging",
  },
  {
    title: "Computer Vision and Feature Detection Projects",
    description: "Implemented comprehensive computer vision solutions including Bayesian classification and K-means clustering for skin detection using Essex dataset, achieving robust pixel-level classification. Developed feature detection pipeline using Harris corner detection, ORB, and KAZE algorithms with OpenCV, applying gradient analysis and morphological operations for robust point matching across scales and transformations.",
    logo: bananaLogo,
    href: "https://github.com/CeGeek23/computer-vision-projects",
    category: "Computer Vision & Image Processing",
  },
  {
    title: "4D GPS Navigation System for VTOL Aircraft",
    description: "Developed trajectory optimization algorithms for vertical takeoff and landing aircraft in collaboration with Technoplane company, using 3D mapping and dynamic weather modeling as a 4th dimension. Simulated and analyzed real-time path planning strategies for autonomous flight systems.",
    logo: supaSnacksLogo,
    href: "https://github.com/CeGeek23/vtol-navigation-system",
    category: "Aerospace & Navigation Systems",
  },
  {
    title: "Chatbot with PyQt5",
    description: "This is a simple chatbot that I built using PyQt5. I wanted to learn more about PyQt5 and how to build desktop applications. The chatbot is a simple application that allows you to chat with a bot. The bot can answer simple questions and provide information about the weather. The chatbot uses the OpenWeatherMap API to get the weather information.",
    logo: payByFonieLogo,
    href: "https://github.com/CeGeek23/chatbot",
    category: "Desktop Application",
  },
  {
    title: "Intrusion Detection System",
    description: "This project is a simple intrusion detection system composed of a mobile application, arduino cards, micro cameras and a server. The system is designed to detect intruders in a room and send an alert to the user's mobile phone. The system uses a combination of motion sensors, cameras and a server to detect intruders and send an alert to the user's mobile phone. The system is built using Arduino, Python, Flask and React Native.",
    logo: ecomLogo,
    href: "https://github.com/CeGeek23/Syst-me_detection_d_intrusion",
    category: "Security System",
  },
  {
    title: "Trafic prediction app in the city of Yaoundé (Cameroon)",
    description: "This project is a simple traffic prediction application for the city of Yaoundé in Cameroon. The application uses historical traffic data to predict traffic conditions in the city. The application uses a machine learning model to predict traffic conditions based on historical data. The application is built using Python, Flask and React.",
    logo: supaSnacksLogo,
    href: "https://github.com/CeGeek23/Syst-me_detection_d_intrusion",
    category: "Machine Learning Model",
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects-{siteMetadata.author}</title>
        <meta name="description" content="Personal projects by Cedrick Tchakonte" />
      </Head>
      <SimpleLayout
        title="Projects I've worked on"
        intro="These are some of the projects that I'm most proud of. I've built them to learn new technologies, or to solve a problem that I've encountered."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project) => {
            console.log(project)
            return (
              <Card as="li" key={project.title}>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={project.logo}
                    alt=""
                    className="w-8 h-8"
                    unoptimized
                    width={32}
                    height={32}
                  />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.href}>{project.title}</Card.Link>
                </h2>
                {/* Eyebrow - texte complémentaire */}
                <Card.Eyebrow decorate>
                  {project.category || "Category"}
                </Card.Eyebrow>
                <Card.Description>{project.description}</Card.Description>
                <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
                  <LinkIcon className="flex-none w-6 h-6" />
                  <span className="ml-2">{project.title}</span>
                </p>
              </Card>
            )
          })}
        </ul>
      </SimpleLayout>
    </>
  )
}
