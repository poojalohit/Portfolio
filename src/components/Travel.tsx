import { motion } from 'framer-motion'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { FaInstagram } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Travel = () => {
  const [position, setPosition] = useState<[number, number]>([0, 20])
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && dragStart) {
      const deltaX = (e.clientX - dragStart.x) * 0.5
      const deltaY = (e.clientY - dragStart.y) * 0.5
      setPosition([position[0] - deltaX, position[1] + deltaY])
      setDragStart({ x: e.clientX, y: e.clientY })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setDragStart(null)
  }

  const countries = [
    { name: 'Jordan', flag: '🇯🇴', iso: 'JOR' },
    { name: 'Spain', flag: '🇪🇸', iso: 'ESP' },
    { name: 'Morocco', flag: '🇲🇦', iso: 'MAR' },
    { name: 'Georgia', flag: '🇬🇪', iso: 'GEO' },
    { name: 'Azerbaijan', flag: '🇦🇿', iso: 'AZE' },
    { name: 'Hungary', flag: '🇭🇺', iso: 'HUN' },
    { name: 'Maldives', flag: '🇲🇻', iso: 'MDV' },
    { name: 'Nepal', flag: '🇳🇵', iso: 'NPL' },
    { name: 'Oman', flag: '🇴🇲', iso: 'OMN' },
    { name: 'Ukraine', flag: '🇺🇦', iso: 'UKR' },
    { name: 'Zanzibar', flag: '🇹🇿', iso: 'TZA' },
    { name: 'Portugal', flag: '🇵🇹', iso: 'PRT' },
    { name: 'Kenya', flag: '🇰🇪', iso: 'KEN' },
    { name: 'Egypt', flag: '🇪🇬', iso: 'EGY' },
    { name: 'Turkey', flag: '🇹🇷', iso: 'TUR' },
    { name: 'Greece', flag: '🇬🇷', iso: 'GRC' },
    { name: 'United Kingdom', flag: '🇬🇧', iso: 'GBR' },
    { name: 'Argentina', flag: '🇦🇷', iso: 'ARG' },
    { name: 'Brazil', flag: '🇧🇷', iso: 'BRA' },
    { name: 'Peru', flag: '🇵🇪', iso: 'PER' },
    { name: 'United Arab Emirates', flag: '🇦🇪', iso: 'ARE' },
    { name: 'United States', flag: '🇺🇸', iso: 'USA' },
    { name: 'India', flag: '🇮🇳', iso: 'IND' },
    { name: 'Cyprus', flag: '🇨🇾', iso: 'CYP' },
    { name: 'Mexico', flag: '🇲🇽', iso: 'MEX' },
  ]

  // ISO codes for visited countries (for map highlighting)
  const visitedCountryCodes = new Set(countries.map(c => c.iso))
  
  // Comprehensive country name to ISO code mapping (for world atlas matching)
  const countryNameToISO: Record<string, string> = {
    'Jordan': 'JOR',
    'Hashemite Kingdom of Jordan': 'JOR',
    'Spain': 'ESP',
    'Kingdom of Spain': 'ESP',
    'Morocco': 'MAR',
    'Kingdom of Morocco': 'MAR',
    'Georgia': 'GEO',
    'Azerbaijan': 'AZE',
    'Republic of Azerbaijan': 'AZE',
    'Hungary': 'HUN',
    'Maldives': 'MDV',
    'Republic of Maldives': 'MDV',
    'Nepal': 'NPL',
    'Federal Democratic Republic of Nepal': 'NPL',
    'Oman': 'OMN',
    'Sultanate of Oman': 'OMN',
    'Ukraine': 'UKR',
    'Tanzania': 'TZA', // Zanzibar is part of Tanzania
    'United Republic of Tanzania': 'TZA',
    'Portugal': 'PRT',
    'Portuguese Republic': 'PRT',
    'Kenya': 'KEN',
    'Republic of Kenya': 'KEN',
    'Egypt': 'EGY',
    'Arab Republic of Egypt': 'EGY',
    'Turkey': 'TUR',
    'Republic of Turkey': 'TUR',
    'Greece': 'GRC',
    'Hellenic Republic': 'GRC',
    'United Kingdom': 'GBR',
    'United Kingdom of Great Britain and Northern Ireland': 'GBR',
    'Argentina': 'ARG',
    'Argentine Republic': 'ARG',
    'Brazil': 'BRA',
    'Federative Republic of Brazil': 'BRA',
    'Peru': 'PER',
    'Republic of Peru': 'PER',
    'United Arab Emirates': 'ARE',
    'U.A.E.': 'ARE',
    'United States of America': 'USA',
    'United States': 'USA',
    'U.S.A.': 'USA',
    'India': 'IND',
    'Republic of India': 'IND',
    'Cyprus': 'CYP',
    'Republic of Cyprus': 'CYP',
    'Mexico': 'MEX',
    'United Mexican States': 'MEX',
  }

  // Travel photos by city - all images from public/travel/ folder
  const travelPhotos = [
    // Greece
    { city: 'Athens, Greece', filename: 'Athens - 1.jpeg', alt: 'Athens, Greece' },
    { city: 'Mykonos, Greece', filename: 'Mykonos - 1.jpeg', alt: 'Mykonos, Greece' },
    { city: 'Santorini, Greece', filename: 'Santorini -1.jpeg', alt: 'Santorini, Greece' },
    
    // Brazil
    { city: 'Rio De Janeiro, Brazil', filename: 'Brazil -2.jpg', alt: 'Rio De Janeiro, Brazil' },
    { city: 'Rio De Janeiro, Brazil', filename: 'Rio De Janeiro - 1.JPG', alt: 'Rio De Janeiro, Brazil' },
    { city: 'Iguazu Falls, Brazil', filename: 'Iquazu Falls Brazil -1.JPG', alt: 'Iguazu Falls, Brazil' },
    
    // Argentina
    { city: 'Buenos Aires, Argentina', filename: 'Buenos Aires - 1.JPG', alt: 'Buenos Aires, Argentina' },
    
    // Cyprus
    { city: 'Cyprus', filename: 'Cyprus - 1.jpg', alt: 'Cyprus' },
    { city: 'Cyprus', filename: 'Cyprus - 2.JPG', alt: 'Cyprus' },
    
    // Egypt
    { city: 'Abu Simbel, Egypt', filename: 'Egypt - 1.jpeg', alt: 'Egypt' },
    { city: 'Abu Simbel, Egypt', filename: 'Egypt -2.jpeg', alt: 'Egypt' },
    
    // Kenya
    { city: 'Masai Mara, Kenya', filename: 'Kenya -1.jpg', alt: 'Kenya' },
    { city: 'Masai Mara, Kenya', filename: 'Kenya -2.jpg', alt: 'Kenya' },
    { city: 'Masai Mara, Kenya', filename: 'Kenya -3.jpg', alt: 'Kenya' },
    { city: 'Masai Mara, Kenya', filename: 'Kenya - 4.JPG', alt: 'Kenya' },
    
    // United Kingdom
    { city: 'London, United Kingdom', filename: 'London - 1.jpeg', alt: 'London, United Kingdom' },
    { city: 'Oxford, United Kingdom', filename: 'Oxford - 1.JPG', alt: 'Oxford, United Kingdom' },
    
    // Spain
    { city: 'Madrid, Spain', filename: 'Madrid - 1.jpeg', alt: 'Madrid, Spain' },
    
    // United States
    { city: 'San Francisco, United States', filename: 'San Francisco - 1.jpeg', alt: 'San Francisco, United States' },
    { city: 'Yosemite National Park, United States', filename: 'Yosemite National Park - 1.jpeg', alt: 'Yosemite National Park, United States' },
    
    // Peru
    { city: 'Nazca Lines, Peru', filename: 'Peru - 1.JPG', alt: 'Peru' },
    { city: 'The Quechua people of Peru', filename: 'Peru - 2.JPG', alt: 'Peru' },
    { city: 'Machu Picchu, Peru', filename: 'Peru - 3.jpg', alt: 'Peru' },
    { city: 'Rainbow Mountain, Peru', filename: 'Peru - 4.jpg', alt: 'Peru' },
    
    // India
    { city: 'Valley of Flowers, Uttarakhand', filename: 'Uttarakhand - 1.jpeg', alt: 'Uttarakhand, India' },
    { city: 'Valley of Flowers, Uttarakhand', filename: 'Uttarakhand - 2.jpeg', alt: 'Uttarakhand, India' },
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
                <span className="text-green-400 text-lg">✓</span>
                <span className="text-gray-300">{country.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* World Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-strong rounded-2xl p-6 mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            World Map
          </h3>
          <div 
            className="w-full overflow-hidden rounded-lg relative" 
            style={{ height: '500px', backgroundColor: '#1F2937' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <ComposableMap
              projectionConfig={{
                scale: 147,
                center: position,
              }}
              className="w-full h-full"
              style={{ 
                width: '100%', 
                height: '100%',
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
            >
              <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                {({ geographies }) =>
                  geographies.map((geo) => {
                    // Try multiple ISO code properties that might exist in the world atlas
                    const props = geo.properties as Record<string, unknown>
                    
                    // Get country name from various possible properties
                    const countryName = (props.NAME as string) || 
                                      (props.NAME_LONG as string) || 
                                      (props.NAME_EN as string) ||
                                      (props.name as string) ||
                                      (props.NAME_SORT as string) ||
                                      ''
                    
                    // Try ISO codes first - check all possible property names (lowercase and uppercase)
                    let isoCode = (props.ISO_A3 as string) || 
                                 (props.ISO_A2 as string) || 
                                 (props.ISO_A3_EH as string) ||
                                 (props.ISO_A2_EH as string) ||
                                 (props.ADM0_A3 as string) ||
                                 (props.iso_a3 as string) ||
                                 (props.iso_a2 as string) ||
                                 (props.ISO_A3_ as string) ||
                                 ''
                    
                    // Normalize ISO code to uppercase for comparison
                    isoCode = isoCode.toUpperCase()
                    
                    // If no ISO code found, try to match by country name (exact and partial)
                    if (!isoCode && countryName) {
                      // Try exact match first
                      isoCode = countryNameToISO[countryName] || ''
                      
                      // If still no match, try partial matching (e.g., "United States" in "United States of America")
                      if (!isoCode) {
                        for (const [name, code] of Object.entries(countryNameToISO)) {
                          if (countryName.toLowerCase().includes(name.toLowerCase()) || 
                              name.toLowerCase().includes(countryName.toLowerCase())) {
                            isoCode = code
                            break
                          }
                        }
                      }
                    }
                    
                    const isVisited = isoCode ? visitedCountryCodes.has(isoCode) : false
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isVisited ? '#8B5CF6' : '#374151'}
                        stroke="#1F2937"
                        strokeWidth={0.5}
                        style={{
                          default: {
                            outline: 'none',
                          },
                          hover: {
                            fill: isVisited ? '#A78BFA' : '#4B5563',
                            outline: 'none',
                            cursor: 'pointer',
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
            </ComposableMap>
            <div className="absolute bottom-4 left-4 text-xs text-gray-400 bg-gray-800/50 px-3 py-2 rounded-lg">
              Click and drag to explore the globe
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-nyu-purple"></div>
              <span className="text-gray-300">Visited</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gray-600"></div>
              <span className="text-gray-300">Not Visited</span>
            </div>
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
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group bg-gray-800">
                  <img
                    src={`${import.meta.env.BASE_URL}travel/${photo.filename}`}
                    alt={photo.alt}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-nyu-purple/20 to-purple-600/20 flex items-center justify-center">
                          <span class="text-gray-400">${photo.city} Photo</span>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <p class="text-white font-semibold">${photo.city}</p>
                        </div>`
                      }
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-semibold">{photo.city}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Instagram Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <a
              href="https://www.instagram.com/poojalohit/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-nyu-purple-light hover:text-nyu-purple transition-colors text-lg font-semibold hover:underline group"
            >
              <FaInstagram className="text-2xl group-hover:scale-110 transition-transform" />
              <span>Follow my travels on Instagram</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Travel
