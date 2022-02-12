import { React, useState, useEffect } from "react";
import HeroImg from "../components/HeroImg";


function Home() {
  const [recent, setRecent] = useState([]);
  
  useEffect(() => {
      fetch("http://localhost:400/recipes?_sort=id&_order=desc&_limit=5")
      .then((r) => r.json())
      .then((data) => console.log(data))
  })
  
    return (
    <div>
      <HeroImg size="large" />
      <h2>Recent Recipes</h2>
      <div>
        <ul>
          <li>recent recipes</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
