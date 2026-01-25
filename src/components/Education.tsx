import { motion } from 'framer-motion'

const Education = () => {
  const educationData = [
    {
      university: 'NYU',
      degree: "Master's Degree in Management of Technology",
      period: '2025-2027',
      gpa: 'GPA: 4.0/4.0',
      details: [
        'Graduate Student Advisory Board Member',
        'Alumni Relations Coordinator for Women in Business and Entrepreneurship',
      ],
      color: 'nyu-purple',
    },
    {
      university: 'Amity University Dubai',
      degree: 'Bachelor\'s Degree in Electronics and Telecommunication Engineering',
      period: '2017-2021',
      gpa: 'GPA: 9.51/10.00',
      details: ['100% Scholarship across all four years of study'],
      color: 'yellow',
    },
  ]

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
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Vertical divider line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-700 to-transparent transform -translate-x-1/2" />
          
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.university}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-strong rounded-2xl p-8 hover:shadow-2xl hover:shadow-nyu-purple/20 transition-all duration-300 relative"
            >
              {/* University Logo/Branding */}
              <div className="mb-6">
                {edu.university === 'NYU' ? (
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="/nyu-logo.png"
                      alt="NYU Logo"
                      className="h-12 w-auto object-contain"
                    />
                    <h3 className="text-2xl font-bold text-nyu-purple-light">NYU</h3>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 border-2 border-yellow-500/50 flex items-center justify-center">
                    <img
                      src="/Amity-logo.png"
                      alt="Amity University Dubai Logo"
                      className="h-8 w-auto object-contain"
                      onError={(e) => {
                        // Fallback if logo doesn't exist
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        target.parentElement!.innerHTML = '<span class="text-2xl font-bold text-yellow-400">A</span>'
                      }}
                    />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-400">AMITY UNIVERSITY DUBAI</h3>
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-gray-300 text-lg">{edu.degree}</p>
                <p className="text-nyu-purple-light font-semibold text-lg">
                  {edu.period}
                </p>
                <p className="text-gray-400">{edu.gpa}</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-gray-700/50">
                <p className="text-sm font-semibold text-gray-400 mb-2">
                  {edu.university === 'NYU' ? 'Positions Held:' : 'Achievements:'}
                </p>
                {edu.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <span className="text-nyu-purple-light mt-1">▸</span>
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
