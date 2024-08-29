import express from 'express'
import helmet from 'helmet'

import { PORT } from '#utils/config.js'
import { setupRoutes } from '#utils/routes.js'
const app = express()

// middliware
app.use(helmet())
app.use(express.json())

// config all routes
setupRoutes(app)

app.get('/', (req, res) => {
  res.send('Pet Control App Server is working fine')
})

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
