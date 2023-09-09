import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useCookieContext } from './auth/Auth';

const CreateRecipe = () => {
  const [ingredients, setIngredients] = useState([
    { amount: "", unit: "", ingredient: "" },
  ]);
  const {  user } = useCookieContext();
  const navigateTo = useNavigate();

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
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const newRecipe = {
      title: data.title,
      ingredients: ingredients,
      directions: data.directions,
    };

    console.log(newRecipe);

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/recipes/add_recipe`, newRecipe)
      .then((res) => {
        console.log(res);
        reset();
        setIngredients([{ amount: "", unit: "", ingredient: "" }]);
        navigateTo('/Recipe_app/')
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
      <h1>Add a recipe</h1>
      <form
        className='createRecipeForm'
        onSubmit={(e) => handleSubmit(onSubmit)(e)}
      >
        <div>
          <label>Title: </label>
          <input
            name='title'
            type='text'
            {...register("title", { required: "A recipe title is required" })}
          />
          <small className='text-danger'>
            {errors?.title && errors.title.message}
          </small>
        </div>
        <label>Ingredients: </label>
        {ingredients.map((ingredient, index) => (
          <span key={index}>
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
            {...register("directions")}
          />
        </div>
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default CreateRecipe;
