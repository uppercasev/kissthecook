import { React, useState } from "react";
import HeroImg from "../components/HeroImg";
import ListItem from "../components/ListItem";
import Sort from "../components/Sort";

function Browse( {recipes}) {
//   const [sortedRecipes, setSortedRecipes] = useState([]);
const [recipesToDisplay, setRecipesToDisplay] = useState(recipes);
const [selectedSort, setSelectedSort] = useState("alphabetical");

const handleSort = (event) => {
    const orderedName = () =>
      recipes.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

    const orderedChronological = () =>
      recipes.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });

      const sortBy = event.target.value;
      setSelectedSort(sortBy);

    if (sortBy === "alphabetical") {
        setRecipesToDisplay(orderedName());
    } else if (sortBy === "reverse") {
        setRecipesToDisplay(orderedName().reverse());
    } else if (sortBy === "recent") {
        setRecipesToDisplay(orderedChronological().reverse());
    }
};


  return (
    <div>
      <HeroImg size="small" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>Browse Recipes</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
          <Sort handleSort={handleSort} selectedSort={selectedSort}/>
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
