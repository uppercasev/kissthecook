import { useState } from "react";
import ControlledInput from "../components/ControlledInput";
import HeroImg from "../components/HeroImg";

function AddRecipe() {
    function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements);
    const formData = event.target.elements;
    const recipeObj = {
      name: formData.name.value,
      description: formData.description.value,
      image_url: formData.image_url.value,
      serves: formData.serves.value,
      allergens: formData.allergens.value,
      prep_time: formData.prep_time.value,
      cook_time: formData.cook_time.value,
      parts: [{ name: formData.name.value, ingredients: [formData.ingredients.value] }],
      steps: [formData.method.value]
    };
    const postObject = {
        method: "POST",
        headers: {
                 "Content-Type": "application/json",
                  "Accept": "application/json"
                },
        body: JSON.stringify(recipeObj)
    };
    fetch("http://localhost:4000/recipes", postObject)
    .then((r) => r.json())
    .then((data) => console.log(data))
}

  return (
    <div>
      <HeroImg size="small" />
      <h1> Add new recipe</h1>
      <form onSubmit={handleSubmit} style={{ width: "1000px", margin: "auto" }}>
        <ControlledInput
          element="input"
          type="text"
          name="name"
          size="80"
          required={true}
        />
        <ControlledInput
          element="textarea"
          name="description"
          required={false}
          rows="8"
          cols="75"
        />
        <ControlledInput
          element="input"
          type="text"
          name="image_url"
          size="80"
          required={false}
        />
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <div style={{ width: "20%" }}>
            <label htmlFor="details">Details </label>
          </div>
          <div
            style={{ display: "flex", justifyContent: "left", width: "80%" }}
          >
            <div style={{ width: "45%" }}>
              <ControlledInput
                element="input"
                type="text"
                name="serves"
                size="15"
                required={false}
              />
              <ControlledInput
                element="input"
                type="text"
                name="allergens"
                size="15"
                required={false}
              />
            </div>
            <div style={{ width: "45%" }}>
              <ControlledInput
                element="input"
                type="text"
                name="prep_time"
                size="15"
                required={false}
              />
              <ControlledInput
                element="input"
                type="text"
                name="cook_time"
                size="15"
                required={false}
              />
            </div>
          </div>
        </div>
        <div>
          <ControlledInput
            element="input"
            type="text"
            name="ingredients"
            size="80"
            required={true}
          />
          <button type="button" name="add_another">
            +
          </button>
        </div>
        <div>
          <ControlledInput
            element="textarea"
            name="method"
            required={false}
            rows="4"
            cols="75"
          />
          <button type="button" name="add_another">
            +
          </button>
        </div>
        <button type="submit" name="delete" className="button">
          Add recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;
