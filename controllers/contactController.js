const asyncHandler = require('express-async-handler')
// @desc Get all contacts
// @routes GET  /api/contacts
// @access Public
const getContacts = asyncHandler( async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
})

// @desc Get Create contact
// @routes POST  /api/contacts
// @access Public
const createContact = asyncHandler( async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields are mandatory");
  }else{      
    res.status(201).json({ message: "Create Contact" });
  }
})

// @desc Get contact
// @routes GET  /api/contacts/:id
// @access Public
const getContact = asyncHandler( async(req, res) => {
  res.status(200).json({ message: "Get Contact " + req.params.id});
})

// @desc Get contact 
// @routes PUT  /api/contacts/:id
// @access Public
const updateContact =asyncHandler( async (req, res) => {
  res.status(200).json({ message: "Updated Contact " + req.params.id });
})

// @desc Get contact
// @routes DELETE  /api/contacts/:id
// @access Public
const deleteContact = asyncHandler( async(req, res) => {
  res.status(200).json({ message: "deleted Contact " + req.params.id });
})

module.exports = {
  getContacts,    
  createContact,
  updateContact,
  deleteContact,
  getContact,
};
