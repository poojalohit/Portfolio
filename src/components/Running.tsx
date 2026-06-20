import type { SyntheticEvent } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaStrava } from 'react-icons/fa'
import { recentRuns, stravaLink, type RecentRun } from '../data/portfolioData'

// Decode a Google-encoded polyline into [lat, lng] pairs (keyless, no map provider needed).
function decodePolyline(str: string, precision = 5): [number, number][] {
  let index = 0
  let lat = 0
  let lng = 0
  const coordinates: [number, number][] = []
  const factor = Math.pow(10, precision)

  while (index < str.length) {
    let result = 1
    let shift = 0
    let b: number
    do {
      b = str.charCodeAt(index++) - 63 - 1
      result += b << shift
      shift += 5
    } while (b >= 0x1f)
    lat += result & 1 ? ~(result >> 1) : result >> 1

    result = 1
    shift = 0
    do {
      b = str.charCodeAt(index++) - 63 - 1
      result += b << shift
      shift += 5
    } while (b >= 0x1f)
    lng += result & 1 ? ~(result >> 1) : result >> 1

    coordinates.push([lat / factor, lng / factor])
  }
  return coordinates
}

// Build an SVG path string that fits the route inside the viewBox.
function buildRoutePath(
  polyline: string,
  width = 300,
  height = 170,
  pad = 14
): string | null {
  let points: [number, number][] = []
  try {
    points = decodePolyline(polyline)
  } catch {
    return null
  }
  if (points.length < 2) return null

  const lats = points.map((p) => p[0])
  const lngs = points.map((p) => p[1])
  const minLat = Math.min(...lats)
  const maxLat = Math.max(...lats)
  const minLng = Math.min(...lngs)
  const maxLng = Math.max(...lngs)
  const spanLat = maxLat - minLat || 1e-6
  const spanLng = maxLng - minLng || 1e-6

  const w = width - pad * 2
  const h = height - pad * 2
  const scale = Math.min(w / spanLng, h / spanLat)
  const offsetX = pad + (w - spanLng * scale) / 2
  const offsetY = pad + (h - spanLat * scale) / 2

  return points
    .map(([lat, lng], i) => {
      const x = offsetX + (lng - minLng) * scale
      const y = offsetY + (maxLat - lat) * scale // flip Y so north is up
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')
}

// Decorative fallback squiggle for runs that don't have a route polyline yet.
const FALLBACK_PATH =
  'M40 140 C70 110, 60 80, 95 70 S150 60, 150 35 S120 15, 160 18 S240 40, 260 25'

const hideOnError = (e: SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.display = 'none'
}

// Geoapify key is injected at build time (VITE_GEOAPIFY_API_KEY). When present we
// render a real street map with the route drawn on it, built straight from the
// Strava polyline. The key is restricted to the site's domain in Geoapify.
const GEOAPIFY_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY as string | undefined

function buildGeoapifyMapUrl(polyline?: string): string | null {
  if (!polyline || !GEOAPIFY_KEY) return null
  const geometry = `polyline:${encodeURIComponent(
    polyline
  )};linecolor:%23fc4c02;linewidth:5;linestyle:solid`
  return (
    'https://maps.geoapify.com/v1/staticmap' +
    '?style=osm-bright&width=600&height=400&scaleFactor=2' +
    `&geometry=${geometry}` +
    `&apiKey=${GEOAPIFY_KEY}`
  )
}

const RouteThumbnail = ({ run }: { run: RecentRun }) => {
  // Prefer a prebuilt map URL (data), else build a street map from the polyline.
  const mapSrc = run.mapUrl || buildGeoapifyMapUrl(run.polyline)
  // Always have the drawn route ready as a resilient fallback layer.
  const routePath = run.polyline ? buildRoutePath(run.polyline) : null

  return (
    <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br from-surface-elevated to-surface border border-surface-light/20">
      {/* Route outline — also shows through if the map image fails to load */}
      <svg
        viewBox="0 0 300 170"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d={routePath || FALLBACK_PATH}
          fill="none"
          stroke="#FC4C02"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={routePath ? 1 : 0.55}
        />
      </svg>
      {mapSrc && (
        <img
          src={mapSrc}
          alt={`${run.title} route map`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={hideOnError}
        />
      )}
    </div>
  )
}

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-text-muted text-[11px] sm:text-xs mb-1">{label}</p>
    <p className="text-text-primary text-base sm:text-lg font-light whitespace-nowrap">{value}</p>
  </div>
)

const Running = () => {
  return (
    <section id="running" className="py-16 sm:py-20 px-4 sm:px-6 relative bg-charcoal">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-6 sm:p-8 md:p-12 border border-surface-light/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-center text-text-primary">
            Running
          </h2>
          <p className="text-center text-text-muted mb-8 sm:mb-12 text-base sm:text-lg">
            My most recent runs, straight from Strava.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recentRuns.map((run, index) => (
              <motion.a
                key={`${run.title}-${run.date}`}
                href={run.activityUrl || stravaLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="block bg-surface rounded-2xl p-5 sm:p-6 hover:bg-surface-elevated transition-all duration-300 focus-ring border border-accent-gold/20 shadow-lg shadow-accent-gold/5"
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-accent-gold/15 flex items-center justify-center flex-shrink-0">
                    <FaStrava className="text-[#FC4C02] text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-light text-text-primary truncate">
                      {run.title}
                    </h3>
                    <p className="text-text-muted text-xs sm:text-sm truncate">
                      {run.date}
                      {run.location ? ` · ${run.location}` : ''}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap items-start justify-between gap-x-2 gap-y-3 mb-5">
                  <Stat label="Distance" value={run.distance} />
                  <Stat label="Pace" value={run.pace} />
                  <Stat label="Time" value={run.time} />
                  {typeof run.achievements === 'number' && (
                    <div className="text-right">
                      <p className="text-text-muted text-[11px] sm:text-xs mb-1">Achievements</p>
                      <p className="text-text-primary text-base sm:text-lg font-light whitespace-nowrap">
                        🏆 {run.achievements}
                      </p>
                    </div>
                  )}
                </div>

                {/* Route / photo */}
                <RouteThumbnail run={run} />
              </motion.a>
            ))}
          </div>

          {/* Strava link */}
          <div className="text-center mt-12">
            <a
              href={stravaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue-hover transition-colors text-lg font-light hover:underline focus-ring"
            >
              <FaStrava className="text-[#FC4C02]" />
              <span>Follow me on Strava for more</span>
              <FaExternalLinkAlt />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Running
