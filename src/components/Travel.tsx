import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Travel = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  // Map of our country names to world atlas country names
  const countryNameMap: Record<string, string[]> = {
    'Jordan': ['Jordan'],
    'Spain': ['Spain'],
    'Morocco': ['Morocco'],
    'Georgia': ['Georgia'],
    'Azerbaijan': ['Azerbaijan'],
    'Hungary': ['Hungary'],
    'Maldives': ['Maldives'],
    'Nepal': ['Nepal'],
    'Oman': ['Oman'],
    'Ukraine': ['Ukraine'],
    'Zanzibar': ['Tanzania'], // Zanzibar is part of Tanzania
    'Portugal': ['Portugal'],
    'Kenya': ['Kenya'],
    'Egypt': ['Egypt'],
    'Turkey': ['Turkey'],
    'Greece': ['Greece'],
    'United Kingdom': ['United Kingdom', 'United Kingdom of Great Britain and Northern Ireland'],
    'Argentina': ['Argentina'],
    'Brazil': ['Brazil'],
    'Peru': ['Peru'],
    'United Arab Emirates': ['United Arab Emirates'],
    'United States': ['United States of America', 'United States'],
    'India': ['India'],
    'Cyprus': ['Cyprus'],
    'Mexico': ['Mexico'],
  }

  const countries = [
    { name: 'Jordan', flag: '🇯🇴', coordinates: [36.2384, 30.5852] },
    { name: 'Spain', flag: '🇪🇸', coordinates: [-3.7492, 40.4637] },
    { name: 'Morocco', flag: '🇲🇦', coordinates: [-7.0926, 31.7917] },
    { name: 'Georgia', flag: '🇬🇪', coordinates: [43.3569, 42.3154] },
    { name: 'Azerbaijan', flag: '🇦🇿', coordinates: [47.5769, 40.1431] },
    { name: 'Hungary', flag: '🇭🇺', coordinates: [19.5033, 47.1625] },
    { name: 'Maldives', flag: '🇲🇻', coordinates: [73.2207, 3.2028] },
    { name: 'Nepal', flag: '🇳🇵', coordinates: [84.1240, 28.3949] },
    { name: 'Oman', flag: '🇴🇲', coordinates: [55.9233, 21.4733] },
    { name: 'Ukraine', flag: '🇺🇦', coordinates: [31.1656, 48.3794] },
    { name: 'Zanzibar', flag: '🇹🇿', coordinates: [39.2083, -6.1659] },
    { name: 'Portugal', flag: '🇵🇹', coordinates: [-9.1393, 38.7223] },
    { name: 'Kenya', flag: '🇰🇪', coordinates: [36.8219, -1.2921] },
    { name: 'Egypt', flag: '🇪🇬', coordinates: [31.2357, 30.0444] },
    { name: 'Turkey', flag: '🇹🇷', coordinates: [35.2433, 38.9637] },
    { name: 'Greece', flag: '🇬🇷', coordinates: [23.7275, 37.9838] },
    { name: 'United Kingdom', flag: '🇬🇧', coordinates: [-3.4360, 55.3781] },
    { name: 'Argentina', flag: '🇦🇷', coordinates: [-63.6167, -38.4161] },
    { name: 'Brazil', flag: '🇧🇷', coordinates: [-51.9253, -14.2350] },
    { name: 'Peru', flag: '🇵🇪', coordinates: [-75.0152, -9.1900] },
    { name: 'United Arab Emirates', flag: '🇦🇪', coordinates: [53.8478, 23.4241] },
    { name: 'United States', flag: '🇺🇸', coordinates: [-95.7129, 37.0902] },
    { name: 'India', flag: '🇮🇳', coordinates: [78.9629, 20.5937] },
    { name: 'Cyprus', flag: '🇨🇾', coordinates: [33.4299, 35.1264] },
    { name: 'Mexico', flag: '🇲🇽', coordinates: [-102.5528, 23.6345] },
  ]

  const isCountryVisited = (atlasCountryName: string): boolean => {
    return Object.entries(countryNameMap).some(([_, atlasNames]) =>
      atlasNames.some(name => 
        atlasCountryName.toLowerCase().includes(name.toLowerCase()) ||
        name.toLowerCase().includes(atlasCountryName.toLowerCase())
      )
    )
  }

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

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-2xl p-6 mb-12"
        >
          <div className="h-[500px] w-full relative rounded-lg overflow-hidden bg-gray-800">
            <ComposableMap
              projectionConfig={{
                scale: 150,
                center: [0, 20],
              }}
              className="w-full h-full"
            >
              <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const countryName = geo.properties.NAME
                    const isVisited = isCountryVisited(countryName)

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isVisited ? '#7a1ba8' : '#374151'}
                        stroke="#1f2937"
                        strokeWidth={0.5}
                        style={{
                          default: {
                            outline: 'none',
                            cursor: isVisited ? 'pointer' : 'default',
                          },
                          hover: {
                            fill: isVisited ? '#57068c' : '#4b5563',
                            outline: 'none',
                          },
                          pressed: {
                            outline: 'none',
                          },
                        }}
                      />
                    )
                  })
                }
              </Geographies>
              {countries.map((country) => (
                <Marker
                  key={country.name}
                  coordinates={country.coordinates as [number, number]}
                >
                  <g
                    onMouseEnter={() => setSelectedCountry(country.name)}
                    onMouseLeave={() => setSelectedCountry(null)}
                  >
                    <circle
                      r={6}
                      fill="#57068c"
                      stroke="#fff"
                      strokeWidth={2}
                      className="cursor-pointer"
                    />
                    {selectedCountry === country.name && (
                      <text
                        textAnchor="middle"
                        y={-15}
                        fill="white"
                        fontSize={12}
                        fontWeight="bold"
                      >
                        {country.name}
                      </text>
                    )}
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </motion.div>

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
              <div
                key={country.name}
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-700/30 transition-colors cursor-pointer"
                onMouseEnter={() => setSelectedCountry(country.name)}
                onMouseLeave={() => setSelectedCountry(null)}
              >
                <span className="text-2xl">{country.flag}</span>
                <span className="text-gray-300">{country.name}</span>
              </div>
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
