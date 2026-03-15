import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { FaInstagram, FaPlus, FaMinus, FaArrowLeft } from 'react-icons/fa'
import { travelCountries, travelPhotos as travelPhotosData, travelStats, instagramLink, countryNameToISO } from '../data/portfolioData'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Travel = () => {
  const INITIAL_ZOOM = 280
  const MIN_ZOOM = INITIAL_ZOOM
  const MAX_ZOOM = 500
  
  const [position, setPosition] = useState<[number, number]>([0, 20])
  const [zoom, setZoom] = useState(INITIAL_ZOOM)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null)
  const [hasDragged, setHasDragged] = useState(false)
  const [clickedCountry, setClickedCountry] = useState<{ name: string; coordinates: [number, number] } | null>(null)
  const [highlightedCountryISO, setHighlightedCountryISO] = useState<string | null>(null)
  const [isFlipped, setIsFlipped] = useState(false)
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

  const handleCountryClick = (countryName: string, coordinates: [number, number], isoCode?: string) => {
    if (hasDragged) return
    
    if (clickedCountry?.name === countryName) {
      setClickedCountry(null)
      setHighlightedCountryISO(null)
    } else {
      setClickedCountry({ name: countryName, coordinates })
      if (isoCode) setHighlightedCountryISO(isoCode)
    }
  }

  const handleCountryListClick = (countryName: string, isoCode: string) => {
    setHighlightedCountryISO(isoCode)
    setClickedCountry({ name: countryName, coordinates: [0, 0] })
    setIsFlipped(true)
  }

  const handleBackToList = () => {
    setIsFlipped(false)
    setHighlightedCountryISO(null)
    setClickedCountry(null)
  }

  const countries = travelCountries
  const travelPhotos = travelPhotosData
  const visitedCountryCodes = new Set(countries.map(c => c.iso))

  return (
    <section id="travel" className="py-20 px-6 relative bg-charcoal">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 md:p-12 border border-surface-light/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-center text-text-primary">
            Travel
          </h2>

          <p className="text-center text-text-muted mb-12 text-lg">
            Currently been to: <span className="text-accent-gold font-medium">{travelStats.visited}/{travelStats.total} countries</span>
          </p>

          {/* Flip Card Container */}
          <div 
            className={`flip-card mb-12 ${isFlipped ? 'flipped' : ''}`}
            style={{ minHeight: '600px' }}
          >
            <div className="flip-card-inner">
              {/* Front: Countries List */}
              <div className="flip-card-front bg-surface rounded-2xl p-8 border border-accent-blue/20 shadow-lg shadow-accent-blue/5">
              <h3 className="text-2xl font-serif mb-6 text-center text-text-primary">
                Countries Visited
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {countries.map((country) => (
                  <motion.div
                    key={country.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCountryListClick(country.name, country.iso)}
                    className="flex items-center gap-2 p-3 rounded-lg transition-all duration-300 cursor-pointer glass hover:bg-surface-elevated border-2 border-transparent hover:border-accent-gold/30"
                  >
                    <span className="text-lg text-accent-gold">✓</span>
                    <span className="text-text-secondary hover:text-text-primary transition-colors">{country.name}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-text-muted text-sm mt-6">
                Click a country to see it on the map →
              </p>
            </div>

            {/* Back: Map */}
            <div className="flip-card-back bg-surface rounded-2xl p-6 flex flex-col border border-accent-blue/20 shadow-lg shadow-accent-blue/5">
              <div className="relative flex items-center justify-center mb-4 h-12">
                <button
                  onClick={handleBackToList}
                  className="absolute left-0 flex items-center gap-2 px-5 py-2.5 rounded-full glass text-accent-blue hover:bg-surface-elevated transition-all text-sm font-medium"
                >
                  <FaArrowLeft className="text-xs" /> 
                  Back to list
                </button>
                <h3 className="text-2xl font-serif text-accent-gold">
                  {highlightedCountryISO ? countries.find(c => c.iso === highlightedCountryISO)?.name : 'World Map'}
                </h3>
              </div>
              
              <div 
                ref={mapRef}
                className="flex-1 overflow-hidden rounded-lg relative" 
                style={{ minHeight: '450px', backgroundColor: '#1E1E1E' }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onWheel={handleWheel}
              >
                <ComposableMap
                  projectionConfig={{ scale: zoom, center: position }}
                  className="w-full h-full"
                  style={{ width: '100%', height: '100%', cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                  <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const props = geo.properties as Record<string, unknown>
                        const countryName = (props.NAME as string) || (props.NAME_LONG as string) || (props.name as string) || ''
                        
                        let isoCode = (props.ISO_A3 as string) || (props.ISO_A2 as string) || (props.ADM0_A3 as string) || ''
                        isoCode = isoCode.toUpperCase()
                        
                        if (!isoCode && countryName) {
                          isoCode = countryNameToISO[countryName] || ''
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
                        const isHighlighted = isoCode === highlightedCountryISO
                        
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
                        } catch {
                          centerCoords = null
                        }
                        
                        let fillColor = '#3A3A3A'
                        if (isHighlighted) fillColor = '#D4AF37'
                        else if (isVisited) fillColor = '#5B8DB8'
                        
                        let hoverColor = '#4A4A4A'
                        if (isHighlighted) hoverColor = '#E5C04A'
                        else if (isVisited) hoverColor = '#6B9BD1'
                        
                        return (
                          <g key={geo.rsmKey}>
                            <Geography
                              geography={geo}
                              fill={fillColor}
                              stroke="#1E1E1E"
                              strokeWidth={0.5}
                              onClick={() => {
                                if (centerCoords && countryName) {
                                  handleCountryClick(countryName, centerCoords, isoCode)
                                }
                              }}
                              style={{
                                default: { outline: 'none' },
                                hover: { fill: hoverColor, outline: 'none', cursor: 'pointer' },
                                pressed: { fill: isHighlighted ? '#D4AF37' : (isVisited ? '#7BAED9' : '#5A5A5A'), outline: 'none' },
                              }}
                            />
                          </g>
                        )
                      })
                    }
                  </Geographies>
                </ComposableMap>
                
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button onClick={handleZoomIn} className="glass-strong w-10 h-10 rounded-lg flex items-center justify-center text-text-primary hover:bg-surface-elevated transition-colors" aria-label="Zoom in">
                    <FaPlus />
                  </button>
                  <button onClick={handleZoomOut} className="glass-strong w-10 h-10 rounded-lg flex items-center justify-center text-text-primary hover:bg-surface-elevated transition-colors" aria-label="Zoom out">
                    <FaMinus />
                  </button>
                  <button onClick={handleReset} className="glass-strong w-10 h-10 rounded-lg flex items-center justify-center text-text-primary hover:bg-surface-elevated transition-colors text-xs" aria-label="Reset view">
                    ↺
                  </button>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-center gap-6 text-sm flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: '#5B8DB8' }}></div>
                  <span className="text-text-secondary">Visited</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: '#D4AF37' }}></div>
                  <span className="text-text-secondary">Selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: '#3A3A3A' }}></div>
                  <span className="text-text-secondary">Not Visited</span>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Travel Photos Carousel */}
          <div className="bg-surface rounded-2xl p-6 border border-accent-blue/20 shadow-lg shadow-accent-blue/5">
          <h3 className="text-2xl font-serif mb-6 text-center text-text-primary">
            Travel Photos
          </h3>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="travel-carousel"
          >
            {travelPhotos.map((photo, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group bg-surface">
                  <img
                    src={`${import.meta.env.BASE_URL}travel/${photo.filename}`}
                    alt={photo.alt}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal-dark/80 to-transparent p-4">
                    <p className="text-text-primary font-semibold">{photo.city}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="mt-8 text-center">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-accent-blue hover:text-accent-blue-hover transition-colors text-lg font-medium hover:underline group"
            >
              <FaInstagram className="text-2xl group-hover:scale-110 transition-transform" />
              <span>Follow my travels on Instagram</span>
            </a>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Travel
