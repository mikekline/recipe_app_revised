import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useCookieContext } from './auth/Auth';


const Recipes = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const {  user } = useCookieContext();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/recipes/recipes`)
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
                  to={`/Recipe_app/recipe/${recipe._id}`}
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
