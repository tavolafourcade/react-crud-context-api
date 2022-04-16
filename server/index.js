import express from 'express'
// eslint-disable-next-line import/extensions
import postsRoutes from './routes/posts.routes.js'
// eslint-disable-next-line import/extensions
import connectDB from './db.js'
// eslint-disable-next-line import/extensions
import { PORT } from './config.js'

const app = express()
connectDB()
app.use(postsRoutes)
app.listen(PORT)
console.log('Server is running on port', PORT)
