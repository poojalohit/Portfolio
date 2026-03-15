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
            Contact Me
          </h2>

          <div className="bg-surface/50 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-surface-light/10">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const content = info.link ? (
                  <a
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface/70 transition-colors group focus-ring"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent-gold/20 border-2 border-accent-gold/50 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-accent-gold text-xl" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-text-muted mb-1">{info.label}</p>
                      <p className="text-xl font-light text-text-primary group-hover:text-accent-gold transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-accent-blue/20 border-2 border-accent-blue/50 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-accent-blue text-xl" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-text-muted mb-1">{info.label}</p>
                      <p className="text-xl font-light text-text-primary">
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
