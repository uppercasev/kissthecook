import { React, useState, useEffect } from "react";
import HeroImg from "../components/HeroImg";
import ListItem from "../components/ListItem";
import Sort from "../components/Sort";

function Browse() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [sortedRecipes, setSortedRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/recipes")
      .then((r) => r.json())
      .then((data) => setAllRecipes(data));
  }, []);

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
        {allRecipes.map((item) => {
          return <ListItem item={item} />;
        })}
      </div>
    </div>
  );
}

export default Browse;
