import React from "react";
import { Link } from "react-router-dom";
const RecipeCard = ({ items }) => {
  const { title, description, images, uuid } = items;
  return (
    <div key={uuid} className="card p-0 m-3" style={{ width: "18rem" }}>
      <div style={{ height: "200px" }}>
        <img
          src={`http://localhost:3001/${images.medium}`}
          height="100%"
          className="card-img-top"
          alt={title}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text" style={{ height: "50px" }}>
          {description}
        </p>
        <Link to={`/recipe/${uuid}`} className="btn btn-primary ">
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
