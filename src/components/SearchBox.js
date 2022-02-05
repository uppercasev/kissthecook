export default function SearchBox({ label, labelText }) {
  return (
    <div>
      <label htmlFor={label}>{labelText}</label>
      <input type="text" name={label} placeholder='Search...'></input>
    </div>
  );
}
