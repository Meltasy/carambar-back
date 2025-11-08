const { Router } = require('express')
const blaguesController = require('../controllers/blaguesController')

const blaguesRouter = Router()

blaguesRouter.get('/', blaguesController.getBlagues)
blaguesRouter.get('/random', blaguesController.getBlagueRandom)
blaguesRouter.get('/:id', blaguesController.getBlagueById)
blaguesRouter.post('/', blaguesController.createBlague)

module.exports = blaguesRouter
