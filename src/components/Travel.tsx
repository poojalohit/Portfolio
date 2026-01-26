import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { FaInstagram, FaPlus, FaMinus } from 'react-icons/fa'
import { travelCountries, travelPhotos as travelPhotosData, travelStats, instagramLink, countryNameToISO } from '../data/portfolioData'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Travel = () => {
  // Initial zoom set to match the 2nd picture (more zoomed in view of Europe and surrounding areas)
  const INITIAL_ZOOM = 280
  const MIN_ZOOM = INITIAL_ZOOM // Users can't zoom out beyond this
  const MAX_ZOOM = 500
  
  const [position, setPosition] = useState<[number, number]>([0, 20])
  const [zoom, setZoom] = useState(INITIAL_ZOOM)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null)
  const [hasDragged, setHasDragged] = useState(false)
  const [clickedCountry, setClickedCountry] = useState<{ name: string; coordinates: [number, number] } | null>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setHasDragged(false)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && dragStart) {
      const deltaX = Math.abs(e.clientX - dragStart.x)
      const deltaY = Math.abs(e.clientY - dragStart.y)
      
      // If moved more than 5 pixels, consider it a drag
      if (deltaX > 5 || deltaY > 5) {
        setHasDragged(true)
        const moveDeltaX = (e.clientX - dragStart.x) / zoom * 100
        const moveDeltaY = (e.clientY - dragStart.y) / zoom * 100
        setPosition([position[0] - moveDeltaX, position[1] + moveDeltaY])
        setDragStart({ x: e.clientX, y: e.clientY })
      }
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setDragStart(null)
    // Reset hasDragged after a short delay to allow click handler to check it
    setTimeout(() => setHasDragged(false), 100)
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoom * delta))
    setZoom(newZoom)
  }

  const handleZoomIn = () => {
    setZoom(Math.min(MAX_ZOOM, zoom * 1.2))
  }

  const handleZoomOut = () => {
    setZoom(Math.max(MIN_ZOOM, zoom * 0.8))
  }

  const handleReset = () => {
    setPosition([0, 20])
    setZoom(INITIAL_ZOOM)
    setClickedCountry(null)
  }

  const handleCountryClick = (countryName: string, coordinates: [number, number]) => {
    // Don't trigger click if user was dragging
    if (hasDragged) {
      return
    }
    // Toggle: if clicking the same country, hide the label; otherwise show the clicked country
    if (clickedCountry?.name === countryName) {
      setClickedCountry(null)
    } else {
      setClickedCountry({ name: countryName, coordinates })
    }
  }

  const countries = travelCountries
  const travelPhotos = travelPhotosData

  // ISO codes for visited countries (for map highlighting)
  const visitedCountryCodes = new Set(countries.map(c => c.iso))

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
          className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center text-white"
        >
          Travel
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-white/60 mb-12 text-lg"
        >
          Currently been to: <span className="text-lime font-bold">{travelStats.visited}/{travelStats.total} countries</span>
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
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer glass"
              >
                <span className="text-lime text-lg">✓</span>
                <span className="text-white/80">{country.name}</span>
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
            ref={mapRef}
            className="w-full overflow-hidden rounded-lg relative" 
            style={{ height: '500px', backgroundColor: '#0a0a0a' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
          >
            <ComposableMap
              projectionConfig={{
                scale: zoom,
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
                    
                    // Get center coordinates for country name label (simplified approach)
                    let centerCoords: [number, number] | null = null
                    try {
                      const geometry = geo.geometry as { type: string; coordinates: unknown }
                      if (geometry.type === 'Polygon' && Array.isArray(geometry.coordinates)) {
                        const coords = (geometry.coordinates[0] as [number, number][]) || []
                        if (coords.length > 0) {
                          const sum = coords.reduce((acc, coord) => [acc[0] + coord[0], acc[1] + coord[1]], [0, 0])
                          centerCoords = [sum[0] / coords.length, sum[1] / coords.length] as [number, number]
                        }
                      } else if (geometry.type === 'MultiPolygon' && Array.isArray(geometry.coordinates)) {
                        const firstPolygon = (geometry.coordinates[0] as [number, number][][])?.[0] || []
                        if (firstPolygon.length > 0) {
                          const sum = firstPolygon.reduce((acc, coord) => [acc[0] + coord[0], acc[1] + coord[1]], [0, 0])
                          centerCoords = [sum[0] / firstPolygon.length, sum[1] / firstPolygon.length] as [number, number]
                        }
                      }
                    } catch (e) {
                      // If coordinate calculation fails, skip label
                      centerCoords = null
                    }
                    
                    return (
                      <g key={geo.rsmKey}>
                        <Geography
                          geography={geo}
                          fill={isVisited ? '#39ff14' : '#1a1a1a'}
                          stroke="#0a0a0a"
                          strokeWidth={0.5}
                          onClick={() => {
                            if (centerCoords && countryName) {
                              handleCountryClick(countryName, centerCoords)
                            }
                          }}
                          style={{
                            default: {
                              outline: 'none',
                            },
                            hover: {
                              fill: isVisited ? '#2ecc00' : '#2a2a2a',
                              outline: 'none',
                              cursor: 'pointer',
                            },
                            pressed: {
                              outline: 'none',
                            },
                          }}
                        />
                        {/* Show country name only when clicked */}
                        {clickedCountry?.name === countryName && centerCoords && (
                          <Marker coordinates={centerCoords}>
                            <g>
                              {/* Background for better readability */}
                              <rect
                                x={-40}
                                y={-12}
                                width={80}
                                height={24}
                                fill="#1F2937"
                                fillOpacity={0.9}
                                rx={4}
                              />
                              <text
                                textAnchor="middle"
                                fontSize={Math.max(12, Math.min(16, zoom / 20))}
                                fill="#E5E7EB"
                                fontWeight="600"
                                style={{
                                  pointerEvents: 'none',
                                  userSelect: 'none',
                                }}
                              >
                                {countryName}
                              </text>
                            </g>
                          </Marker>
                        )}
                      </g>
                    )
                  })
                }
              </Geographies>
            </ComposableMap>
            
            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button
                onClick={handleZoomIn}
                className="glass-strong w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-lime/30 transition-colors"
                aria-label="Zoom in"
              >
                <FaPlus />
              </button>
              <button
                onClick={handleZoomOut}
                className="glass-strong w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-lime/30 transition-colors"
                aria-label="Zoom out"
              >
                <FaMinus />
              </button>
              <button
                onClick={handleReset}
                className="glass-strong w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-nyu-purple/30 transition-colors text-xs"
                aria-label="Reset view"
                title="Reset"
              >
                ↺
              </button>
            </div>
            
            <div className="absolute bottom-4 left-4 text-xs text-white/60 bg-dark-surface/50 px-3 py-2 rounded-lg">
              Drag to pan • Scroll to zoom • Click a country to see its name
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-lime"></div>
              <span className="text-white/80">Visited</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-dark-surface"></div>
              <span className="text-white/80">Not Visited</span>
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
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group bg-dark-surface">
                  <img
                    src={`${import.meta.env.BASE_URL}travel/${photo.filename}`}
                    alt={photo.alt}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-lime/20 to-cyan/20 flex items-center justify-center">
                          <span class="text-white/60">${photo.city} Photo</span>
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
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-cyan hover:text-cyan-dark transition-colors text-lg font-semibold hover:underline group"
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
