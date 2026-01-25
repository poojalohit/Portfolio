import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface WorkExperience {
  company: string
  role: string
  period: string
  link: string
  description: string[]
  isIntern?: boolean
}

const WorkExperience = () => {
  const experiences: WorkExperience[] = [
    {
      company: 'Thales Group',
      role: 'Inside Sales Rep',
      period: '2022-2025',
      link: 'https://www.thalesgroup.com',
      description: [
        'Championed the adoption of Identity and Access Management (IAM) solutions across the Middle East, Turkey, and Africa, earning global recognition in 2025 for driving significant ecosystem growth.',
        'Specialized in turning user feedback and churn data into actionable retention strategies, which resulted in a 20% year-over-year increase in renewal revenue for a $3M annual portfolio.',
        'Acted as a bridge between customers and technical teams, collaborating with R&D and Engineering to align product roadmaps with real-world identity verification needs.',
        'Leveraged Power BI and Salesforce to refine sales forecasting models, achieving 94% data accuracy to support senior leadership\'s strategic decisions.',
      ],
    },
    {
      company: 'Beta Information Technology',
      role: 'Sales Account Manager',
      period: '2021-2022',
      link: 'https://www.betait.net',
      description: [
        'Managed the end-to-end lifecycle of networking and cybersecurity solutions for 15 enterprise accounts.',
        'Focused on identifying technical infrastructure gaps and proposing modernizations that met evolving security standards.',
        'Conducted deep market intelligence and competitive research, ensuring that our product offerings stayed ahead of the curve and remained aligned with the complex business needs of our enterprise partners.',
      ],
    },
    {
      company: 'Beta Information Technology',
      role: 'Intern',
      period: 'June 2020 - August 2020',
      link: 'https://www.betait.net',
      isIntern: true,
      description: [
        'Stepped into a leadership role early by heading a cross-functional team of five to research emerging trends in AI and Data Infrastructure.',
        'Responsible for synthesizing complex technical data into high-impact strategic insights, which I presented weekly to senior leadership.',
        'These insights directly informed the development of future solution roadmaps, helping the company stay proactive in a rapidly shifting tech landscape.',
      ],
    },
  ]

  return (
    <section
      id="work"
      className="min-h-screen py-20 px-6 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-strong rounded-2xl p-6 hover:shadow-2xl hover:shadow-nyu-purple/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                  <p className="text-nyu-purple-light font-semibold text-lg mb-1">
                    {exp.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                </div>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nyu-purple-light hover:text-nyu-purple transition-colors flex-shrink-0 ml-2"
                  aria-label={`Visit ${exp.company} website`}
                >
                  <FaExternalLinkAlt />
                </a>
              </div>

              <div className="space-y-2 pt-4 border-t border-gray-700/50">
                {exp.description.map((desc, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-nyu-purple-light mt-1 flex-shrink-0">▸</span>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
