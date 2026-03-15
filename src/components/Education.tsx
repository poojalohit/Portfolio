import { motion } from 'framer-motion'
import { educationData } from '../data/portfolioData'

const Education = () => {

  return (
    <section
      id="education"
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
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Vertical divider line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-surface-light/30 to-transparent transform -translate-x-1/2" />
            
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.university}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-surface/50 rounded-2xl p-8 hover:bg-surface/70 transition-all duration-300 relative focus-ring border border-surface-light/10"
              >
                {/* University Name */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-light mb-4 ${
                    edu.university === 'NYU' ? 'text-accent-blue' : 'text-accent-gold'
                  }`}>
                    {edu.university === 'NYU' ? 'New York University' : 'Amity University Dubai'}
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-text-secondary text-lg">{edu.degree}</p>
                  <p className="text-text-muted font-light text-lg">
                    {edu.period}
                  </p>
                  <p className="text-text-muted">{edu.gpa}</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-surface-light/20">
                  <p className="text-sm font-light text-text-muted mb-2">
                    {edu.university === 'NYU' ? 'Positions Held:' : 'Achievements:'}
                  </p>
                  {edu.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-text-secondary"
                    >
                      <span className="text-accent-gold mt-1">▸</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
