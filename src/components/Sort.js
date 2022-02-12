function Sort({ handleSort, selectedSort }) {
    return (
      <div>
        <span>  Sort by: </span>
        <select name="sort" onChange={handleSort} value={selectedSort}>
          <option value="alphabetical">Name (A to Z)</option>
          <option value="time">Total time (ascending)</option>
          <option value="recent">Most recent</option>
        </select>
      </div>
    );
  }
  
  export default Sort;