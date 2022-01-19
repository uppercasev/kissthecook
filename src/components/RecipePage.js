import { useState } from "react";
import recipes from "../recipe-data";
import Ingredients from "./Ingredients";
import Method from "./Method";

export default function RecipePage() {
  const [recipeToDisplay, setRecipeToDisplay] = useState(recipes[0]);
  
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <hr></hr>
      <h2>{recipes[0].name}</h2>
      <img src={recipes[0].image_url} style={{ width: "200px" }} />
      <Ingredients recipe={recipeToDisplay} />
      <Method recipe={recipeToDisplay}/>
    </div>
  );
}
