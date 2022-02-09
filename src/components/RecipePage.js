import Ingredients from "./Ingredients";
import Method from "./Method";
import { useParams } from "react-router-dom";

export default function RecipePage({ recipes }) {
  const params = useParams()

  const recipeToDisplay = recipes.find((recipe) => {
    return recipe.id === parseInt(params.id);
  });

  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <h2>{recipeToDisplay.name}</h2>
      <img src={recipeToDisplay.image_url} style={{ width: "200px" }} />
      <Ingredients recipe={recipeToDisplay} />
      <Method recipe={recipeToDisplay}/>
    </div>
  );
}
