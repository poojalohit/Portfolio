import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { workExperienceData } from '../data/portfolioData'

const WorkExperience = () => {
  const experiences = workExperienceData

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
          className="text-4xl md:text-5xl font-light mb-16 text-center text-text-primary"
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
              className="glass-strong rounded-2xl p-6 hover:shadow-2xl hover:shadow-accent-blue/20 transition-all duration-300 hover:scale-105 focus-ring"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-light mb-1 text-text-primary">{exp.company}</h3>
                  <p className="text-accent-blue font-light text-lg mb-1">
                    {exp.role}
                  </p>
                  <p className="text-text-muted text-sm mb-3">{exp.period}</p>
                </div>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-blue hover:text-accent-blue-hover transition-colors flex-shrink-0 ml-2 focus-ring"
                  aria-label={`Visit ${exp.company} website`}
                >
                  <FaExternalLinkAlt />
                </a>
              </div>

              <div className="space-y-2 pt-4 border-t border-surface-light/20">
                {exp.description.map((desc, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-accent-gold mt-1 flex-shrink-0">▸</span>
                    <span className="whitespace-pre-line">{desc}</span>
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
