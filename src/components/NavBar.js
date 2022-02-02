import React from "react";
import { NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";
import Logo from "./Logo";

function NavBar() {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <Logo />
      <NavLink to="/mycookbooks">MY COOKBOOKS</NavLink>
      <NavLink to="/myrecipes">MY RECIPES</NavLink>
      <NavLink to="/addrecipe">ADD NEW RECIPE</NavLink>
      <SearchBox />
    </div>
  );
}

export default NavBar;
