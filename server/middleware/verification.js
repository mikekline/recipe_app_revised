const User = require("../models/account");
require("dotenv").config();
const jwt = require("jsonwebtoken");

userVerification = (req, res) => {
  const token = req.cookies.token

  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const {_id, username, email} = await User.findById(data.id)
      if (email) return res.json(
        { 
          status: true, 
          id: _id, 
          username: username, 
          email: email, 
        })
      else return res.json({ status: false })
    }
  })
}

module.exports = { userVerification };