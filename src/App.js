import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
      <div style={{width: "1200px", margin: "auto"}}>
      <Navbar />
      <Home />
      </div>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
