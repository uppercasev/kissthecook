import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", height: "70px"}}>
            <div>
            <NavLink to="/">Logo</NavLink>
            </div>
            <div>
            <NavLink to="/browse">Browse Recipes</NavLink>
            <NavLink to="/add">Add a Recipe</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/conact">Contact</NavLink>
            </div>
        </div>
    )
}

export default Navbar;