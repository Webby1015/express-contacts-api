const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Contact API',
            version: '1.0.0',
            description: 'Contact management API',
        },
        components: {
            schemas: {
                Contact: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            description: 'The unique identifier for the contact.',
                        },
                        name: {
                            type: 'string',
                            description: 'The name of the contact.',
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'The email address of the contact.',
                        },
                        phone: {
                            type: 'string',
                            description: 'The phone number of the contact.',
                        },
                    },
                    required: ['name', 'email'],
                },
            },
        },
    },
    apis: ['./routes/contactsRoutes.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
