const express = require('express')
const app = express()
const { connectDB } = require('./database/db')
const blaguesRouter = require('./routes/blaguesRouter')
const cors = require('cors')

connectDB()

app.use(express.json())

app.use(cors())

app.use('/v1/blagues', blaguesRouter)

app.get('/v1/', (req, res) => {
  res.json('Le backend fonctionne correctement.')
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({
    error: 'Erreur interne du serveur.'
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
  if (error) {
    throw error
  }
  console.log(`Ecoute sur le port $PORT} !`)
})
