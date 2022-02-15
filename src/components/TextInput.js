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
  datakey
}) {
  const capitalise = () => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  if (element === "input") {
    return (
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <div style={{ width: "20%" }}>
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
            datakey={datakey}
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
          ></textarea>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default TextInput;
