import { useParams, Link } from "react-router-dom";
import { React, useState, useEffect } from "react";

export default function RecipeView() {
  const [recipeToDisplay, setRecipeToDisplay] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/recipes/${params.id}`)
      .then((r) => r.json())
      .then((data) => {
        setRecipeToDisplay(data);
      });
  }, []);

  return (
    <div>
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
          <button type="button" name="delete" className="button">
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
            {recipeToDisplay?.parts && recipeToDisplay.parts.map((part) => {
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
            {recipeToDisplay?.steps && recipeToDisplay.steps.map((item, index) => {
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
