const swaggerJSDoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'carambar-back',
      version: '1.1.1',
      description: 'API Documentation for Wild Code School Test (backend)'
    },
    servers: [
      {
        url: 'https://carambar-back-5c9h.onrender.com/v1',
        description: 'carambar-backend production server'
      }
    ]
  },
  apis: ['./routes/*.js', './app.js']
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec
