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
                  src="/headshot.png"
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
            <img
              src="/dubai-skyline.png"
              alt="Dubai Skyline"
              className="h-32 md:h-40 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
            <p className="text-sm text-gray-400 mt-2 font-semibold">Dubai</p>
          </motion.div>

          {/* NYC Skyline */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <img
              src="/nyc-skyline.png"
              alt="New York City Skyline"
              className="h-32 md:h-40 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
            <p className="text-sm text-gray-400 mt-2 font-semibold">New York</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
