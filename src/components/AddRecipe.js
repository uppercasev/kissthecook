import cookbooks from "../cookbook-data";
import { useState } from "react";

export default function AddRecipe() {
  const [ingredients, setIngredients] = useState(["test"]);

  const addNewIngredient = () => {
    setIngredients([...ingredients, ""]);
  }

  const handleIngredientChange = (event) => {
    const index = event.target.attributes.datakey.value;
    const newArray = [...ingredients];
    newArray[index] = event.target.value;
    setIngredients(newArray);
  };

  return (
    <div>
      <form>
        <div>
          <h2>Step 1: Recipe Title and Description</h2>
          <label htmlFor="title">Title: </label>
          <br></br>
          <input type="text" name="title" required />
          <br></br>
          <label htmlFor="description">Description: </label>
          <br></br>
          <textarea
            id="description"
            name="description"
            rows="5"
            cols="50"
            placeholder="Enter a short description about your recipe."
          ></textarea>
          <br></br>
          <label htmlFor="cookbooks">
            Add this recipe to my cookbooks (optional):{" "}
          </label>
          <br></br>
          {cookbooks.map((book) => {
            return (
              <div>
                <input
                  type="checkbox"
                  id={book.id}
                  name={book.title}
                  value={book.title}
                />
                <label for={book.title}>{book.title}</label>
              </div>
            );
          })}
        </div>
        <div>
          <h2>Step 2: Recipe information</h2>
          <label htmlFor="prep time">Prep time: </label>
          <input type="text" name="prep time" />
          <br></br>
          <label htmlFor="cook time">Cook time: </label>
          <input type="text" name="cook time" />
          <br></br>
          <label htmlFor="serves">Serves: </label>
          <input type="text" name="serves" required />
          <br></br>
          <label htmlFor="makes">Makes: </label>
          <input type="text" name="makes" />
        </div>
        <div>
          <h2>Step 3: Recipe Ingredients, Method and Tips</h2>
          <div>
            <h3>Ingredients</h3>

            <br></br>
            <div>
              {ingredients.map((item, index) => {
                return (
                  <div>
                  <input
                    key={index}
                    type="text"
                    name={"ingredient[" + index + "]"}
                    value={item}
                    dataKey={index}
                    required
                    onChange={handleIngredientChange}
                  /><br></br>
                  </div>
                );
              })}
              Enter one ingredient at a time.
            </div>
            <button type="button" onClick={addNewIngredient}>+ Add another ingredient</button>
          </div>
        </div>
        <br></br>
        <input type="submit" value="Add new recipe"></input>
        <input type="button" value="Cancel"></input>
      </form>
    </div>
  );
}
