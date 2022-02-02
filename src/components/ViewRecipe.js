import { useParams } from "react-router-dom";
import Ingredients from "./Ingredients";
import Method from "./Method";

export default function ViewRecipe() {
const params = useParams()

  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <h2>{params.id}</h2>
    </div>
  );
}
