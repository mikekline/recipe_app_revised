import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { CreateRecipe, EditRecipe, DeleteRecipes, Recipes, Recipe } from "./pages/recipes";
import { Navbar,Error } from "./pages";
import { Login, SignUp } from "./pages/auth";
import  Auth from './pages/auth/Auth'


function App() {
  return (
      <Routes>
        <Route path='/Recipe_app' element={<Auth > <Navbar/> </Auth>} >
          <Route index element={<Auth ><Recipes /></Auth>} /> 
          <Route path='/Recipe_app/recipe/:recipeId' element={<Recipe />} />
          <Route path='/Recipe_app/editRecipe/:recipeId' element={<EditRecipe />} />
          <Route path='/Recipe_app/addRecipe' element={<Auth><CreateRecipe /></Auth>} />
          <Route path='/Recipe_app/deleteRecipe' element={<DeleteRecipes />} />
        </Route>
        
        <Route path='/Recipe_app/login' element={<Login />} />
        <Route path='/Recipe_app/signup' element={<SignUp />} />
        
        <Route path='*' element={<Error />} />
        
      </Routes>
  );
}

export default App;
