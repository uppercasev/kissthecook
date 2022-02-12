import { React, useState, useEffect } from "react";
import HeroImg from "../components/HeroImg";


function Home() {
  const [recent, setRecent] = useState([]);
  
  useEffect(() => {
      fetch("http://localhost:4000/recipes?_sort=id&_order=desc&_limit=5")
      .then((r) => r.json())
      .then((data) => setRecent(data))
  }, [])
  


    return (
    <div>
      <HeroImg size="large" />
      <h2>Recent Recipes</h2>
      <div>
        <ol>
            {recent.map((item) => {
                return  <a href={`/recipes/${item.id}`}><li key={item.id} style={{display: "flex"}}>
                    <img src={item.image_url} style={{width: "100px"}}></img>
              <h2>{item.name}</h2>
              {/* <p>{item.description}</p> */}
              </li></a>
            })}
         
        </ul>
      </div>
    </div>
  );
}

export default Home;
