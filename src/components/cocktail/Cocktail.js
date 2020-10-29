import React from "react";
import "./cocktail.style.css";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, image }) => {
  return (
    <div className="cocktail-container">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="cocktail-detail">
        <h3>{name}</h3>
        <Link to={`/cocktail/${id}`}>
          <button className="main-btn">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
