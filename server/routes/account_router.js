const express = require('express');
const router = express.Router();
const account = require('../controllers/account');
require('dotenv').config();
const postLogin = process.env.LOGIN;
const postRegister = process.env.REGISTER;


//used as endpoint to serve login form
router.post(postLogin, account.retrieveAccount);

//used as endpoint to serve registration form
router.post(postRegister, account.createAccount);

module.exports = router;