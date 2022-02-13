import { useState } from "react";

function ControlledInput({ element, type, name, require, rows, cols, size }) {
  const [data, setData] = useState("");

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const capitalise = () => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  if (element === "input") {
  return (
    <div style={{ display: "flex", margin: "10px" }}>
      <div style={{ width: "20%" }}>
        <label htmlFor={name}>{capitalise(name)} </label>
      </div>
      <div style={{ width: "80%" }}>
        <input
          type={type}
          name={name}
          value={data}
          required={require}
          onChange={handleChange}
          size={size}
        />
      </div>
    </div>
  );} else if (element === "textarea") {
      return (
        <div style={{ display: "flex", margin: "10px" }}>
            <div style={{ width: "20%" }}>
                 <label htmlFor={name}>{capitalise(name)}</label>
            </div>
            <div style={{ width: "80%" }}>
                 <textarea
                  name={name} 
                  value={data}
                  rows={rows}
                  cols={cols}
                  required={require}
                  onChange={handleChange}></textarea>
            </div>
        </div>
      )
    } else {
return null
  };
}

export default ControlledInput;
