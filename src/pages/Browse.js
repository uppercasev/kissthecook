import { React, useState } from "react";
import HeroImg from "../components/HeroImg";
import ListItem from "../components/ListItem";
import Sort from "../components/Sort";

function Browse( {recipes}) {
//   const [sortedRecipes, setSortedRecipes] = useState([]);

  return (
    <div>
      <HeroImg size="small" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>Browse Recipes</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
          <Sort />
      </div>
      </div>
      <div>
        {recipes.map((item) => {
          return <ListItem item={item} />;
        })}
      </div>
    </div>
  );
}

export default Browse;
