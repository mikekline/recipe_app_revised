const mongoose = require('mongoose');
require('dotenv').config();
const dbConnection = process.env.DB_CONNECTION;

mongoose
    .connect(dbConnection, {  useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true   })
    .catch(e => {
        console.error('Connection error', e.message)
    });

//defult connection of the mongoose 
const db = mongoose.connection;

module.exports = db;