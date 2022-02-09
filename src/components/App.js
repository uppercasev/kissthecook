import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Content from "./Content";
import recipes from "../recipe-data";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <hr></hr>
        <Content recipes={recipes}/>
      </Router>
    </div>
  );
}

export default App;
