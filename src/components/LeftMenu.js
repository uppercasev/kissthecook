import React from "react";
import { NavLink } from "react-router-dom";

export default function LeftMenu() {
  return (
    <div style={{padding: "10px", textAlign: "center"}}>
      <h2>Secondary nav</h2>
      <NavLink to="/recipeid=1">Lemon Cake</NavLink>
    </div>
  );
}
