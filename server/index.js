import express from 'express'
// eslint-disable-next-line import/extensions
import postsRoutes from './routes/posts.routes.js'

const app = express()

app.use(postsRoutes)
app.listen(3000)
console.log('Server is running on port', 3000)
