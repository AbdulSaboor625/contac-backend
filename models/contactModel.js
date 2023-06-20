const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contacts", contactSchema);
