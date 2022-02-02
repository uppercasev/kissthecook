import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Content from "./Content";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <hr></hr>
        <Content />
      </Router>
    </div>
  );
}

export default App;
