import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, CreateRecipe, EditRecipe, DeleteRecipes, Recipes, Recipe, Error } from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Recipes />} /> 
          <Route path='recipe/:recipeId' element={<Recipe />} />
          <Route path='editRecipe/:recipeId' element={<EditRecipe />} />
          <Route path='addRecipe' element={<CreateRecipe />} />
          <Route path='deleteRecipe' element={<DeleteRecipes />} />
        </Route>
        
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
