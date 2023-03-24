const express = require("express");
const router = express.Router();
const recipe = require("../controllers/recipe");

//Create a new recipe
router.post("/add_recipe", recipe.createRecipe);

//Retrieve all recipes from Database
router.get("/recipes", recipe.getRecipes);

//Retrieve a specific recipe
router.get("/:id/recipe/", recipe.getRecipe);

//Updates a specific recipe
router.put("/:id/update_recipe", recipe.updateRecipe);

//deletes a specific recipe
router.delete("/:id/delete_recipe", recipe.deleteRecipe);

module.exports = router;
