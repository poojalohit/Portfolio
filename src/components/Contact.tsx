import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { contactData } from '../data/portfolioData'

const Contact = () => {
  const iconMap = {
    email: FaEnvelope,
    phone: FaPhone,
    location: FaMapMarkerAlt,
  }

  const contactInfo = contactData.map(item => ({
    ...item,
    icon: iconMap[item.icon],
  }))

  return (
    <section
      id="contact"
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
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-2xl p-8 md:p-12 max-w-3xl mx-auto"
        >
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const content = info.link ? (
                <a
                  href={info.link}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-nyu-purple/20 border-2 border-nyu-purple/50 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-nyu-purple-light text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                    <p className="text-xl font-semibold text-white group-hover:text-nyu-purple-light transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 p-4 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-nyu-purple/20 border-2 border-nyu-purple/50 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-nyu-purple-light text-xl" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                    <p className="text-xl font-semibold text-white">
                      {info.value}
                    </p>
                  </div>
                </div>
              )

              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {content}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
