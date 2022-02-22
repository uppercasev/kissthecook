import TextInput from "./TextInput";

function Parts({ parts, updateForm }) {
  const addPart = (event) => {
    event.preventDefault();
    const newParts = [...parts, { name: "", ingredients: [""] }];
    updateForm("parts", newParts);
  };

  const addItem = (part, index) => {
    const newParts = [...parts];
    const updatePart = {
      name: part.name,
      ingredients: [...part.ingredients, ""],
    };
    newParts[index] = updatePart;
    updateForm("parts", newParts);
  };

  const handleNameChange = (event) => {
    const partId = event.target.attributes.datakey.value;
    const newParts = [...parts];
    newParts[partId].name = event.target.value;
    updateForm("parts", newParts);
  };

  const handleIngredientChange = (event) => {
    const itemId = event.target.attributes.datakey.value;
    const partId = event.target.attributes.dataPartKey.value;
    const newParts = [...parts];
    newParts[partId].ingredients[itemId] = event.target.value;
    updateForm("parts", newParts);
  };

  return (
    <div style={{ width: "1000px", margin: "auto" }}>
      <h2>Ingredient Parts</h2>
      {parts && parts.map((part, partIndex) => {
        return (
          <div>
            <fieldset key={partIndex}>
              <TextInput
                element="input"
                type="text"
                name={`parts[${partIndex}][name]`}
                label="Part name"
                size="80"
                required={false}
                value={part.name}
                onChange={handleNameChange}
                datakey={partIndex}
              />
              {part?.ingredients && part.ingredients.map((item, index) => {
                return (
                  <TextInput
                    key={index}
                    element="input"
                    type="text"
                    name="ingredients"
                    label="Ingredient"
                    size="80"
                    value={item}
                    onChange={handleIngredientChange}
                    required={true}
                    datakey={index}
                    dataPartKey={partIndex}
                  />
                );
              })}
              <button
                type="button"
                name="add_another"
                onClick={() => addItem(part, partIndex)}
              >
                +
              </button>
            </fieldset>
            <br></br>
          </div>
        );
      })}
      <button onClick={addPart}>
        + Add another part
      </button>
      <hr></hr>
    </div>
  );
}

export default Parts;
