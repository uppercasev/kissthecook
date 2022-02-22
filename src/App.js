import "./App.css";
import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Browse from "./pages/Browse";
import RecipeView from "./pages/RecipeView";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";

function App() {
  return (
    <div>
      <Router>
        <div style={{ width: "1200px", margin: "auto", marginBottom: "40px" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route
              path="/myrecipes/:id"
              element={<RecipeView />}
            />
            <Route path="/myrecipes/add" element={<AddRecipe />} />
            <Route path="/myrecipes/edit/:id" element={<EditRecipe />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
