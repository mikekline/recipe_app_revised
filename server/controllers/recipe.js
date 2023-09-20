const Recipe = require("../models/recipes");

createRecipe = async (req, res) => {
  const { title, ingredients, directions, user } = req.body;
  const recipe = new Recipe({ title, ingredients, directions, user });

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
    const user = req.query.user;
    const recipes = await Recipe.find({user: user});

    if (!recipes.length) {
      return res.status(200).json({ recipes, message: 'No recipes to be found!' });
    }

    res.status(200).json({recipes, message: 'Recipes found!'});
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
  //!todo figure out personalized delete request
  try {
    const user = req;
    console.log(user)
    await Recipe.findByIdAndDelete({user: user});
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
