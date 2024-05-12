const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    info: {
      title: 'Contact API',
      version: '1.0.0',
      description: 'contact API',
    },
  },
  apis: ['./routes*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
