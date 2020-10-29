import React from "react";
import { Link } from "react-router-dom";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <h1>Cocktail Hour</h1>
      </Link>
    </div>
  );
};

export default Navbar;
