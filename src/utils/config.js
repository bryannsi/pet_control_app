export const PORT = process.env.PORT || 3000

export const DB = {
  host: process.env.DB_HOST || null,
  port: process.env.DB_PORT || null,
  database: process.env.DB_DATABASE || null,
  user: process.env.DB_USER || null,
  password: process.env.DB_PASSWORD || null,
  max: process.env.DB_MAX ? parseInt(process.env.DB_MAX, 10) : 10,
  sslRejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED === 'true'
}
