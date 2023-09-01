import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";


const EditRecipe = () => {
  let { state } = useLocation();
  let recipe = state.recipe
  const navigateTo = useNavigate();
  const [ingredients, setIngredients] = useState(recipe.ingredients);

  // const defaultValues = {
  //   title: "",
  //   ingredients: ingredients,
  //   directions: "",
  // };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: recipe.title,
      directions: recipe.directions,
    },
  });

  useEffect(() => {
    // Populate the ingredients data in the form
    recipe.ingredients.forEach((ingredient, index) => {
      setValue(`ingredients[${index}].amount`, ingredient.amount);
      setValue(`ingredients[${index}].unit`, ingredient.unit);
      setValue(`ingredients[${index}].ingredient`, ingredient.ingredient);
    });
  }, [recipe.ingredients, setValue]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const updatedRecipe = {
      _id: recipe._id,
      title: data.title,
      ingredients: ingredients,
      directions: data.directions,
    };

    
    axios
      .put(`${process.env.REACT_APP_BASE_URL}/recipes/update_recipe/${recipe._id}`, updatedRecipe)
      .then((res) => {
        console.log(res);
        reset();
        setIngredients([{ amount: "", unit: "", ingredient: "" }]);
        recipe = updatedRecipe;
        navigateTo(`/Recipe_app/recipe/${recipe._id}`, {state: {recipe}})
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  };

  const handleIngredientChange = (index, field, value) => {
    setIngredients((prevIngredients) => {
      const updatedIngredient = {
        ...prevIngredients[index],
        [field]: value,
      };
      return [
        ...prevIngredients.slice(0, index),
        updatedIngredient,
        ...prevIngredients.slice(index + 1),
      ];
    });
    // setValue(`ingredients[${index}].${field}`, value);
  };

  const addIngredient = () => {
    const updatedIngredients = [
      ...ingredients,
      { amount: "", unit: "", ingredient: "" },
    ];
    setIngredients(updatedIngredients);
    reset({ ingredients: updatedIngredients }, { keepValues: true });
  };

  const removeIngredient = (index) => {
    const updatedIngredients = ingredients.filter(
      (e, i) => i !== index || index === 0
    );
    setIngredients(updatedIngredients);
    reset({ ingredients: updatedIngredients }, { keepValues: true });
  };

  return (
    <section>
      <h1>Edit {recipe.title}</h1>
      <form
        className='createRecipeForm'
        onSubmit={(e) => handleSubmit(onSubmit)(e)}
      >
        <div>
          <label>Title: </label>
          <input
            name='title'
            type='text'
            defaultValue={recipe.title}
            {...register("title", { required: "A recipe title is required" })}
          />
          <small className='text-danger'>
            {errors?.title && errors.title.message}
          </small>
        </div>
        <label>Ingredients: </label>
        {ingredients.map((ingredient, index) => (
          
          <span key={index}>
            {console.log(ingredient)}
            <input
              type='text'
              value={ingredient.amount}
              onChange={(e) =>
                handleIngredientChange(index, "amount", e.target.value)
              }
            />

            <select
              value={ingredient.unit}
              onChange={(e) =>
                handleIngredientChange(index, "unit", e.target.value)
              }
            >
              <option></option>
              <option value='kg'>kg</option>
              <option value='g'>g</option>
              <option value='lbs'>lbs</option>
              <option value='oz'>oz</option>
              <option value='L'>l</option>
              <option value='ml'>ml</option>
              <option value='fl oz'>fl oz</option>
              <option value='cups'>cups</option>
              <option value='tbsp'>tbs</option>
              <option value='tsp'>tsp</option>
            </select>
            <input
              type='text'
              value={ingredient.ingredient}
              onChange={(e) =>
                handleIngredientChange(index, "ingredient", e.target.value)
              }
            />

            <button
              className='plusMinusBtn'
              type='button'
              onClick={() => {
                addIngredient(index);
              }}
            >
              +
            </button>
            {index > 0 && (
              <button
                className='plusMinusBtn'
                type='button'
                onClick={() => {
                  removeIngredient(index);
                }}
              >
                -
              </button>
            )}
          </span>
        ))}

        <div>
          <label>Directions: </label>
          <textarea
            className='directions'
            name='directions'
            type='text'
            defaultValue={recipe.directions}
            {...register("directions")}
          />
        </div>
        <div className="btnContainer">
          <button className='btn' type='submit'>
            Update
          </button>
          <Link to={`/Recipe_app/recipe/${recipe._id}`} state={{recipe}}>
            <button className='btn' type='button'>
              Back
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default EditRecipe;
