const express = require("express");
const router = express.Router();
const account = require("../controllers/account");

//Endpoint for login form
router.post("/login", account.retrieveAccount);

//Endpoint for registration form
router.post("/register", account.createAccount);

module.exports = router;
