import express from 'express'
// eslint-disable-next-line import/extensions
import postsRoutes from './routes/posts.routes.js'

// Creating Express
const app = express()

// Adding routes to express
app.use(postsRoutes)

export default app
