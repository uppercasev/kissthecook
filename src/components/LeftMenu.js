import React from "react";
import { NavLink } from "react-router-dom";
import RecipesList from "./RecipesList";
import { Route, Routes } from "react-router-dom";

export default function LeftMenu({ recipes }) {
  return (
    <div style={{ padding: "10px", width: "300px" }}>
      <h2>All recipes</h2>
      <Routes>
        <Route path="/myrecipes" element={<RecipesList recipes={recipes} />} />
      </Routes>
    </div>
  );
}
