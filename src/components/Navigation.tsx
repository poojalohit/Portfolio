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
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'education', icon: FaGraduationCap, label: 'Education', emoji: '🎓' },
    { id: 'work', icon: FaBriefcase, label: 'Work Experience', emoji: '💼' },
    { id: 'projects', icon: FaTools, label: 'Projects', emoji: '🚀' },
    { id: 'travel', icon: FaPlane, label: 'Travel', emoji: '✈️' },
    { id: 'books', icon: FaBook, label: 'Books', emoji: '📚' },
    { id: 'contact', icon: FaEnvelope, label: 'Contact Me', emoji: '✉️' },
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
      {/* Navigation in Hero - Connected Bubble */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center mt-12"
      >
        <div className="glass-strong rounded-full px-3 py-2 shadow-2xl border border-surface-light/30 flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 focus-ring ${
                  isActive
                    ? 'bg-accent-gold text-charcoal shadow-lg shadow-accent-gold/30'
                    : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary'
                }`}
                aria-label={item.label}
              >
                <span className="text-lg">{item.emoji}</span>
                <span className="text-sm font-medium hidden md:inline">{item.label}</span>
              </motion.button>
            )
          })}
        </div>
      </motion.nav>

      {/* Sticky Vertical Navigation on Left Side */}
      {showStickyNav && (
        <div
          className="fixed left-4 z-50 hidden lg:block"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <motion.nav
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-strong rounded-2xl px-3 py-4 shadow-2xl border border-surface-light/30 flex flex-col items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl transition-all duration-300 w-full focus-ring ${
                      isActive
                        ? 'bg-accent-gold/20 text-accent-gold'
                        : 'text-text-muted hover:bg-surface-elevated hover:text-text-primary'
                    }`}
                    aria-label={item.label}
                    title={item.label}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="stickyActiveIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent-gold rounded-full"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    <Icon className="text-lg" />
                    <span className="text-[10px] font-medium tracking-wide text-center leading-tight max-w-[70px]">{item.label}</span>
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
