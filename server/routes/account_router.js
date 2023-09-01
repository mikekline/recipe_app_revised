const express = require("express");
const router = express.Router();
const account = require("../controllers/account");
const authMiddleware = require("../middleware/verification");


//Endpoint for login form
router.post("/login", account.login);

//Endpoint for registration form
router.post("/register", account.newAccount);


router.post('/', authMiddleware.userVerification)

module.exports = router;
