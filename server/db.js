import mongoose from 'mongoose'
// eslint-disable-next-line import/extensions
import { URI } from './config.js'

const connectDB = async () => {
  try {
    const db = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB connected to', db.connection.db.namespace)
  } catch (error) {
    console.log('error', error.message)
    process.exit(1)
  }
}

export default connectDB
