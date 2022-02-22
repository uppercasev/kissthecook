import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Browse from "./pages/Browse";
import RecipeView from "./pages/RecipeView";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Router>
        {/* We know how to use display flex, margin: auto is oldschool :)  */}
        <div style={{ width: "1200px", margin: "auto", marginBottom: "40px" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            {/* Really cool react router stuff! */}
            <Route
              path="/myrecipes/:id"
              element={<RecipeView />}
            />
            <Route path="/myrecipes/add" element={<AddRecipe />} />
            <Route path="/myrecipes/edit/:id" element={<EditRecipe />} />
            <Route path="/about" element={<About />}/>
            <Route path="/signin" element={<h1>Coming soon...</h1>}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
