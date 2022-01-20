const express = require('express');
const router = express.Router();
require('../controllers/account');
require('dotenv').config();
const postLogin = process.env.LOGIN;
const postRegister = process.env.REGISTER;


//used as endpoint to serve login form
router.get(postLogin, retrieveAccount);

//used as endpoint to serve registration form
router.post(postRegister, createAccount);
module.exports = router;



