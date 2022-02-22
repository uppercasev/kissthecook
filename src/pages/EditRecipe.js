import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeroImg from "../components/HeroImg";
import Parts from "../components/Parts";
import Steps from "../components/Steps";
import TextInput from "../components/TextInput";

function EditRecipe() {
  const [formData, setFormData] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/recipes/${params.id}`)
      .then((r) => r.json())
      .then((data) => setFormData(data));
  }, []);
  // React Hook useEffect has a missing dependency: 'params.id'. Either include it or remove the dependency array.eslintreact-hooks/exhaustive-deps
  // I think it's saying that if we updated the data in "params" then we should probably call the use effect again as there will be new data...
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const putObject = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch(`http://localhost:4000/recipes/${formData.id}`, putObject)
      .then((r) => r.json())
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
      <h1>Edit recipe</h1>
      <form
        onSubmit={handleSubmit}
        // You use flex everywhere else! 
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
            {/* Excellent use of the label, and even used the htmlFor.
            Could we consider adding a label for each text input, they don't have to be shown
            to those who can see, but it would be useful for someone trying to navigate multiple 
            input boxes!  */}
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" name="delete" className="button">
            UPDATE MY RECIPE
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditRecipe;
