const Account = require('../models/account');


createAccount = (req, res) => {
  const body = req.body
  const account = new Account(body)
  
  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'Please sign up',
      })
  }
  
  if (!Account) {
      return res.status(400).json({ 
          success: false, 
          error: err 
      })
  }

  console.log(account)

  // account
  //     .save()
  //     .then(() => {
  //         return res.status(201).json({
  //             success: true,
  //             message: 'Account added!',
  //         })
  //     })
  //     .catch(error => {
  //         return res.status(400).json({
  //             error,
  //             message: 'Acount not added!',
  //         })
  //     })

};







retrieveAccount = async (req, res) => {
  await Account.find({}, (err, users) => {
      if (err) {
          return res.status(400).json({ 
              success: false, 
              error: err 
          })
      }
      if (!users.length) {
          return res.status(404).json({ 
              success: false, 
              error: `No Account found` 
          })
      }
      return res.status(200).json({ 
          success: true, 
          data: users 
      })
  }).catch(err => console.log(err))
};