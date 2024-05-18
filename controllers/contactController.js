const asyncHandler = require("express-async-handler");
const contactModel = require("../models/contactModel");
const mongoose = require("mongoose");

// @desc Get all contacts
// @route GET /api/contacts
// @access Private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await contactModel.find({ user_id: req.user.id });
  res.status(200).json({
    message: "All Contacts Loaded",
    size: contacts.length,
    data: contacts,
  });
});

// @desc Create contact
// @route POST /api/contacts
// @access Private
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const contact = await contactModel.create({
    user_id: req.user.id,
    name,
    email,
    phone,
  });

  res.status(201).json({ message: "Contact Created", data: contact });
});

// @desc Get contact by ID
// @route GET /api/contacts/:id
// @access Private
const getContact = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error(`Invalid contact ID: ${req.params.id}`);
  }

  const contact = await contactModel.findById(req.params.id);

  if (!contact || contact.user_id.toString() !== req.user.id) {
    res.status(404);
    throw new Error(`Contact not found by id ${req.params.id}`);
  }

  res.status(200).json({
    message: `Contact Found By Id ${req.params.id}`,
    data: contact,
  });
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access Private
const updateContact = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error(`Invalid contact ID: ${req.params.id}`);
  }

  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const contactAvailable = await contactModel.findById(req.params.id);

  if (!contactAvailable || contactAvailable.user_id.toString() !== req.user.id) {
    res.status(404);
    throw new Error(`Contact not found by id ${req.params.id}`);
  }

  const contact = await contactModel.findByIdAndUpdate(
    req.params.id,
    { name, email, phone },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    message: `Contact updated by ID ${req.params.id}`,
    data: contact,
  });
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access Private
const deleteContact = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error(`Invalid contact ID: ${req.params.id}`);
  }

  const contactAvailable = await contactModel.findById(req.params.id);

  if (!contactAvailable || contactAvailable.user_id.toString() !== req.user.id) {
    res.status(404);
    throw new Error(`Contact not found by id ${req.params.id}`);
  }

  await contactModel.findByIdAndDelete(req.params.id);

  res.status(200).json({
    message: `Contact deleted by ID ${req.params.id}`,
    data: contactAvailable
  });
});

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact,
};
