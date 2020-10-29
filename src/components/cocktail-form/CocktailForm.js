import React, { useRef, useEffect } from "react";
import "./cocktail-form.style.css";

const CocktailForm = ({ setSearch }) => {
  const searchCocktail = useRef("");

  useEffect(() => {
    searchCocktail.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const searchCocktails = () => {
    setSearch(searchCocktail.current.value);
  };

  return (
    <div className="cocktail-form">
      <h1>
        Find Your Favorite Cocktail <i className="fas fa-cocktail"></i>
      </h1>
      <form className="form" onSubmit={handleSubmit}>
      <i className="fas fa-user-edit"></i>
      <input 
          type="text"
          name="name"
          placeholder="Type Here...e.g. Martini"
          onChange={searchCocktails}
          ref={searchCocktail}
        />
      </form>
    </div>
  );
};

export default CocktailForm;
