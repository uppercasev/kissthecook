import { useParams } from "react-router-dom";

export default function RecipeView({ recipes }) {
  //   const params = useParams()

  //   const recipeToDisplay = recipes.find((recipe) => {
  //     return recipe.id === parseInt(params.id);
  //   });

  const recipeToDisplay = {
    id: 6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec interdum mi, quis dapibus odio. Etiam in felis ullamcorper, ultrices magna ac, tincidunt mi. Integer aliquet dui a elit ornare, a venenatis risus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nisi. Nam vitae feugiat elit. Etiam facilisis eleifend est id pulvinar. Phasellus tincidunt nulla pulvinar, mollis urna non, tincidunt sem. Mauris quis euismod lectus. Nulla ullamcorper tellus et sodales dignissim. ",
    name: "Zucchini & Corn Fritters",
    image_url:
      "https://www.eatwell101.com/wp-content/uploads/2018/05/Cheesy-Corn-Fritters-3.jpg",
    serves: 5,
    prep_time: "5 mins",
    cook_time: "10 mins",
    ingredients: [
      "2 rashers middle bacon, rind trimmed, pat dry, roughly chopped",
      "1 cup corn kernels, fresh (1 large cob)",
      "1 zucchini, grated, excess liquid squeezed",
      "1/3 cup self raising flour",
      "2 eggs, lightly beaten",
      "2 spring onions, thinly sliced",
      "1 tbsp parsley, chopped",
      "vegetable oil, for shallow frying",
    ],
    steps: [
      "In a bowl, combine bacon, corn, zucchini, flour, egg, onion and parsley. Season with salt & pepper.",
      "Cover the base of a large non-stick frying pan with vegetable, and heat on medium. Heap 1/4 cup of mixture into the pan and press lightly to flatten. Cook for 3-4 minutes each side, until golden and cooked through. Do not overcrowd the pan. Drain on paper towel and keep warm.",
      "Serve with pan roasted cherry tomatoes, poached egg, and chilli jam.",
    ],
  };

  return (
    <div>
      <img
        src={recipeToDisplay.image_url}
        style={{ height: "400px", width: "100%", objectFit: "cover" }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>{recipeToDisplay.name}</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button type="button" name="edit" className="button">
            Edit
          </button>
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
            <ul>
              {recipeToDisplay.ingredients.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
        <div
          style={{ width: "70%", paddingLeft: "30px", paddingRight: "30px" }}
        >
          <h2>Method</h2>
          <ol>
            {recipeToDisplay.steps.map((item, index) => {
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
