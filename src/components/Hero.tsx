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
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <svg
              width="220"
              height="140"
              viewBox="0 0 220 140"
              className="text-gray-600"
              fill="currentColor"
            >
              {/* Burj Khalifa - Tallest building */}
              <rect x="95" y="10" width="22" height="130" rx="2" />
              <rect x="90" y="5" width="32" height="6" rx="1" />
              <rect x="98" y="0" width="16" height="5" rx="1" />
              {/* Burj Al Arab - Sail-shaped hotel */}
              <rect x="45" y="45" width="18" height="95" rx="1" />
              <polygon points="45,45 54,30 63,45" fill="currentColor" />
              {/* Other buildings */}
              <rect x="15" y="65" width="20" height="75" rx="1" />
              <rect x="125" y="55" width="18" height="85" rx="1" />
              <rect x="150" y="70" width="15" height="70" rx="1" />
              <rect x="170" y="75" width="12" height="65" rx="1" />
              <rect x="35" y="80" width="8" height="60" rx="1" />
              <rect x="185" y="85" width="10" height="55" rx="1" />
            </svg>
            <p className="text-sm text-gray-400 mt-2 font-semibold">Dubai</p>
          </motion.div>

          {/* NYC Skyline */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <svg
              width="220"
              height="140"
              viewBox="0 0 220 140"
              className="text-gray-700"
              fill="currentColor"
            >
              {/* Empire State Building */}
              <rect x="85" y="25" width="22" height="115" rx="1" />
              <rect x="80" y="20" width="32" height="6" rx="1" />
              <rect x="90" y="15" width="12" height="5" rx="1" />
              {/* Chrysler Building - Art Deco top */}
              <rect x="45" y="35" width="20" height="105" rx="1" />
              <polygon points="45,35 55,18 65,35" fill="currentColor" />
              {/* One World Trade Center - Freedom Tower */}
              <rect x="115" y="10" width="18" height="130" rx="1" />
              <polygon points="115,10 124,0 133,10" fill="currentColor" />
              {/* Statue of Liberty silhouette */}
              <circle cx="175" cy="95" r="10" />
              <rect x="173" y="95" width="4" height="25" />
              <polygon points="173,120 175,130 177,120" fill="currentColor" />
              {/* Other buildings */}
              <rect x="15" y="55" width="18" height="85" rx="1" />
              <rect x="140" y="65" width="15" height="75" rx="1" />
              <rect x="160" y="70" width="12" height="70" rx="1" />
              <rect x="33" y="75" width="10" height="65" rx="1" />
              <rect x="195" y="80" width="8" height="60" rx="1" />
            </svg>
            <p className="text-sm text-gray-400 mt-2 font-semibold">New York</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
