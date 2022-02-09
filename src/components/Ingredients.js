export default function Ingredients({ recipe }) {
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <h3>INGREDIENTS</h3>
      <div>
        <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
          {recipe.ingredients.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
