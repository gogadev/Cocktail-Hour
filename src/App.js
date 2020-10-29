import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import CocktailPage from "./pages/cocktail-page/CocktailPage";
import Footer from "./components/footer/Footer";
import Error from "./pages/error/Error";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cocktail/:id">
          <CocktailPage />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
