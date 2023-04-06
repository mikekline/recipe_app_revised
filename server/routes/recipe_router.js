const express = require("express");
const router = express.Router();
const recipe = require("../controllers/recipe");

//Create a new recipe
router.post("/add_recipe", recipe.createRecipe);

//Retrieve all recipes from Database
router.get("/recipes", recipe.getRecipes);

//Retrieve a specific recipe
router.get("/recipe/:id", recipe.getRecipe);

//Updates a specific recipe
router.put("/update_recipe/:id", recipe.updateRecipe);

//deletes a specific recipe
router.delete("/delete_recipe/:id", recipe.deleteRecipe);

module.exports = router;
