// db.js
import { DB } from '#utils/config.js' // Importa las variables de entorno desde config.js
import pgPromise from 'pg-promise'

// Database configuration object
const dbConfig = {
  host: DB.host,
  port: DB.port,
  database: DB.database,
  user: DB.user,
  password: DB.password,
  max: DB.max,
  ssl: DB.sslRejectUnauthorized // SSL settings for secure connections
}

// Initialize pg-promise

// Initialize the database connection
const db = pgPromise()(dbConfig)

console.log('Database connection pool initialized.')

// Export the database object for use in other files
export { db }
