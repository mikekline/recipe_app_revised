const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const Schema = mongoose.Schema;
const saltRounds = 12;
 
const accountSchema = new Schema({
  email: { 
    type: String, 
    required: [true, "An email is required!"], 
    unique:true 
  },
   username: {
    type: String,
    required: [true, "A username is required!"],
  },
  password: { 
    type: String, 
    required: [true, "A password is required!"] 
  },
  createdAt: { 
    type: Date,
    default: new Date() 
  }
});

accountSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, saltRounds);
});

module.exports = mongoose.model('account', accountSchema);