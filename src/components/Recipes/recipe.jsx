import React, { useContext } from "react";
import HeaderContext from "../../context/HeaderContext";
import RecipeCard from "../Cards/recipeCards";
const Recipe = () => {
  const { results } = useContext(HeaderContext);

  return (
    <div className="container">
      <div className="row mt-5">
        {results.map(data => {
          return <RecipeCard key={data.uuid} items={data} />;
        })}
      </div>
    </div>
  );
};

export default Recipe;
