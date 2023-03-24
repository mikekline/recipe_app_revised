const mongoose = require("mongoose");
require("dotenv").config();
const dbConnection = process.env.DB_CONNECTION;

mongoose
  .connect(dbConnection, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((error) => {
    console.error("Connection error", error.message);
  });

//defult connection of the mongoose
const db = mongoose.connection;

module.exports = db;
