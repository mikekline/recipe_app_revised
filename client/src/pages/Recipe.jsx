import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import CircularProgress from "@mui/material/CircularProgress";

const Recipe = (props) => {
  let { state } = useLocation();
  let recipe = state.recipe

  return (
    <section>
      <div className="individualRecipeTittle">
      <h1>
        {recipe.title}
      </h1>
      <Link to='/'>
        <button className='btn editBtn' type='button'>
          edit
        </button>
      </Link>
       </div>       
      { recipe.ingredients &&
        recipe.ingredients.map((ingredient, key) => {
          return (
            <p key={key}>
              {ingredient.amount}
              {ingredient.unit}
              {ingredient.amount && " - "}
              {ingredient.ingredient}
            </p>
          );


      })}
              
      {recipe.directions && <h4>Directions</h4>}
      <p>{recipe.directions && recipe.directions}</p>

      <Link to='/'>
        <button className='btn' type='button'>
          Back
        </button>
      </Link>
    </section>  
  )
}

export default Recipe