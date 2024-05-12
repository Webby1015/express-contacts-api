const express = require("express");
const dotenv = require("dotenv").config();
const swaggerSpec = require("./swagger-config");
const swaggerUI = require("swagger-ui-express");

const app = express();
const port = process.env.PORT || 5000;

const docsURL = `http://localhost:${port}/app-docs/`; // Corrected URL path

// Mount the contacts routes
app.use('/api/contacts', require('./routes/contactsRoutes'));

// Serve Swagger UI at the correct path
app.use('/app-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`API documentation available at: ${docsURL}`);
    console.log(`Server is running on port ${port}`);
});
