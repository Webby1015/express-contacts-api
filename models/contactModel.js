 const mongoose = require("mongoose");

 const contactSchema = mongoose.Schema({
    user_id:{
        type:String,
        required:true,
        ref:"user"
    },
    name: {
        type: String,
        required: [true,"please add the Contact name"]
    },
    email :{
        type: String,
        required: [true,"please add the Contact Email Address"]
    },
    phone :{
        type: String,
        required: [true,"please add the Contact Phone number"]
    },
},
{
    timestamps:true
})

module.exports = mongoose.model("Contact",contactSchema);