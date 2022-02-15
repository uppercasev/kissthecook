import TextInput from "./TextInput";

function Parts({ parts, updateForm }) {
  const addPart = () => {
    const newParts = [...parts, { name: "", ingredients: [""] }];
    updateForm("parts", newParts)
  }
  
  const handleNameChange = (event) => {
    const partId = event.target.attributes.datakey.value;
    const updatePart = [...parts];
    updatePart[partId].name = event.target.value;
    updateForm("parts", updatePart)
  } 

    return (
    <div style={{ width: "1000px", margin: "auto" }}>
      <h2>Parts</h2>
      {parts.map((part, index) => {
        return (
          <fieldset key={index}>
            <TextInput
              element="input"
              type="text"
              name={`parts[${index}][name]`}
              label="Name"
              size="80"
              required={false}
              value={part.name}
              onChange={handleNameChange}
              datakey={index}
            />
            <TextInput
              element="input"
              type="text"
              name="ingredients"
              label="Ingredient"
              size="80"
              required={true}
              datakey={index}
            />
            <button type="button" name="add_another">
              +
            </button>
          </fieldset>
        );
      })}
      <button onClick={addPart} className="button">Add another part</button>
    </div>
  );
}

export default Parts;
