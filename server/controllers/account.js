const bcrypt = require('bcrypt');
const Account = require('../models/account');



createAccount = (req, res) => {
  const body = req.body
  const account = new Account(body)
  
  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'Please sign up'
      })
  }
  
  if (!account) {
      return res.status(400).json({ 
          success: false, 
          error: error 
      })
  }

  
  

  account
      .save()
      .then(() => {
          return res.status(201).json({
              success: true,
              message: 'Account added! Please Login!'
          })
      })
      .catch(error => {
          return res.status(400).json({
              error,
              message: 'Acount not added!'
          })
      })
  
    
};




retrieveAccount = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    Account
        .findOne({username: username})
        .then(async account => {
            if (account) {
                await bcrypt.compare(password, account.password, function(err, result) {
                    if (result){
                        req.session.account = account;
                        console.log(req.session);
                        return res.status(200).json({ 
                            success: true, 
                            message: 'Login Success' 
                        })
                    } else {
                        return res.status(400).json({ 
                            success: false, 
                            message: 'Password did not match' 
                        })
                    }

                });
            } else {
                return res.status(400).json({ 
                    success: false, 
                    message: 'Cound not find acciunt' 
                })
            }   

        }).catch(err => console.log(err))
 
};

module.exports = {createAccount, retrieveAccount};



// await Account.find({}, (err, accounts) => {
    //       if (err) {
    //           return res.status(400).json({ 
    //               success: false, 
    //               error: error 
    //           })
    //       }
    //       if (!accounts.length) {
    //           return res.status(404).json({ 
    //               success: false, 
    //               error: `Account not found` 
    //           })
    //       }
    //       return res.status(200).json({ 
    //           success: true, 
    //           data: accounts 
    //       })
    //   }).clone().catch(err => console.log(err))