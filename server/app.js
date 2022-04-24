import express from 'express'
import fileUpload from 'express-fileupload'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import postsRoutes from './routes/posts.routes.js'

// Creating Express
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

// middleware: importing json for req.body
app.use(express.json())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './upload',
}))

// Adding routes to express
app.use(postsRoutes)

app.use(express.static(join(__dirname, '../client/build')))

// If there is nothin in the backend will redirect to main page
app.get('*',(req,res)=>{
  res.sendFile(join(__dirname, '../client/build/index.html'))
})
export default app
