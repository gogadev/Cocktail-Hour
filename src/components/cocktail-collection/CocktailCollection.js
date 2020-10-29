import React from "react";

import Cocktail from "../cocktail/Cocktail";
import Spinner from "../spinner/Spinner"

import "./cocktail-collection.style.css";

const CocktailCollection = ({ cocktails, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  if (cocktails.length < 1) {
    return <h2 className="no-match">no cocktails match your search criteria...</h2>;
  }

  return (
    <div className="cocktail-list">
      {cocktails.map(item => {
        return <Cocktail key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CocktailCollection;
