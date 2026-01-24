import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
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
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-nyu-purple/20 opacity-50" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-nyu-purple-light bg-clip-text text-transparent"
            >
              Hi, I'm Pooja Lohit!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300"
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
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-strong border-4 border-nyu-purple/30 shadow-2xl"
              >
                <img
                  src="/headshot.jpg"
                  alt="Pooja Lohit"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-nyu-purple to-purple-600 flex items-center justify-center text-4xl">PL</div>'
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
                className="absolute inset-0 rounded-full border-2 border-nyu-purple/20"
              />
            </div>
          </motion.div>
        </div>

        {/* City Skylines */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 flex justify-center items-end gap-8 md:gap-16"
        >
          {/* Dubai Skyline */}
          <div className="flex flex-col items-center">
            <svg
              width="200"
              height="120"
              viewBox="0 0 200 120"
              className="text-gray-700"
              fill="currentColor"
            >
              {/* Burj Khalifa */}
              <rect x="90" y="20" width="20" height="100" />
              <rect x="85" y="15" width="30" height="5" />
              {/* Burj Al Arab */}
              <rect x="50" y="50" width="15" height="70" />
              <polygon points="50,50 57.5,40 65,50" />
              {/* Other buildings */}
              <rect x="20" y="70" width="18" height="50" />
              <rect x="120" y="60" width="15" height="60" />
              <rect x="145" y="75" width="12" height="45" />
              <rect x="165" y="80" width="10" height="40" />
            </svg>
            <p className="text-sm text-gray-400 mt-2">Dubai</p>
          </div>

          {/* NYC Skyline */}
          <div className="flex flex-col items-center">
            <svg
              width="200"
              height="120"
              viewBox="0 0 200 120"
              className="text-gray-700"
              fill="currentColor"
            >
              {/* Empire State Building */}
              <rect x="80" y="30" width="20" height="90" />
              <rect x="75" y="25" width="30" height="5" />
              <rect x="85" y="20" width="10" height="5" />
              {/* Chrysler Building */}
              <rect x="50" y="40" width="18" height="80" />
              <polygon points="50,40 59,25 68,40" />
              {/* One World Trade Center */}
              <rect x="110" y="15" width="15" height="105" />
              <polygon points="110,15 117.5,5 125,15" />
              {/* Statue of Liberty */}
              <circle cx="170" cy="100" r="8" />
              <rect x="168" y="100" width="4" height="20" />
              {/* Other buildings */}
              <rect x="20" y="60" width="15" height="60" />
              <rect x="135" y="70" width="12" height="50" />
              <rect x="155" y="75" width="10" height="45" />
            </svg>
            <p className="text-sm text-gray-400 mt-2">New York</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
