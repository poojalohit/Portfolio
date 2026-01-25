import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaTools, 
  FaPlane, 
  FaBook,
  FaEnvelope
} from 'react-icons/fa'

interface NavigationProps {
  activeSection: string
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [showStickyNav, setShowStickyNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setShowStickyNav(heroBottom < 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navItems = [
    { id: 'education', icon: FaGraduationCap, label: 'Education' },
    { id: 'work', icon: FaBriefcase, label: 'Work Experience' },
    { id: 'projects', icon: FaTools, label: 'Projects' },
    { id: 'travel', icon: FaPlane, label: 'Travel' },
    { id: 'books', icon: FaBook, label: 'Books' },
    { id: 'contact', icon: FaEnvelope, label: 'Contact Me' },
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
    <>
      {/* Navigation in Hero (initial display) */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-4 mt-12"
      >
        <div className="flex items-center gap-2 glass-strong rounded-full px-4 py-3 shadow-2xl">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-nyu-purple/20 border-2 border-nyu-purple text-nyu-purple-light shadow-lg shadow-nyu-purple/50'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50 border-2 border-transparent'
                }`}
                aria-label={item.label}
              >
                <Icon className="text-lg relative z-10" />
                <span className="text-sm font-medium hidden sm:inline">{item.label}</span>
              </motion.button>
            )
          })}
        </div>
      </motion.nav>

      {/* Sticky Navigation on Left Side (appears on scroll) */}
      {showStickyNav && (
        <motion.nav
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
        <div className="flex flex-col items-center gap-3 glass-strong rounded-2xl px-3 py-4 shadow-2xl">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex flex-col items-center gap-1 p-3 rounded-lg transition-all duration-300 w-full min-w-[80px] ${
                  isActive
                    ? 'bg-nyu-purple/20 border-2 border-nyu-purple text-nyu-purple-light shadow-lg shadow-nyu-purple/50'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50 border-2 border-transparent'
                }`}
                aria-label={item.label}
                title={item.label}
              >
                <Icon className="text-xl relative z-10" />
                <span className="text-xs font-medium text-center leading-tight">{item.label}</span>
              </motion.button>
            )
          })}
        </div>
      </motion.nav>
      )}
    </>
  )
}

export default Navigation
