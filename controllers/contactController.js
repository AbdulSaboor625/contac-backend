const Contact = require("../models/contactModel");
const mongoose = require("mongoose");

// get all contacts
const getAllContacts = async (req, res) => {
  const contact = await Contact.find({});
  res.status(200).json(contact);
};

// get single contact
const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid ID" });
  }

  const contact = await Contact.findById(id);

  if (!contact) {
    return res.status(400).json({ error: "No such contact exist" });
  }

  res.status(200).json(contact);
};

// create a contact
const createContact = async (req, res) => {
  const { name, contactNumber } = req.body;
  try {
    const contact = await Contact.create({ name, contactNumber });
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a contact
const updateContact = async (req, res) => {
  console.log(req.body);
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid ID" });
  }

  const contact = await Contact.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!contact) {
    return res.status(400).json({ error: "No such contact exist" });
  }
  res.status(200).json(contact);
};

// delete a contact
const deleteContact = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid ID" });
  }

  const contact = await Contact.findOneAndDelete({ _id: id });

  if (!contact) {
    return res.status(400).json({ error: "No such contact exist" });
  }

  res.status(200).json(contact);
};

module.exports = {
  createContact,
  getAllContacts,
  getSingleProduct,
  deleteContact,
  updateContact,
};
