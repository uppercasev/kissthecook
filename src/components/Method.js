export default function Method({ recipe }) {
  return (
    <div>
      <h3>METHOD</h3>
      <div style={{ textAlign: "left" }}>
        <ol>
          {recipe.steps.map((step, index) => {
            return <li key={index}>{step}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
