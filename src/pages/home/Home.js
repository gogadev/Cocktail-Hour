import React, { useState, useEffect } from "react";

import CocktailForm from "../../components/cocktail-form/CocktailForm";
import CocktailCollection from "../../components/cocktail-collection/CocktailCollection";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("martini");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCocktails = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
        );
        const data = await response.json();
        console.log(data);
        const { drinks } = data;

        if (drinks) {
          const newList = drinks.map(item => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass
            };
          });
          setCocktails(newList);
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log("error");
      }
      setLoading(false);
    };
    getCocktails();
  }, [search]);

  return (
    <div>
      <CocktailForm setSearch={setSearch}></CocktailForm>
      <CocktailCollection
        cocktails={cocktails}
        loading={loading}
      ></CocktailCollection>
    </div>
  );
};

export default Home;
