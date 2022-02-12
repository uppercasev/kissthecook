import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{
        background: "black"
      }}
    >
      <div style={{display: "flex", width: "1200px", color: "white", margin: "auto", alignItems: "center", height: "170px"}}>
        <div style={{ width: "30%" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link><br></br>
          <Link to="/browse" style={{ textDecoration: "none", color: "white" }}>Browse Recipes</Link><br></br>
          <Link to="/add" style={{ textDecoration: "none", color: "white" }}>Add a Recipe</Link><br></br>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>About</Link><br></br>
          <Link to="/conact" style={{ textDecoration: "none", color: "white" }}>Contact</Link>
        </div>
        <div style={{fontSize: "small", width: "70%", textAlign: "center", paddingLeft: "30px"}}>
          <p>
            KissTheCook is a website built by Vi Tran. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed nec interdum mi, quis dapibus
            odio. Etiam in felis ullamcorper, ultrices magna ac, tincidunt mi.
            Integer aliquet dui a elit ornare, a venenatis risus blandit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed nec interdum mi, quis dapibus
            odio.
          </p>
          <p>Copyright Vi Tran 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
