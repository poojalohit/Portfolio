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
      {/* Navigation in Hero - Editorial Style */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-4 mt-12"
      >
        <div className="flex items-center gap-1 md:gap-6 px-6 py-4">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id
            
            return (
              <div key={item.id} className="flex items-center">
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-2 md:px-4 py-2 transition-all duration-300 focus-ring ${
                    isActive
                      ? 'text-accent-gold'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  aria-label={item.label}
                >
                  <span className="font-serif text-xs md:text-sm tracking-widest uppercase">{item.label}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-px bg-accent-gold"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
                {index < navItems.length - 1 && (
                  <span className="text-text-muted/30 mx-1 md:mx-2 hidden md:inline">|</span>
                )}
              </div>
            )
          })}
        </div>
      </motion.nav>

      {/* Sticky Navigation on Left Side (appears on scroll) */}
      {showStickyNav && (
        <div
          className="fixed left-6 z-50 hidden lg:block"
          style={{ 
            top: '50%', 
            transform: 'translateY(-50%)',
          }}
        >
        <motion.nav
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
        <div className="flex flex-col items-start gap-1 glass-strong rounded-xl px-4 py-5 shadow-2xl border border-surface-light/20">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 w-full focus-ring ${
                  isActive
                    ? 'text-accent-gold'
                    : 'text-text-muted hover:text-text-primary'
                }`}
                aria-label={item.label}
                title={item.label}
              >
                {isActive && (
                  <motion.div 
                    layoutId="stickyActiveIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-accent-gold rounded-full"
                    transition={{ duration: 0.2 }}
                  />
                )}
                <Icon className="text-sm" />
                <span className="font-serif text-xs tracking-wider uppercase">{item.label}</span>
              </motion.button>
            )
          })}
        </div>
      </motion.nav>
      </div>
      )}
    </>
  )
}

export default Navigation
