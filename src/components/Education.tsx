import { motion } from 'framer-motion'

const Education = () => {
  const educationData = [
    {
      university: 'NYU',
      logo: '🏛️',
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
      logo: '🎓',
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

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.university}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-strong rounded-2xl p-8 hover:shadow-2xl hover:shadow-nyu-purple/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{edu.logo}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{edu.university}</h3>
                  <p className="text-gray-300 mb-2">{edu.degree}</p>
                  <p className="text-nyu-purple-light font-semibold text-lg mb-2">
                    {edu.period}
                  </p>
                  <p className="text-gray-400 mb-4">{edu.gpa}</p>
                </div>
              </div>

              <div className="space-y-2">
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
