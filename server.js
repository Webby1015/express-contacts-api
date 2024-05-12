const express = require("express")
const swaggerUi = require('swagger-ui-express');
const sqaggerConfig = require('./swagger-config'); 
const dotenv = require("dotenv").config()

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(sqaggerConfig));

const port  = process.env.PORT || 5000 ;

app.use('/api/contacts',require('./routes/contactsRoutes'));

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})



