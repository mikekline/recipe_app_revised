import React, { useState, useEffect } from "react";
import axios from "axios";

const Recipes = () => {
  let [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/recipe_app/recipes")
      .then((res) => {
        setAllRecipes(res.data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }, []);

  return (
    <>
      {allRecipes.map((recipe) => {
        return (
          <div>
            <h2> {recipe.title}</h2>
            <p>{recipe.ingredients}</p>
            <p> {recipe.directions}</p>
          </div>
        );
      })}
    </>
  );
};

export default Recipes;
