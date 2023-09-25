const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  user: String,
  title: { 
    type: String, 
    required: [true, "A Title is required!"],  
  },
  ingredients: { 
    type: Array, 
    default: [] 
  },
  directions: String
});

module.exports = mongoose.model("recipe", recipeSchema);
