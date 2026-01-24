import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Travel = () => {
  const countries = [
    { name: 'Jordan', flag: '🇯🇴' },
    { name: 'Spain', flag: '🇪🇸' },
    { name: 'Morocco', flag: '🇲🇦' },
    { name: 'Georgia', flag: '🇬🇪' },
    { name: 'Azerbaijan', flag: '🇦🇿' },
    { name: 'Hungary', flag: '🇭🇺' },
    { name: 'Maldives', flag: '🇲🇻' },
    { name: 'Nepal', flag: '🇳🇵' },
    { name: 'Oman', flag: '🇴🇲' },
    { name: 'Ukraine', flag: '🇺🇦' },
    { name: 'Zanzibar', flag: '🇹🇿' },
    { name: 'Portugal', flag: '🇵🇹' },
    { name: 'Kenya', flag: '🇰🇪' },
    { name: 'Egypt', flag: '🇪🇬' },
    { name: 'Turkey', flag: '🇹🇷' },
    { name: 'Greece', flag: '🇬🇷' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Argentina', flag: '🇦🇷' },
    { name: 'Brazil', flag: '🇧🇷' },
    { name: 'Peru', flag: '🇵🇪' },
    { name: 'United Arab Emirates', flag: '🇦🇪' },
    { name: 'United States', flag: '🇺🇸' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'Cyprus', flag: '🇨🇾' },
    { name: 'Mexico', flag: '🇲🇽' },
  ]

  // Sample travel photos by city (placeholder structure)
  const travelPhotos = [
    { city: 'Dubai', url: '/travel/dubai-1.jpg', alt: 'Dubai' },
    { city: 'New York', url: '/travel/nyc-1.jpg', alt: 'New York City' },
    { city: 'Barcelona', url: '/travel/barcelona-1.jpg', alt: 'Barcelona' },
    { city: 'Istanbul', url: '/travel/istanbul-1.jpg', alt: 'Istanbul' },
    { city: 'Athens', url: '/travel/athens-1.jpg', alt: 'Athens' },
    { city: 'Lisbon', url: '/travel/lisbon-1.jpg', alt: 'Lisbon' },
    { city: 'Marrakech', url: '/travel/marrakech-1.jpg', alt: 'Marrakech' },
    { city: 'Cairo', url: '/travel/cairo-1.jpg', alt: 'Cairo' },
  ]

  return (
    <section
      id="travel"
      className="min-h-screen py-20 px-6 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Travel
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-400 mb-12 text-lg"
        >
          Currently been to: <span className="text-nyu-purple-light font-bold">25/195 countries</span>
        </motion.p>

        {/* Countries List */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-strong rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Countries Visited
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {countries.map((country) => (
              <motion.div
                key={country.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700/30 transition-colors cursor-pointer glass"
              >
                <span className="text-2xl">{country.flag}</span>
                <span className="text-gray-300">{country.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Travel Photos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-strong rounded-2xl p-6"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Travel Photos
          </h3>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="travel-carousel"
          >
            {travelPhotos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-64 rounded-xl overflow-hidden group">
                  <div className="w-full h-full bg-gradient-to-br from-nyu-purple/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-gray-400">
                      {photo.city} Photo {index + 1}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-semibold">{photo.city}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Travel
