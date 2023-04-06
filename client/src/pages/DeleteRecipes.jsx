import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

const DeleteRecipes = () => {
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

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/recipe_app/delete_recipe/${id}`)
      .then((res) => {
        console.log(res);
        setAllRecipes(allRecipes.filter((recipe) => recipe._id !== id));
      });
  };

  return (
    <section>
      <h2>Remove Recipes</h2>
      <div className='removeR'>
        {allRecipes &&
          allRecipes.map((recipe) => {
            return (
              <p className='deleteRecipeTitle' key={recipe._id}>
                {recipe.title}
                <button
                  className='deleteBtn'
                  onClick={() => handleDelete(recipe._id)}
                >
                  Delete
                </button>
              </p>
            );
          })}
      </div>
    </section>
  );
};

export default DeleteRecipes;
