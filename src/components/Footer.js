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
        <div style={{ width: "220px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>Home</Link><br></br>
          <Link to="/browse">Browse Recipes</Link><br></br>
          <Link to="/add">Add a Recipe</Link><br></br>
          <Link to="/about">About</Link><br></br>
          <Link to="/conact">Contact</Link>
        </div>
        <div style={{fontSize: "small", width: "980px"}}>
          <p>
            KissTheCook is a website built by Vi Tran. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed nec interdum mi, quis dapibus
            odio. Etiam in felis ullamcorper, ultrices magna ac, tincidunt mi.
            Integer aliquet dui a elit ornare, a venenatis risus blandit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna
            nisi. Nam vitae feugiat elit. Etiam facilisis eleifend est id
            pulvinar. Phasellus tincidunt nulla pulvinar, mollis urna non,
            tincidunt sem. Mauris quis euismod lectus. Nulla ullamcorper tellus
            et sodales dignissim.
          </p>
          <p>Copyright Vi Tran 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
