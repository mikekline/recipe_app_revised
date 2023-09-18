import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useCookieContext } from '../auth/Auth';

const DeleteRecipes = () => {
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

  const handleDelete = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_BASE_URL}/recipes/delete_recipe/${id}`)
      .then((res) => {
        console.log(res);
        setAllRecipes(allRecipes.filter((recipe) => recipe._id !== id));
      });
  };

  return (
    <section>
      <h1>Remove Recipes</h1>
      <div className=''>
        {allRecipes &&
          allRecipes.map((recipe) => {
            return (
              <p className='RecipeTitle' key={recipe._id}>
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
