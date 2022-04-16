import app from './app.js'
// eslint-disable-next-line import/extensions
import connectDB from './db.js'
// eslint-disable-next-line import/extensions
import { PORT } from './config.js'

connectDB()
app.listen(PORT)
console.log('Server is running on port', PORT)
