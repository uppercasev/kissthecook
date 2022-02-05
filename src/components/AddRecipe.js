import cookbooks from "../cookbook-data";

export default function AddRecipe() {
  return (
    <div>
      <form>
        <div>
          <h2>Step 1: Recipe Title and Description</h2>
          <label htmlFor="title">Title: </label>
          <br></br>
          <input type="text" name="title" />
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
          <label htmlFor="cookbooks">Select cookbook to add recipe: </label>
          <br></br>
          <select name="cookbooks" id="cookbooks">
            <option>-None-</option>
            {cookbooks.map((book) => {
              return <option value={book.title}>{book.title}</option>;
            })}
          </select>
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
          <input type="text" name="serves" />
          <br></br>
          <label htmlFor="makes">Makes: </label>
          <input type="text" name="makes" />
        </div>
        <div>
          <h2>Step 3: Recipe Ingredients, Method and Tips</h2>
          <div>
            <h3>Ingredients</h3>
            <input type="checkbox" id="single" name="single" value="Single" />
            <label for="single"> Single list (e.g. cake only)</label>
            <br></br>
            <input type="checkbox" id="multi" name="multi" value="Multi" />
            <label for="multi">
              Multi-part list (e.g. ingredients for cake, ingredients for icing)
            </label>
            <br></br>
            <div>
              <input type="text" name="ingredient" />Enter one ingredient at a time.
            </div>
            <button type="button">+ Add another ingredient</button>
          </div>
        </div>
        <br></br>
        <input type="submit" value="Add new recipe"></input>
        <input type="button" value="Cancel"></input>
      </form>
    </div>
  );
}
