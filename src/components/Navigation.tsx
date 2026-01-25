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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center gap-4 mt-12"
    >
      <div className="flex items-center gap-4 glass-strong rounded-full px-4 py-3 shadow-2xl">
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
                  ? 'bg-nyu-purple/20 border-2 border-nyu-purple text-nyu-purple-light shadow-lg shadow-nyu-purple/50'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50 border-2 border-transparent'
              }`}
              aria-label={item.label}
              title={item.label}
            >
              <Icon className="text-xl relative z-10" />
            </motion.button>
          )
        })}
      </div>
    </motion.nav>
  )
}

export default Navigation
