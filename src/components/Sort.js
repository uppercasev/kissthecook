function Sort({ handleSort, sortValue }) {
    return (
      <div>
        <span>  Sort by: </span>
        <select name="sort" onChange={handleSort} value={sortValue}>
          <option value="alphabetical">Name (A to Z)</option>
          <option value="reverse">Name (Z to A)</option>
          <option value="recent">Most recently added</option>
        </select>
      </div>
    );
  }
  
  export default Sort;