import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

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
    { id: 'education', label: 'Education', emoji: '🎓' },
    { id: 'work', label: 'Work Experience', emoji: '💼' },
    { id: 'projects', label: 'Projects', emoji: '🚀' },
    { id: 'travel', label: 'Travel', emoji: '✈️' },
    { id: 'books', label: 'Books', emoji: '📚' },
    { id: 'running', label: 'Running', emoji: '🏃' },
    { id: 'contact', label: 'Contact Me', emoji: '✉️' },
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
        <div className="glass-strong rounded-full px-4 py-3 shadow-2xl border border-surface-light/30 flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full transition-all duration-300 focus-ring ${
                  isActive
                    ? 'bg-accent-gold text-charcoal shadow-lg shadow-accent-gold/30'
                    : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary'
                }`}
                aria-label={item.label}
              >
                <span className="text-xl leading-none">{item.emoji}</span>
                <span className="text-base font-medium hidden md:inline">{item.label}</span>
              </motion.button>
            )
          })}
        </div>
      </motion.nav>

      {/* Sticky Vertical Navigation on Left Side */}
      {showStickyNav && (
        <div
          className="fixed left-6 z-50 hidden lg:block"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <motion.nav
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-strong rounded-3xl px-4 py-5 shadow-2xl border border-surface-light/30 flex flex-col items-center gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex flex-col items-center gap-2 px-5 py-3 rounded-2xl transition-all duration-300 w-full min-w-[100px] focus-ring ${
                      isActive
                        ? 'bg-accent-gold text-charcoal shadow-lg shadow-accent-gold/30'
                        : 'text-text-muted hover:bg-surface-elevated hover:text-text-primary'
                    }`}
                    aria-label={item.label}
                    title={item.label}
                  >
                    <span className="text-2xl leading-none">{item.emoji}</span>
                    <span className="text-xs font-medium text-center leading-tight">{item.label}</span>
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
