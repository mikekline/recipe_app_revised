import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { Navbar, CreateRecipe, EditRecipe, DeleteRecipes, Recipes, Recipe, Error } from "./pages";
import { Login, SignUp } from "./pages/auth";
import  Auth from './pages/auth/Auth'
import { useCookies } from "react-cookie";
 



function App() {

    const [cookies, getCookies,  setCookie] = useCookies(['']);
useEffect(() =>{
    function handleLogin(token) {
setCookie('token', token, {path:'/Recipe_app'})
    }
    handleLogin()
}, [])

  return (
      <Routes>
        <Route path='/Recipe_app' element={<Auth > <Navbar/> </Auth>} >
          <Route index element={<Recipes />} /> 
          <Route path='/Recipe_app/recipe/:recipeId' element={<Recipe />} />
          <Route path='/Recipe_app/editRecipe/:recipeId' element={<EditRecipe />} />
          <Route path='/Recipe_app/addRecipe' element={<CreateRecipe />} />
          <Route path='/Recipe_app/deleteRecipe' element={<DeleteRecipes />} />
        </Route>
        
        <Route path='/Recipe_app/login' element={<Login />} />
        <Route path='/Recipe_app/signup' element={<SignUp />} />
        
        <Route path='*' element={<Error />} />
        
      </Routes>
  );
}

export default App;
