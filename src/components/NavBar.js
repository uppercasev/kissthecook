import React from "react";
import { NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";
import Logo from "./Logo";

function NavBar() {
  return (
    <div style={{display: "flex", justifyContent: "space-around"}}>
      <NavLink to="/"><Logo /></NavLink>
      <NavLink to="/myrecipes">MY RECIPES</NavLink>
      <NavLink to="/addrecipe">ADD NEW RECIPE</NavLink>
    </div>
  );
}

export default NavBar;
