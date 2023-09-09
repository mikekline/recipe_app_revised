const User = require("../models/account");
const { createSecretToken } = require("../util/Token");
const bcrypt = require('bcrypt');



newAccount = async (req, res, next) => {
    
  try {
    const { email, username, password, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists!" });
    }
    const user = await User.create({ email, username, password, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "You are now signed up!", success: true, user });
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};





login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'Email and password are required!'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({ message:'Email does not exist!' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({ message:'Incorrect password!' }) 
    }
     const token = createSecretToken(user._id);
     console.log(token)
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "You have logged in successfully!", success: true });
     next()
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}


userVerification = (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
  })
}

module.exports = {newAccount, login, userVerification};
