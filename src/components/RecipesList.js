export default function RecipesList({ recipes }) {
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
        {recipes.map((recipe) => {
          return <li key={recipe.id}><a href={`/recipes/${recipe.id}`}>
              {recipe.name}</a></li>;
        })}
      </ul>
    </div>
  );
}
