const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  host: './dev.sqlite',
})

const connectDB = async () => {
  sequelize.sync()
  await sequelize.authenticate()
  console.log('Connecte a la base de donnees.')
}

module.exports = { sequelize, connectDB }
