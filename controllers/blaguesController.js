const Blagues = require('../models/blagues')

exports.getBlagues = async(req, res) => {
  const blagues = await Blagues.findAll()
  res.status(200).json({
    error: false,
    result: blagues
  })
}

exports.getBlagueRandom = async (req, res) => {
  const blagues = await Blagues.findAll({
    attributes: ['id']
  })
  const randomId = Math.floor(Math.random() * blagues.length) + 1
  const blague = await Blagues.findByPk(blagues[randomId].id)
  res.status(200).json({
    error: false,
    message: `Blague avec id ${req.params.id} est recupere.`,
    result: blague
  })
}

exports.getBlagueById = async (req, res) => {
  const blague = await Blagues.findByPk(req.params.id)
  res.status(200).json({
    error: false,
    message: `Blague avec id ${req.params.id} est recupere.`,
    result: blague
  })
}

exports.createBlague = async (req, res) => {
  const { question, response } = req.body
  const newBlague = await Blagues.create({
    question,
    response
  })
  res.status(201).json({
    error: false,
    message: 'Blague creee avec succes.',
    result: newBlague
  })
}
