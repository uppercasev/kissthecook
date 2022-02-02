import Ingredients from "./Ingredients";
import Method from "./Method";
import { useParams } from "react-router-dom";

export default function RecipePage({ recipe }) {
  const params = useParams()

  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <h2>{recipe.name}</h2>
      <img src={recipe.image_url} style={{ width: "200px" }} />
      <Ingredients recipe={recipe} />
      <Method recipe={recipe}/>
    </div>
  );
}
