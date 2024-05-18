const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name :{
        type : String,
        required: [true, "Please add username"]
    },
    email :{
        type : String,
        required: [true, "Please Fill of fields"],
        unique:[true, "Email Address already taken"]
    },
    password :{
        type : String,
        required: [true, "Please add password"]
    },
    
},
{
    timestapms: true
})

module.exports = mongoose.model("user",userSchema) 