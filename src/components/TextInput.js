// does this need to be created øn every render?
const capitalise = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

function TextInput({
  element,
  type,
  name,
  label,
  require,
  rows,
  cols,
  size,
  onChange,
  value,
  datakey,
  dataPartKey
}) {
  if (element === "input") {
    return (
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <div style={{ width: "20%" }}>
          {/* wow excellent label */}
          <label htmlFor={name}>{label ?? capitalise(name)}</label>
        </div>
        <div style={{ width: "80%" }}>
          <input
            type={type}
            name={name}
            value={value}
            required={require}
            onChange={onChange}
            size={size}
            // I have no clue what these do, but I think it has to be lower case
            datakey={datakey}
            datapartkey={dataPartKey}
          />
        </div>
      </div>
    );
  } else if (element === "textarea") {
    return (
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <div style={{ width: "20%" }}>
          <label htmlFor={name}>{label ?? capitalise(name)}</label>
        </div>
        <div style={{ width: "80%" }}>
          <textarea
            name={name}
            value={value}
            rows={rows}
            cols={cols}
            required={require}
            onChange={onChange}
            datakey={datakey}
            dataPartKey={dataPartKey}
          />
        </div>
      </div>
    );
  } else {
    // What is the purpose of this?
    return null;
  }
}

export default TextInput;
