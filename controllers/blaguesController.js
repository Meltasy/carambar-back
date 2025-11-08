const db = require('../database/db')
const CustomNotFoundError = require('../errors/CustomNotFoundError')

async function getBlagueById(req, res) {
  const { id } = req.params
  const blague = await db.getBlagueById(Number(id))
  if (!blague) {
    throw new CustomNotFoundError('Blague introuvable')
  }
  res.send(`Blague: ${blague.texte}`)
}

module.exports = { getBlagueById }
