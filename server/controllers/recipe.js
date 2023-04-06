const Recipe = require("../models/recipes");

createRecipe = async (req, res) => {
  const { title, ingredients, directions } = req.body;
  const recipe = new Recipe({ title, ingredients, directions });

  if (!recipe) {
    return res.status(400).json({ Message: "Please add a recipe!" });
  }

  try {
    const newRecipe = await recipe.save();
    res.status(201).json({ newRecipe, message: "Recipe added!" });
  } catch (err) {
    res.status(500).json({ err, message: "Recipe not added!" });
  }
};

getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});

    if (!recipes.length) {
      return res.status(404).json({ message: "No recipes to be found!" });
    }

    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (recipe == null) {
      res.status(404).json({ message: "Recipe not found!" });
    }
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ err, message: "Recipe not found!" });
  }
};

updateRecipe = async (req, res) => {
  const { title, ingredients, directions } = req.body;

  try {
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { title, ingredients, directions },
      { new: true }
    );

    if (recipe == null) {
      return res.status(404).json({ message: "Recipe not found!" });
    }

    res
      .status(201)
      .json({ recipe, message: `${recipe.title} Recipe Updated!` });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Recipe deleted!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
};
