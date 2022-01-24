const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;
 
const accountSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

accountSchema.pre('save', function(next) {
  const account = this

  bcrypt.hash(account.password, saltRounds, function(error, hash) {
    account.password = hash
    next()
  });  
});

module.exports = mongoose.model('account', accountSchema);