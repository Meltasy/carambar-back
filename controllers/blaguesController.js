const Blagues = require('../models/blagues')

exports.getBlagues = async(req, res, next) => {
  try {
    const blagues = await Blagues.findAll()
    if (!blagues || blagues.length === 0) {
      return res.status(404).json({
        error: true,
        message: 'Aucune blague trouvee.'
      })
    }
    res.status(200).json({
      error: false,
      result: blagues
    })
  } catch (error) {
    next(error)
  }
}

exports.getBlagueRandom = async (req, res, next) => {
  try {
    const blagues = await Blagues.findAll({
      attributes: ['id']
    })
    if (!blagues || blagues.length === 0) {
      return res.status(404).json({
        error: true,
        message: 'Aucune blague disponible.'
      })
    }
    const randomId = Math.floor(Math.random() * blagues.length)
    const blague = await Blagues.findByPk(blagues[randomId].id)
    if (!blague) {
      return res.status(404).json({
        error: true,
        message: 'Blague introuvable.'
      })
    }
    res.status(200).json({
      error: false,
      message: `Blague avec id ${blague.id} recuperee.`,
      result: blague
    })
  } catch (error) {
    next(error)
  }
}

exports.getBlagueById = async (req, res, next) => {
  try {
    const { id } = req.params
    if (!id || isNaN(id)) {
      return res.status(400).json({
        error: true,
        message: 'ID invalide.'
      })
    }
    const blague = await Blagues.findByPk(id)
    if (!blague) {
      return res.status(404).json({
        error: true,
        message: `Blague avec id ${id} introuvable.`
      })
    }
    res.status(200).json({
      error: false,
      message: `Blague avec id ${req.params.id} recuperee.`,
      result: blague
    })
  } catch (error) {
    next(error)
  }
}

exports.createBlague = async (req, res, next) => {
  try {
    const { question, response } = req.body
    if (!question || !response) {
      return res.status(400).json({
        error: true,
        message: 'Question et reponse sont obligatoires.'
      })
    }
    const newBlague = await Blagues.create({
      question,
      response
    })
    res.status(201).json({
      error: false,
      message: 'Blague creee avec succes.',
      result: newBlague
    })
  } catch (error) {
    next(error)
  }
}
