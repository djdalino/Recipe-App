import React, { useContext } from "react";
import HeaderContext from "../../context/HeaderContext";
import Ingredients from "./ingredients";
import Directions from "./directions";
const RecipeSingleView = props => {
  const { results } = useContext(HeaderContext);
  const idParam = props.match.params.id;
  const findOne = results.find(data => data.uuid === idParam);

  const {
    title,
    images,
    servings,
    prepTime,
    cookTime,
    ingredients,
    directions
  } = findOne;
  return (
    <div className="container">
      <h1 className="text-center">Recipe Detail View</h1>

      <h2 className="text-center fw-bolder">{title}</h2>
      <div className="row justify-content-md-center">
        <div className="col-6 shadow p-3 mb-5 bg-white rounded">
          <img src={`http://localhost:3001/${images.medium}`} alt={title} />
        </div>
        <div className="col-2 shadow p-3 mb-5 bg-white rounded">
          <p className="m-1">
            <span className="fw-bold">Prep:</span> {prepTime} mins
          </p>
          <p className="m-1">
            <span className="fw-bold">Cook:</span> {cookTime} mins
          </p>
          <p className="m-1">
            <span className="fw-bold">Total:</span> {cookTime + prepTime} mins
          </p>
          <p className="m-1">
            <span className="fw-bold">Servings:</span> {servings}
          </p>
        </div>
      </div>
      <div className="col mt-3 shadow p-3 mb-5 bg-white rounded">
        <h2>Ingredients:</h2>
        {ingredients.map((ing, i) => {
          return <Ingredients key={i} ingredients={ing} />;
        })}
      </div>
      <div className="col shadow p-3 mb-5 bg-white rounded">
        <h2>Directions:</h2>
        {directions.map((dir, i) => {
          return <Directions key={i} directions={dir} step={i} />;
        })}
      </div>
    </div>
  );
};

export default RecipeSingleView;
