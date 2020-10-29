import React from "react";
import { Link } from "react-router-dom";

// import errorImage from "../../assets/error.jpeg";

import errorSpinner from "../../assets/error.gif"

import "./error.style.css";

const Error = () => {
  return (
    <div className="error-container">
      <h1>Oops, Something Went Wrong...</h1>
      <img src={errorSpinner} alt="" />
      <Link to="/">
        <button className="btn">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;
