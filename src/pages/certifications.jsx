import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import CertificationCard from '@/components/CertificationCard'
import siteMetadata from '@/data/siteMetadata'

const certifications = [
    {
      "name": "Deep Learning Specialization",
      "issuer": "deeplearning.ai",
      "date": "March 2023",
      "description": "A comprehensive certification covering neural networks, deep learning, and their applications in computer vision, natural language processing, and sequence models.",
      "logo": '/images/deepLearning.ai.png',
      "tags": ["AI", "Neural Networks","NLP","Deep Learning", "Computer Vision"],
      "verificationLink": "https://coursera.org/share/cfca8d6b98c3ddaf10ac87c8971ee486"
    },
    {
      "name": "Project Management",
      "issuer": "Centrale Lille",
      "date": "March 2023",
      "description": "A comprehensive certification covering the fundamentals of project management, including planning, team coordination, risk management, and Agile methodologies.",
      "logo": "/images/gdp.png",
      "tags": ["Project Management", "Agile", "Team Coordination", "Risk Management", "Planning"],
      "verificationLink": "https://certification.gestiondeprojet.pm/GdP24AP/GdP24PC-TCJavHuPA.pdf"
    },
    {
      "name": "Programmation pour tous(Mise en route de Python)",
      "issuer": "Coursera | University of Michigan",
      "date": "Février 2023",
      "description": "This course aims to teach everyone the basics of programming computers using Python. We cover the basics of how one constructs a program from a series of simple instructions in Python.",
      "logo": "/images/michigan.png",
      "tags": ["Python", "Software Development", "Programming", "Data Structures"],
      "verificationLink": "https://coursera.org/share/6685c3e76863eafdd0896d26bed78336"
    },
    {
      "name": "Initiation à la programmation en java",
      "issuer": "Coursera | Ecole Polytechnique Fédérale de Lausanne",
      "date": "Décembre 2022",
      "description": "This course aims to teach everyone the basics of programming computers using Python. We cover the basics of how one constructs a program from a series of simple instructions in Python, and how to write fun programs, so you can start creating your own programs.",
      "logo": "/images/epfl.png",
      "tags": ["Java", "Software Development", "Object-Oriented Programming", "Data Structures"],
      "verificationLink": "https://coursera.org/share/57909ae0d46dc914244f165bbb010689"
    },
    {
      "name": "FCF - Introduction to the Threat Landscape 2.0 Self-Paced",
      "issuer": "Fortinet",
      "date": "Octobre 2024",
      "description": "This course provides a foundation of cybersecurity knowledge and skills. It covers the latest trends in cybersecurity and how to protect your organization from cyber threats.",
      "logo": "/images/fortinet.png",
      "tags": ["Cybersecurity", "Threat Landscape", "Network Security", "Data Protection"],
      "verificationLink": "",
    },
    {
      "name": "FCF - Getting Started in Cybersecurity 2.0 Self-Paced",
      "issuer": "Fortinet",
      "date": "Octobre 2024",
      "description": "This course provides a foundation of cybersecurity knowledge and skills. It essential cybersecurity concepts, including the importance of cybersecurity, an overview of the most common threats, and how to mitigate them.",
      "logo": "/images/fortinet.png",
      "tags": ["Cybersecurity", "Network Security", "Data Protection", "Cryptography"],
      "verificationLink": "https://training.fortinet.com/local/cert/my/certificate.php?badge=84"
    },
    {
      "name": "FCA - FortiGate 7.4 Operator Self-Paced",
      "issuer": "Fortinet",
      "date": "Octobre 2024",
      "description": "This course specializes in the configuration and management of FortiGate devices. It covers the basics of FortiGate, including firewall policies, security profiles, and VPNs.",
      "logo": "/images/fortinet.png",
      "tags": ["FortiGate", "Network Security", "Firewall Policies", "VPN"],
      "verificationLink": "https://training.fortinet.com/local/cert/my/certificate.php?badge=85"
    },
]
  

export default function Certifications() {
  return (
    <>
      <Head>
        <title>Certifications - {siteMetadata.author}</title>
        <meta name="description" content={`Certifications obtained by ${siteMetadata.author}`} />
      </Head>
      <SimpleLayout
        title="Certifications"
        intro="Here are the various certifications I have obtained in the field of computer science, with a focus on AI, robotics, and software development."
      >
        {/* Grid Layout for Certification Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} />
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
