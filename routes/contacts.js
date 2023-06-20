const express = require("express");
const {
  createContact,
  getAllContacts,
  getSingleProduct,
  deleteContact,
  updateContact,
} = require("../controllers/contactController");

const router = express.Router();

// get all contacts
router.get("/", getAllContacts);

// get single contact
router.get("/:id", getSingleProduct);

// create a new contact
router.post("/", createContact);

// delete a contact
router.delete("/:id", deleteContact);

// update a contact
router.patch("/:id", updateContact);

module.exports = router;
