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
      {allRecipes &&
        allRecipes.map((recipe) => {
          return (
            <div key={recipe._id}>
              <h2>{recipe.title}</h2>
              <p>{recipe.ingredients}</p>
              <p>{recipe.directions}</p>
            </div>
          );
        })}
    </section>
  );
};

export default Recipes;
