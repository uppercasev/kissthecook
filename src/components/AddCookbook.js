import { useState } from "react";

export default function AddCookbook({ onBookSubmit }) {
  const [addNewBook, setAddNewBook] = useState(false);
  const [newBookData, setNewBookData] = useState({
    title: "",
    description: "",
    recipes: [],
  });

  const handleTitleChange = (event) => {
    setNewBookData({
      ...newBookData,
      title: event.target.value,
    });
  };

  const handleDescriptionChange = (event) => {
    setNewBookData({
      ...newBookData,
      description: event.target.value,
    });
  };

  const handleClick = () => {
    setAddNewBook((addNewBook) => !addNewBook);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onBookSubmit(newBookData);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Create a new Cookbook
      </button>
      {addNewBook && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Cookbook Title: </label>
          <br></br>
          <input type="text" name="title" onChange={handleTitleChange} />
          <br></br>
          <label htmlFor="description">Description: </label>
          <br></br>
          <textarea
            id="description"
            name="description"
            rows="5"
            cols="50"
            placeholder="Enter a short description about your cookbook."
            onChange={handleDescriptionChange}
          ></textarea>
          <br></br>
          <input type="submit" value="Create new Cookbook"></input>
          <input
            type="button"
            value="Cancel"
            onClick={() => setAddNewBook(false)}
          ></input>
        </form>
      )}
    </div>
  );
}
