import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { CreateRecipe, EditRecipe, DeleteRecipes, Recipes, Recipe } from "./pages/recipes";
import { Navbar,Error } from "./pages";
import { Login, SignUp } from "./pages/auth";
import  Auth from './pages/auth/Auth'
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
 

function App() {
  const [cookies, getCookies, setCookie] = useCookies(['token']);
  const navigateTo = useNavigate();
  
  useEffect(() =>{
    if (!cookies.token) {
      navigateTo("/Recipe_app/login");
      return;
    }

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
