import { motion } from 'framer-motion'
import { educationData } from '../data/portfolioData'

const Education = () => {

  return (
    <section
      id="education"
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
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Vertical divider line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2" />
          
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.university}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-strong rounded-2xl p-8 hover:shadow-2xl hover:shadow-dusty-rose/10 transition-all duration-300 relative"
            >
              {/* University Name */}
              <div className="mb-6">
                <h3 className={`text-2xl font-serif font-bold mb-4 ${
                  edu.university === 'NYU' ? 'text-lime' : 'text-yellow'
                }`}>
                  {edu.university === 'NYU' ? 'New York University' : 'Amity University Dubai'}
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-white/80 text-lg">{edu.degree}</p>
                <p className="text-taupe font-light text-lg">
                  {edu.period}
                </p>
                <p className="text-light-blue-grey/70">{edu.gpa}</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-light-blue-grey/10">
                <p className="text-sm font-light text-light-blue-grey/70 mb-2">
                  {edu.university === 'NYU' ? 'Positions Held:' : 'Achievements:'}
                </p>
                {edu.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-light-blue-grey"
                  >
                    <span className="text-dusty-rose mt-1">▸</span>
                    <span>{detail}</span>
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

export default Education
