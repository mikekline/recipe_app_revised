import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
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
      <h1>Recipes</h1>
      <div>
      {allRecipes &&
        allRecipes.map((recipe) => {
          return (
              <div key={recipe._id} className="list">
                <Link
                  to={`/recipe/${recipe._id}`}
                  state={{recipe}}
                  className="recipesLink"
                  
                >
                  <p  className='RecipeTitle  RecipesList'>{recipe.title}</p>   
                </Link>  
              </div>     
          );   
        })}
      </div>
    </section>
  );
};

export default Recipes;
