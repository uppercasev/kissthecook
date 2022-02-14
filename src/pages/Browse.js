import { React, useState, useEffect } from "react";
import HeroImg from "../components/HeroImg";
import ListItem from "../components/ListItem";
import Sort from "../components/Sort";

function Browse() {
const [recipesToDisplay, setRecipesToDisplay] = useState([]);
const [sortValue, setSortValue] = useState("alphabetical");
const [selectedSort, setSelectedSort] = useState({
    property: "name",
    direction: "asc"
});

const getData = (property, direction) => {
    fetch(`http://localhost:4000/recipes?_sort=${property}&_order=${direction}`)
      .then((r) => r.json())
      .then((data) => setRecipesToDisplay(data));
  }

useEffect(() => {
  getData(selectedSort.property, selectedSort.direction)
}, [sortValue]);


const handleSort = (event) => {
      const sortBy = event.target.value;
    if (sortBy === "alphabetical") {
        setSelectedSort({property: "name", direction: "asc"});
    } else if (sortBy === "reverse") {
        setSelectedSort({property: "name", direction: "desc"});
    } else if (sortBy === "recent") {
        setSelectedSort({property: "id", direction: "desc"});
    }      
    setSortValue(sortBy);
};

  return (
    <div>
      <HeroImg size="small" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>Browse Recipes</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
          <Sort handleSort={handleSort} sortValue={sortValue}/>
      </div>
      </div>
      <div>
        {recipesToDisplay.map((item) => {
          return <ListItem item={item} />;
        })}
      </div>
    </div>
  );
}

export default Browse;
