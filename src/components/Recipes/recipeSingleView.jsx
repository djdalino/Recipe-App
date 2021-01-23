import React, { useContext } from "react";
import HeaderContext from "../../context/HeaderContext";
import Ingredients from "./ingredients";
import Directions from "./directions";
import { Link } from "react-router-dom";
const RecipeSingleView = props => {
  const { results } = useContext(HeaderContext);
  const idParam = props.match.params.id;
  const findOne = results.find(data => data.uuid === idParam);

  const {
    uuid,
    title,
    images,
    servings,
    prepTime,
    cookTime,
    ingredients,
    directions
  } = findOne;
  return (
    <div className="container mx-auto d-flex flex-column align-items-center">
      <h2 className="text-center p-4 fw-bolder">{title}</h2>
      <div className="col-9 sec mt-3 shadow p-5 mb-5 bg-white rounded">
        <div className="d-flex p-1 rounded align-items-center">
          <img src={`http://localhost:3001/${images.medium}`} alt={title} />
          <div className="col-3 m-4 p-4">
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
            <Link to={`/edit/recipe/${uuid}`} className="btn btn-success">
              Edit Recipe
            </Link>
          </div>
        </div>
      </div>
      <div className="col-9 mt-3 shadow p-5 mb-5 bg-white rounded">
        <h2>Ingredients:</h2>
        {ingredients.map((ing, i) => {
          return <Ingredients key={i} ingredients={ing} />;
        })}
      </div>
      <div className="col-9 mt-3 shadow p-5 mb-5 bg-white rounded">
        <h2>Directions:</h2>
        {directions.map((dir, i) => {
          return <Directions key={i} directions={dir} step={i} />;
        })}
      </div>
    </div>
  );
};

export default RecipeSingleView;
