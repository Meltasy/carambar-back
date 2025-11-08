const express = require('express')
const app = express()

const blaguesRouter = require('./routes/blaguesRouter')

// API routes
app.use('/v1/blagues', blaguesRouter)

app.get('/v1/', (req, res) => {
  res.json('Le backend fonctionne correctement.')
})

// App middleware



// Catch errors
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.statusCode || 500).send(err.message)
})

app.listen(process.env.PORT, (error) => {
  if (error) {
    throw error
  }
  console.log(`Ecoute sur le port ${process.env.PORT} !`)
})
