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
          className="text-4xl md:text-5xl font-light mb-16 text-center text-white"
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
              className="glass-strong rounded-2xl p-6 hover:shadow-2xl hover:shadow-dusty-rose/10 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-light mb-1 text-white">{exp.company}</h3>
                  <p className="text-slate-blue font-light text-lg mb-1">
                    {exp.role}
                  </p>
                  <p className="text-light-blue-grey/70 text-sm mb-3">{exp.period}</p>
                </div>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-blue hover:text-slate-blue/80 transition-colors flex-shrink-0 ml-2"
                  aria-label={`Visit ${exp.company} website`}
                >
                  <FaExternalLinkAlt />
                </a>
              </div>

              <div className="space-y-2 pt-4 border-t border-light-blue-grey/10">
                {exp.description.map((desc, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-light-blue-grey text-sm">
                    <span className="text-dusty-rose mt-1 flex-shrink-0">▸</span>
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
