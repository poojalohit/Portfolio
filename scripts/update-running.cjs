/**
 * Fetch the 3 most recent runs from Strava and update `recentRuns`
 * in src/data/portfolioData.tsx.
 *
 * Requires these repository secrets (set in GitHub > Settings > Secrets > Actions):
 *   STRAVA_CLIENT_ID
 *   STRAVA_CLIENT_SECRET
 *   STRAVA_REFRESH_TOKEN
 *
 * The route map is rendered by the site at build time from the polyline this
 * script stores (using the GEOAPIFY_API_KEY secret in the deploy workflow), so
 * this script does not need a map key and never embeds one in the data file.
 *
 * If the Strava secrets are not present the script exits cleanly without changes,
 * so the build/deploy never breaks while Strava access is being set up.
 *
 * How to get a refresh token (one-time):
 *   1. Create an API app at https://www.strava.com/settings/api
 *   2. Authorize with scope `activity:read_all` and exchange the code for tokens.
 *      See https://developers.strava.com/docs/getting-started/
 */

const https = require('https')
const fs = require('fs')
const path = require('path')

const CLIENT_ID = process.env.STRAVA_CLIENT_ID
const CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET
const REFRESH_TOKEN = process.env.STRAVA_REFRESH_TOKEN
const MAX_RUNS = 3

function request(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = ''
      res.on('data', (chunk) => (data += chunk))
      res.on('end', () => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`))
          return
        }
        try {
          resolve(JSON.parse(data))
        } catch (e) {
          reject(e)
        }
      })
    })
    req.on('error', reject)
    if (body) req.write(body)
    req.end()
  })
}

async function getAccessToken() {
  const body = new URLSearchParams({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: 'refresh_token',
    refresh_token: REFRESH_TOKEN,
  }).toString()

  const json = await request(
    {
      method: 'POST',
      hostname: 'www.strava.com',
      path: '/oauth/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(body),
      },
    },
    body
  )
  return json.access_token
}

function getActivities(accessToken) {
  return request({
    method: 'GET',
    hostname: 'www.strava.com',
    path: '/api/v3/athlete/activities?per_page=30',
    headers: { Authorization: `Bearer ${accessToken}` },
  })
}

function formatPace(distanceMeters, movingSeconds) {
  if (!distanceMeters || !movingSeconds) return '—'
  const secPerKm = movingSeconds / (distanceMeters / 1000)
  const m = Math.floor(secPerKm / 60)
  const s = Math.round(secPerKm % 60)
  return `${m}:${String(s).padStart(2, '0')} /km`
}

function formatTime(seconds) {
  if (!seconds) return '—'
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.round(seconds % 60)
  if (h > 0) return `${h}h ${String(m).padStart(2, '0')}m`
  return `${m}m ${String(s).padStart(2, '0')}s`
}

function formatDate(iso) {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

function formatLocation(act) {
  const parts = [act.location_city, act.location_state].filter(Boolean)
  if (parts.length) return parts.join(', ')
  return act.location_country || ''
}

function esc(value) {
  if (value === undefined || value === null) return ''
  // Single-quoted JS string: escape backslashes first, then single quotes.
  return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function toRunObject(act) {
  const fields = [
    `    title: '${esc(act.name || 'Run')}',`,
    `    date: '${esc(formatDate(act.start_date_local || act.start_date))}',`,
  ]
  const location = formatLocation(act)
  if (location) fields.push(`    location: '${esc(location)}',`)
  fields.push(`    distance: '${((act.distance || 0) / 1000).toFixed(2)} km',`)
  fields.push(`    pace: '${esc(formatPace(act.distance, act.moving_time))}',`)
  fields.push(`    time: '${esc(formatTime(act.moving_time))}',`)
  if (typeof act.achievement_count === 'number') {
    fields.push(`    achievements: ${act.achievement_count},`)
  }
  const polyline = act.map && (act.map.summary_polyline || act.map.polyline)
  if (polyline) fields.push(`    polyline: '${esc(polyline)}',`)
  fields.push(`    activityUrl: 'https://www.strava.com/activities/${act.id}',`)
  return `  {\n${fields.join('\n')}\n  }`
}

function updatePortfolioData(runs) {
  const dataFilePath = path.join(__dirname, '..', 'src', 'data', 'portfolioData.tsx')
  let content = fs.readFileSync(dataFilePath, 'utf8')

  const block = `export const recentRuns: RecentRun[] = [\n${runs
    .map(toRunObject)
    .join(',\n')}\n]`

  const regex = /export const recentRuns: RecentRun\[\] = \[[\s\S]*?\n\]/

  if (!regex.test(content)) {
    console.error('Could not find recentRuns export in portfolioData.tsx')
    return false
  }

  content = content.replace(regex, block)
  fs.writeFileSync(dataFilePath, content, 'utf8')
  console.log(`✓ Updated recentRuns with ${runs.length} run(s).`)
  return true
}

async function main() {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    console.log(
      'Strava secrets not configured (STRAVA_CLIENT_ID / STRAVA_CLIENT_SECRET / STRAVA_REFRESH_TOKEN). Skipping run update.'
    )
    process.exit(0)
  }

  try {
    console.log('Refreshing Strava access token...')
    const accessToken = await getAccessToken()

    console.log('Fetching recent activities...')
    const activities = await getActivities(accessToken)

    const runs = activities
      .filter((a) => a.type === 'Run' || a.sport_type === 'Run' || a.sport_type === 'TrailRun')
      .slice(0, MAX_RUNS)

    if (!runs.length) {
      console.log('No recent runs found. Leaving existing data unchanged.')
      process.exit(0)
    }

    console.log(`Found ${runs.length} run(s): ${runs.map((r) => r.name).join(', ')}`)

    updatePortfolioData(runs)
  } catch (error) {
    console.error('Error updating runs:', error.message)
    // Don't fail the whole workflow over a transient Strava error.
    process.exit(0)
  }
}

main()
