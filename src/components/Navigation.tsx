import { motion } from 'framer-motion'
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaTools, 
  FaPlane, 
  FaBook 
} from 'react-icons/fa'

interface NavigationProps {
  activeSection: string
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const navItems = [
    { id: 'education', icon: FaGraduationCap, label: 'Education' },
    { id: 'work', icon: FaBriefcase, label: 'Work Experience' },
    { id: 'projects', icon: FaTools, label: 'Projects' },
    { id: 'travel', icon: FaPlane, label: 'Travel' },
    { id: 'books', icon: FaBook, label: 'Books' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 glass-strong rounded-full px-4 py-3 shadow-2xl"
    >
      <div className="flex items-center gap-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          
          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-3 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-nyu-purple text-white shadow-lg shadow-nyu-purple/50'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
              aria-label={item.label}
            >
              <Icon className="text-xl" />
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full bg-nyu-purple"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}

export default Navigation
