import ControlledInput from "../components/ControlledInput";
import HeroImg from "../components/HeroImg";

function AddRecipe() {
  return (
    <div>
      <HeroImg size="small" />
      <h1> Add new recipe</h1>
      <form>
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
          name="image URL"
          size="80"
          required={false}
        />
        <div style={{ display: "flex", margin: "10px" }}>
          <div style={{ width: "20%" }}>
            <label htmlFor="details">Details </label>
          </div>
          <div style={{ display: "flex", justifyContent:"left", width: "80%" }}>
            <div style={{ width: "50%" }}>
              <ControlledInput
                element="input"
                type="text"
                name="serves"
                size="20"
                required={false}
              />
              <ControlledInput
                element="input"
                type="text"
                name="allergens"
                size="20"
                required={false}
              />
            </div>
            <div style={{ width: "50%" }}>
              <ControlledInput
                element="input"
                type="text"
                name="prep time"
                size="20"
                required={false}
              />
              <ControlledInput
                element="input"
                type="text"
                name="cook time"
                size="20"
                required={false}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
