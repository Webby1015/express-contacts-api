// @desc Get all contacts
// @routes GET  /api/contacts
// @access Public
const getContacts = (req,res)=>{
    res.status(200).json({message:"Get all contacts"})
}

// @desc Get Create contact
// @routes POST  /api/contacts
// @access Public
const createContact = (req,res)=>{
    res.status(201).json({message:"Create Contact"})
}

// @desc Get contact
// @routes GET  /api/contacts/:id
// @access Public
const getContact = (req,res)=>{
    res.status(200).json({message:"Get Contact"})
}


// @desc Get contact
// @routes PUT  /api/contacts/:id
// @access Public
const updateContact = (req,res)=>{
    res.send("Update Contact"+req.params.id)
}

// @desc Get contact
// @routes DELETE  /api/contacts/:id
// @access Public
const deleteContact = (req,res)=>{
    res.send("Delete Contact"+req.params.id)
}

module.exports = { getContacts , createContact ,updateContact,deleteContact,getContact}; 