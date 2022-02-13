import "./App.css";
import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Browse from "./pages/Browse";
import RecipeView from "./pages/RecipeView";
import AddRecipe from "./pages/AddRecipe";

function App() {
  const [allRecipes, setAllRecipes] = useState([]);

  const getRecipes = () => {
    fetch("http://localhost:4000/recipes")
      .then((r) => r.json())
      .then((data) => setAllRecipes(data));
  }

  useEffect(() => {
    getRecipes()
  }, []);

  return (
    <div>
      <Router>
        <div style={{ width: "1200px", margin: "auto", marginBottom: "40px" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse recipes={allRecipes} />} />
            <Route
              path="/myrecipes/:id"
              element={<RecipeView />}
            />
            <Route path="/add" element={<AddRecipe />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
