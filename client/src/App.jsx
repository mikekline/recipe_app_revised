import "./App.css";
import { CreateRecipe, DeleteRecipes, Recipes } from "./pages";

function App() {
  return (
    <>
      <CreateRecipe />
      <Recipes />
      <DeleteRecipes />
    </>
  );
}

export default App;
