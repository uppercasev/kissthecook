import { useParams, Link, useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";

export default function RecipeView() {
  const [recipeToDisplay, setRecipeToDisplay] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/recipes/${params.id}`)
      .then((r) => r.json())
      .then((data) => {
        setRecipeToDisplay(data);
      });
  }, []);

  const handleDelete = () => {
    // I've never seen window.confirm before Lol! Good stuff! 
    const confirmDelete = window.confirm(
      "Are you sure you wish to delete this recipe?"
    );
    if (!confirmDelete) {
      return;
    }
    fetch(`http://localhost:4000/recipes/${recipeToDisplay.id}`, { method: "DELETE" })
    .then((navigate("/browse")));
  };

  return (
    <div>
      {/* img elements must have an alt prop, either with meaningful text, or an empty string for decorative images.eslintjsx-a11y/alt-text */}
      <img
        src={recipeToDisplay.image_url}
        style={{ height: "400px", width: "100%", objectFit: "cover" }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>{recipeToDisplay.name}</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to={`/myrecipes/edit/${recipeToDisplay.id}`}>
            <button type="button" name="edit" className="button">
              Edit
            </button>
          </Link>
          <button
            onClick={handleDelete}
            type="button"
            name="delete"
            className="button"
          >
            Delete
          </button>
        </div>
      </div>
      <div style={{ display: "flex", marginBottom: "100px" }}>
        <div
          style={{
            width: "30%",
            paddingRight: "30px",
            borderRightStyle: "solid",
            borderWidth: "1px",
            borderColor: "silver",
          }}
        >
          <div>
            <h2>Details</h2>
            <p>Serves: {recipeToDisplay.serves}</p>
            <p>Prep time: {recipeToDisplay.prep_time}</p>
            <p>Cook time: {recipeToDisplay.cook_time}</p>
            <br></br>
          </div>
          <div>
            <h2>Ingredients</h2>
            {/* very fancy ?. operator!  */}
            {/* oh and the && operator too!  */}
            {recipeToDisplay?.parts &&
              recipeToDisplay.parts.map((part) => {
                return (
                  <div key={part.name}>
                    <p>{part.name.toUpperCase()}</p>
                    <ul>
                      {part.ingredients.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>
        <div
          style={{ width: "70%", paddingLeft: "30px", paddingRight: "30px" }}
        >
          <h2>Method</h2>
          <ol>
            {recipeToDisplay?.steps &&
              recipeToDisplay.steps.map((item, index) => {
                return (
                  <div>
                    <li key={index}>{item}</li>
                    <br></br>
                  </div>
                );
              })}
          </ol>
        </div>
      </div>
    </div>
  );
}
