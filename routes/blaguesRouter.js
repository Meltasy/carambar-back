const { Router } = require('express')
const { getBlagueById } = require('../controllers/blaguesController')

const blaguesRouter = Router()

blaguesRouter.get('/', (req, res) => res.send('Toutes les blagues'))
// Comment vas-tu choisir une blague aléatoire ?
blaguesRouter.get('/random', (req, res) => res.send('Une blague aléatoire'))
blaguesRouter.get('/:id', getBlagueById)

module.exports = blaguesRouter
