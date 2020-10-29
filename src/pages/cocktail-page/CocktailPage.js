import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Spinner from "../../components/spinner/Spinner";

import "./cocktail-page.style.css";

const CocktailPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getCocktail = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          ];

          const newList = {
            name,
            image,
            instructions,
            ingredients
          };
          setCocktail(newList);
        } else {
          setCocktail(null);
        }
      } catch (error) {}
      setLoading(false);
    };
    getCocktail();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!cocktail) {
    return <h2 className="no-match">no cocktail to display</h2>;
  } else {
    const { name, image, instructions, ingredients } = cocktail;

    return (
      <div className="cocktail-page">
        <h2>
          {name}
          <i className="far fa-hand-point-right"></i>
        </h2>
        <div className="main-image">
          <img src={image} alt="" />
          <Link to="/">
            <button className="main-btn">Return To Homepage</button>
          </Link>
        </div>
        <div className="info">
          <h5 align="justify">
            <strong>
              instructions<i className="fas fa-sort-down"></i>
            </strong>
            {instructions}
          </h5>
          <div className="detail">
            <strong>
              ingredients <i className="fas fa-glass-martini-alt"></i>
            </strong>
            {ingredients.map((item, index) => {
              return item ? <h5 key={index}>{item}</h5> : null;
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default CocktailPage;
