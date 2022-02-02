import Ingredients from "./Ingredients";
import Method from "./Method";

export default function RecipePage({ recipe }) {
return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <h2>{recipe.name}</h2>
      <img src={recipe.image_url} style={{ width: "200px" }} />
      <Ingredients recipe={recipe} />
      <Method recipe={recipe}/>
    </div>
  );
}
