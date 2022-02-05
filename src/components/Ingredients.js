export default function Ingredients({ recipe }) {
  const parts = recipe.parts;

  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <h3>INGREDIENTS</h3>
      <div>
        {parts.map((part) => {
          return (
            <div key={part.name}>
              <p>{part.name.toUpperCase()}</p>
              <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                {part.ingredients.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
