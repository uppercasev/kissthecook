import TextInput from "./TextInput";

function Steps({ steps, updateForm }) {
  const addStep = () => {
    const newSteps = [...steps, ""];
    updateForm("steps", newSteps);
  };

  const handleChange = (event) => {
    const stepId = event.target.attributes.datakey.value;
    const newSteps = [...steps];
    newSteps[stepId] = event.target.value;
    updateForm("steps", newSteps);
  };

  return (
    <div style={{ width: "1000px", margin: "auto" }}>
      <h2>Method</h2>
      {steps.map((step, index) => {
        return (
          <div key={index}>
            <TextInput
              element="textarea"
              rows="5"
              cols="75"
              name={`parts[${index}][name]`}
              label="Step"
              size="80"
              required={true}
              value={step}
              onChange={handleChange}
              datakey={index}
            />
          </div>
        );
      })}
      <button onClick={addStep} type="button" name="add_another">
        +
      </button>
    </div>
  );
}

export default Steps;
