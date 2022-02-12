import { React, useState, useEffect } from "react";
import HeroImg from "../components/HeroImg";
import ListItem from "../components/ListItem";

function Home() {
  const [recent, setRecent] = useState([]);

    useEffect(() => {
    fetch("http://localhost:4000/recipes?_sort=id&_order=desc&_limit=5")
      .then((r) => r.json())
      .then((data) => setRecent(data));
  }, []);

  return (
    <div>
      <HeroImg size="large" />
      <h1>Recent Recipes</h1>
      <div>
        {recent.map((item) => {
          return <ListItem item={item} />;
        })}
      </div>
    </div>
  );
}

export default Home;
