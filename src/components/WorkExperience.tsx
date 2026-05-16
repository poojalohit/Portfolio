import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { workExperienceData } from '../data/portfolioData'

const WorkExperience = () => {
  const experiences = workExperienceData

  return (
    <section
      id="work"
      className="py-20 px-6 relative bg-charcoal"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 md:p-12 border border-surface-light/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-text-primary">
            Work Experience
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => {
              const roleBlocks =
                exp.roles && exp.roles.length > 0
                  ? exp.roles
                  : [{ role: exp.role, period: exp.period, description: exp.description }]

              return (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-surface rounded-2xl p-6 hover:bg-surface-elevated transition-all duration-300 focus-ring border border-accent-blue/20 shadow-lg shadow-accent-blue/5"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-light text-text-primary flex-1">
                      {exp.company}
                    </h3>
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

                  <div className="space-y-6">
                    {roleBlocks.map((block, blockIdx) => (
                      <div
                        key={`${block.role}-${block.period}`}
                        className={
                          blockIdx > 0
                            ? 'pt-6 border-t border-surface-light/20'
                            : ''
                        }
                      >
                        <p className="text-accent-blue font-light text-lg mb-1">
                          {block.role}
                        </p>
                        <p className="text-text-muted text-sm mb-3">{block.period}</p>

                        {block.description.length > 0 && (
                          <div className="space-y-2 pt-3 border-t border-surface-light/20">
                            {block.description.map((desc, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-text-secondary text-sm"
                              >
                                <span className="text-accent-gold mt-1 flex-shrink-0">▸</span>
                                <span className="whitespace-pre-line">{desc}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience
