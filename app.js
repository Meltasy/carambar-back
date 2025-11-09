const express = require('express')
const { connectDB } = require('./database/db')
const blaguesRouter = require('./routes/blaguesRouter')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger')

const app = express()

connectDB()

app.use(express.json())
app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/v1/blagues', blaguesRouter)

app.get('/v1/', (req, res) => {
  res.json({ message: 'Le backend fonctionne correctement.' })
})

app.use((req, res, next) => {
  res.status(404).json({
    error: true,
    message: 'Route introuvable.'
  })
})

app.use((err, req, res, next) => {
  console.error('Erreur :', err)
  res.status(err.status || 500).json({
    error: true,
    message: 'Erreur interne du serveur.'
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
  if (error) {
    throw error
  }
  console.log(`Ecoute sur le port ${PORT} !`)
  console.log(`Documentation API disponible a ${PORT}.`)
})
