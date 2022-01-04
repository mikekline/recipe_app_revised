const Recipe = require('../models/recipes');

createRecipe = (req, res) => {
    const body = req.body
    const recipe = new Recipe(body)
    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Please add a recipe',
        })
    }
    
    if (!recipe) {
        return res.status(400).json({ 
            success: false, 
            error: err 
        })
    }

    recipe
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'recipe added!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'recipe not added!',
            })
        })

};




getRecipes = async (req, res) => {
    await Recipe.find({}, (err, recipes) => {
        if (err) {
            return res.status(400).json({ 
                success: false, 
                error: err 
            })
        }
        if (!recipes.length) {
            return res.status(404).json({ 
                success: false, 
                error: `No recipes to be found` 
            })
        }
        return res.status(200).json({ 
            success: true, 
            data: recipes 
        })
    }).catch(err => console.log(err))
};

module.exports = {createRecipe, getRecipes};