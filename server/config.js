import dotenv from 'dotenv'

// Cargando variables de entorno
dotenv.config()
// eslint-disable-next-line import/prefer-default-export
export const URI = process.env.MONGODB_URI
// eslint-disable-next-line prefer-destructuring
export const PORT = process.env.PORT || 3000
