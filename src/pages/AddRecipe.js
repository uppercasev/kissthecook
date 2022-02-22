import { useState } from "react";
import HeroImg from "../components/HeroImg";
import Parts from "../components/Parts";
import Steps from "../components/Steps";
import TextInput from "../components/TextInput";

function AddRecipe() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image_url: "",
    serves: "",
    allergens: "",
    prep_time: "",
    cook_time: "",
    parts: [
      { name: "part1", ingredients: ["2 eggs", "1 cup milk"] },
      { name: "part2", ingredients: [""] },
    ],
    steps: ["Mix wet stuff", "mix dry stuff"],
  });

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     console.log(event.target.elements);
  //     const formData = event.target.elements;
  //     const recipeObj = {
  //       name: formData.name.value,
  //       description: formData.description.value,
  //       image_url: formData.image_url.value,
  //       serves: formData.serves.value,
  //       allergens: formData.allergens.value,
  //       prep_time: formData.prep_time.value,
  //       cook_time: formData.cook_time.value,
  //       parts: [
  //         {
  //           name: formData.name.value,
  //           ingredients: [formData.ingredients.value],
  //         },
  //       ],
  //       steps: [formData.method.value],
  //     };
  //     const postObject = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(recipeObj),
  //     };
  //     fetch("http://localhost:4000/recipes", postObject)
  //       .then((r) => r.json())
  //       .then((data) => console.log(data));
  //   }

  const onTextChange = (event) => {
    updateForm(event.target.name, event.target.value);
  };

  const updateForm = (property, value) => {
    const newData = {};
    newData[property] = value;
    setFormData({ ...formData, ...newData });
  };

  return (
    <div>
      <HeroImg size="small" />
      <h1>Add new recipe</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(formData);
        }}
        style={{ width: "1000px", margin: "auto" }}
      >
        <TextInput
          element="input"
          type="text"
          name="name"
          size="80"
          required={true}
          onChange={onTextChange}
        />
        <TextInput
          element="textarea"
          name="description"
          required={false}
          rows="8"
          cols="75"
          onChange={onTextChange}
        />
        <TextInput
          element="input"
          type="text"
          name="image_url"
          label="Image URL"
          size="80"
          required={false}
          onChange={onTextChange}
        />
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <div style={{ width: "20%" }}>
            <label htmlFor="details">Details </label>
          </div>
          <div
            style={{ display: "flex", justifyContent: "left", width: "80%" }}
          >
            <div style={{ width: "45%" }}>
              <TextInput
                element="input"
                type="text"
                name="serves"
                size="15"
                required={false}
                onChange={onTextChange}
              />
              <TextInput
                element="input"
                type="text"
                name="allergens"
                size="15"
                required={false}
                onChange={onTextChange}
              />
            </div>
            <div style={{ width: "45%" }}>
              <TextInput
                element="input"
                type="text"
                name="prep_time"
                label="Prep time"
                size="15"
                required={false}
                onChange={onTextChange}
              />
              <TextInput
                element="input"
                type="text"
                name="cook_time"
                label="Cook time"
                size="15"
                required={false}
                onChange={onTextChange}
              />
            </div>
          </div>
        </div>
        <div>
          <Parts parts={formData.parts} updateForm={updateForm} />
        </div>
        <div>
          <Steps steps={formData.steps} updateForm={updateForm}/>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" name="delete" className="button">
            Add recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
