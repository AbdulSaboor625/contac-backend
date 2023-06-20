require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routes/contacts");

// initializing express app
const app = express();

// middlewares

// it checks if request has some body then it will attach it to request object
app.use(express.json());

// to make backend run on localhost
app.use(cors());

// normal middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/contacts/", contactRoutes);
mongoose
  .connect(process.env.MONG_URI)
  .then((res) => {
    // Only listens request when database is connected
    console.log("Connected to Database");

    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`listening to port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
