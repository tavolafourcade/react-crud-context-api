import express from 'express'
// eslint-disable-next-line import/extensions
import postsRoutes from './routes/posts.routes.js'

// Creating Express
const app = express()

// middleware: importing json for req.body
app.use(express.json())

// Adding routes to express
app.use(postsRoutes)

export default app
