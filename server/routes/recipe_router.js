const express = require('express');
const router = express.Router();
const recipe = require('../controllers/recipe');
require('dotenv').config();
const postRecipe = process.env.POSTRECIPE;
const getRecipes = process.env.GETRECIPE;

//used as endpoint conect to form post 
router.post(postRecipe, recipe.createRecipe);

//used as endpoint on displaying a list of recipes from server
router.get(getRecipes, recipe.getRecipes);

module.exports = router;