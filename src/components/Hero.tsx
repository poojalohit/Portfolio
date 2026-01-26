import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navigation from './Navigation'

interface HeroProps {
  activeSection: string
}

const Hero = ({ activeSection }: HeroProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-slate-blue/5 opacity-50" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-light text-white"
            >
              Hi, I'm Pooja Lohit!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-light-blue-grey font-light"
            >
              Building at the intersection of technology, business, and innovation.
            </motion.p>
          </motion.div>

          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  x: mousePosition.x,
                  y: mousePosition.y,
                }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-strong border-4 border-lime/30 shadow-2xl"
              >
                <img
                  src={`${import.meta.env.BASE_URL}headshot.png`}
                  alt="Pooja Lohit"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-dusty-rose/30 to-slate-blue/30 flex items-center justify-center text-4xl text-white font-light">PL</div>'
                  }}
                />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full border-2 border-dusty-rose/20"
              />
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <Navigation activeSection={activeSection} />
      </div>
    </section>
  )
}

export default Hero
