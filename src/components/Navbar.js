import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", height: "70px"}}>
            <div>
            <NavLink to="/" style={{ textDecoration: "none", color: "black" }}><img src={"/logo.png"} height={"40px"}/></NavLink>
            </div>
            <div>
            <NavLink to="/browse" style={{ textDecoration: "none", color: "black", margin: "20px" }}>Browse Recipes</NavLink>
            <NavLink to="/myrecipes/add" style={{ textDecoration: "none", color: "black", margin: "20px" }}>Add a Recipe</NavLink>
            <NavLink to="/about" style={{ textDecoration: "none", color: "black", margin: "20px" }}>About</NavLink>
            <NavLink to="/conact" style={{ textDecoration: "none", color: "black", margin: "20px" }}>Contact</NavLink>
            </div>
        </div>
    )
}

export default Navbar;