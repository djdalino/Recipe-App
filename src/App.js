import React from "react";
import { Switch, Route } from "react-router-dom";
import Recipe from "./components/Recipes/recipe";
import RecipeSingleView from "./components/Recipes/recipeSingleView";
import Navbar from "./components/Navbar/navbar";
import RecipeEdit from "./components/Recipes/recipeEdit";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/recipe/:id" component={RecipeSingleView} />
        <Route path="/edit/recipe/:id" component={RecipeEdit} />
        <Route path="/" component={Recipe} exact />
      </Switch>
    </React.Fragment>
  );
};

export default App;
