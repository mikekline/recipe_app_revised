import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

const Recipes = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/recipe_app/recipes")
      .then((res) => {
        setAllRecipes(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
    <section>
      <h2>Recipes</h2>
      {allRecipes &&
        allRecipes.map((recipe) => {
          return (
            <div key={recipe._id}>
              <h3>{recipe.title}</h3>
              <p>
                {recipe.ingredients &&
                  recipe.ingredients.map((ingredient) => {
                    return (
                      <p key={ingredient._id}>
                        {ingredient.amount}
                        {ingredient.unit}
                        {ingredient.amount && " - "}
                        {ingredient.ingredient}
                      </p>
                    );
                  })}
              </p>
              <h4>Directions</h4>
              <p>{recipe.directions}</p>
            </div>
          );
        })}
    </section>
  );
};

export default Recipes;
