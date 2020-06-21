require('dotenv').config()
const express = require('express')
const pg = require('pg')
const cors = require('cors')
import { customRedisRateLimiter } from './middlewares';
const app = express()
const path = require('path')

// configs come from standard PostgreSQL env vars
// https://www.postgresql.org/docs/9.6/static/libpq-envars.html
const pool = new pg.Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})

const queryHandler = (req, res, next) => {
  pool.query(req.sqlQuery).then((r) => {
    return res.json(r.rows || [])
  }).catch(next)
}

// Middlewares

app.use(cors())



if (process.env.NODE_ENV === "production") {
  // serve static content
  app.use(express.static(path.join(__dirname, "client/build")))
}

// Rate Limiter for all Requests
app.use(customRedisRateLimiter)

// Routes

// app.get('/', (req, res) => {
//   res.send('Welcome to EQ Works 😎')
// })

app.get('/events/hourly', (req, res, next) => {
  req.sqlQuery = `
    SELECT date, hour, events
    FROM public.hourly_events
    ORDER BY date, hour
    LIMIT 168;
  `
  return next()
}, queryHandler)

app.get('/events/daily', (req, res, next) => {
  req.sqlQuery = `
    SELECT date, SUM(events) AS events
    FROM public.hourly_events
    GROUP BY date
    ORDER BY date
    LIMIT 7;
  `
  return next()
}, queryHandler)

app.get('/stats/hourly', (req, res, next) => {
  req.sqlQuery = `
    SELECT date, hour, impressions, clicks, revenue
    FROM public.hourly_stats
    ORDER BY date, hour
    LIMIT 168;
  `
  return next()
}, queryHandler)

app.get('/stats/daily', (req, res, next) => {
  req.sqlQuery = `
    SELECT date,
        SUM(impressions) AS impressions,
        SUM(clicks) AS clicks,
        SUM(revenue) AS revenue
    FROM public.hourly_stats
    GROUP BY date
    ORDER BY date
    LIMIT 7;
  `
  return next()
}, queryHandler)


app.get('/poi', (req, res, next) => {
  req.sqlQuery = `
    SELECT *
    FROM public.poi;
  `
  return next()
}, queryHandler)

app.get('/events/hourly_name', (req, res, next) => {
  req.sqlQuery = `
    SELECT date, hour, name, events, lat, lon
    FROM public.hourly_events
	  LEFT JOIN public.poi ON public.hourly_events.poi_id = public.poi.poi_id
    ORDER BY date, hour
    LIMIT 168;
  `
  return next()
}, queryHandler)

app.get('/events/daily_name', (req, res, next) => {
  req.sqlQuery = `
    SELECT date, name, SUM(events) AS events, lat, lon
    FROM public.hourly_events
	  LEFT JOIN public.poi ON public.hourly_events.poi_id = public.poi.poi_id
    GROUP BY date, name, lat, lon
    ORDER BY date
    LIMIT 7;
  `
  return next()
}, queryHandler)

app.get('/stats/hourly_name', (req, res, next) => {
  req.sqlQuery = `
    SELECT date, hour, name, impressions, clicks, ROUND(revenue,2) AS revenue, lat, lon
    FROM public.hourly_stats
	  LEFT JOIN public.poi ON public.hourly_stats.poi_id = public.poi.poi_id
    ORDER BY date, hour
    LIMIT 168;
  `
  return next()
}, queryHandler)

app.get('/stats/daily_name', (req, res, next) => {
  req.sqlQuery = `
    SELECT date, name,
        SUM(impressions) AS impressions,
        SUM(clicks) AS clicks,
        ROUND(SUM(revenue),2) AS revenue,
		lat, lon
    FROM public.hourly_stats
	  LEFT JOIN public.poi ON public.hourly_stats.poi_id = public.poi.poi_id
    GROUP BY date, name, lat, lon
    ORDER BY date
    LIMIT 7;
  `
  return next()
}, queryHandler)

app.get('/stats/map/daily', (req, res, next) => {
  req.sqlQuery = `
    SELECT public.hourly_stats.poi_id, name,
        SUM(impressions) AS impressions,
        SUM(clicks) AS clicks,
        ROUND(SUM(revenue),2) AS revenue,
		    lat, lon
    FROM public.hourly_stats
	  LEFT JOIN public.poi ON public.hourly_stats.poi_id = public.poi.poi_id
    GROUP BY public.hourly_stats.poi_id, name, lat, lon
    ORDER BY public.hourly_stats.poi_id
    LIMIT 7;
  `
  return next()
}, queryHandler)

// Catch-all route to redirect to home page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/pagenotfound.html"));
})

app.listen(process.env.PORT || 5555, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    console.log(`Running on ${process.env.PORT || 5555}`)
  }
})

// last resorts
process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`)
  process.exit(1)
})
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
  process.exit(1)
})
