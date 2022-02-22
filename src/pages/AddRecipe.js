import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      { name: "", ingredients: [""] }
    ],
    steps: [""],
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const postObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };

    // We know async await, why use .then()? 
    fetch("http://localhost:4000/recipes", postObject)
      .then((response) => response.json())
      .then((data) => navigate(`/myrecipes/${data.id}`));
  };

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
        onSubmit={handleSubmit}
        style={{ width: "1000px", margin: "auto" }}
      >
        <TextInput
          element="input"
          type="text"
          name="name"
          size="80"
          value={formData.name}
          required={true}
          onChange={onTextChange}
        />
        <TextInput
          element="textarea"
          name="description"
          required={false}
          rows="8"
          cols="75"
          value={formData.description}
          onChange={onTextChange}
        />
        <TextInput
          element="input"
          type="text"
          name="image_url"
          label="Image URL"
          size="80"
          value={formData.image_url}
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
                value={formData.serves}
                onChange={onTextChange}
              />
              <TextInput
                element="input"
                type="text"
                name="allergens"
                size="15"
                required={false}
                value={formData.allergens}
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
                value={formData.prep_time}
                onChange={onTextChange}
              />
              <TextInput
                element="input"
                type="text"
                name="cook_time"
                label="Cook time"
                size="15"
                required={false}
                value={formData.cook_time}
                onChange={onTextChange}
              />
            </div>
          </div>
        </div>
        <div>
          <Parts parts={formData.parts} updateForm={updateForm} />
        </div>
        <div>
          <Steps steps={formData.steps} updateForm={updateForm} />
        </div>
        {/* Why is the button called "delete"? This might not work well 
        for those who need the name prop for screen readers */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" name="delete" className="button">
            ADD NEW RECIPE
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
