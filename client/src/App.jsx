import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, CreateRecipe, EditRecipe, DeleteRecipes, Recipes, Recipe, Error } from "./pages";
import { Login, Signup } from "./pages/auth";


function App() {
  return (
      <Routes>
        <Route path='/Recipe_app/' element={<Navbar />}>
          <Route index element={<Recipes />} /> 
          <Route path='/Recipe_app/recipe/:recipeId' element={<Recipe />} />
          <Route path='/Recipe_app/editRecipe/:recipeId' element={<EditRecipe />} />
          <Route path='/Recipe_app/addRecipe' element={<CreateRecipe />} />
          <Route path='/Recipe_app/deleteRecipe' element={<DeleteRecipes />} />
        </Route>
        <Route path='/Recipe_app/login' element={<Login />} />
        <Route path='/Recipe_app/signup' element={<Signup />} />
        
        <Route path='*' element={<Error />} />
      </Routes>
  );
}

export default App;
