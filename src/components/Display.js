import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import RecipePage from "./RecipePage";
import RecipesList from "./RecipesList";
import CookbooksList from "./CookbooksList";
import AddRecipe from "./AddRecipe";
import recipes from "../recipe-data";
import cookbooks from "../cookbook-data";

export default function Display() {
  const [recipeToDisplay, setRecipeToDisplay] = useState(recipes[0]);
  const [cookbooksToDisplay, setCookbooksToDisplay] = useState(cookbooks);

  const onBookSubmit = (data) => {
    setCookbooksToDisplay([...cookbooksToDisplay, data]);
  };

  return (
    <div style={{ marginLeft: "50px" }}>
      <Routes>
        <Route path="/myrecipes" element={<RecipesList recipes={recipes} />} />
        <Route
          path="/mycookbooks"
          element={
            <CookbooksList
              cookbooks={cookbooksToDisplay}
              onBookSubmit={onBookSubmit}
            />
          }
        />
        <Route path="/addrecipe" element={<AddRecipe />} />
        <Route path="/recipes/:id" element={<RecipePage recipes={recipes} />} />
      </Routes>
    </div>
  );
}
