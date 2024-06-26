const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config()

connectDb();
const app = express();
const port  = process.env.PORT || 5000 ;

const contactsRoutes = require('./routes/contactsRoutes');
const userRoutes =  require('./routes/userRoutes');

app.use(express.json())
app.use('/api/contacts',contactsRoutes);
app.use("/api/users",userRoutes );
app.use(errorHandler)

app.get('/',(req,res)=>{
    res.status(200).json({
        message: "Contact API is working",})
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})



