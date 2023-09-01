import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, CreateRecipe, EditRecipe, DeleteRecipes, Recipes, Recipe, Error } from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Recipe_app/' element={<Navbar />}>
          <Route index element={<Recipes />} /> 
          <Route path='/Recipe_app/recipe/:recipeId' element={<Recipe />} />
          <Route path='/Recipe_app/editRecipe/:recipeId' element={<EditRecipe />} />
          <Route path='/Recipe_app/addRecipe' element={<CreateRecipe />} />
          <Route path='/Recipe_app/deleteRecipe' element={<DeleteRecipes />} />
        </Route>
        
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
