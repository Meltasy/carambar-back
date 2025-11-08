const { sequelize } = require('../database/db')
const { DataTypes } = require('sequelize')

const Blague = sequelize.define('blagues', {
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  response: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = Blague
