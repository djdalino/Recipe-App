import React, { useState, useEffect } from "react";

const Ingredients = ({ ingredients }) => {
  const { name, amount, measurement, uuid } = ingredients;

  const [specialData, setSpecialData] = useState([]);
  useEffect(() => {
    specialMatch();
  }, []);
  const specialMatch = async () => {
    try {
      const res = await fetch(`http://localhost:3001/specials`);
      const data = await res.json();
      const find = data.filter(item => item.ingredientId === uuid);

      setSpecialData(find);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="d-flex  align-items-center">
        <p className="m-1">{amount}</p>
        <p className="m-1">{measurement}</p>
        <p className="m-1">{name}</p>
      </div>

      <div className="m-1">
        {specialData.map((item, i) => {
          return (
            <div key={i}>
              <span className="badge bg-primary fw-bold m-1">
                {item.title}{" "}
              </span>
              <span className="badge bg-primary fw-normal m-1">
                {item.type}{" "}
              </span>
              <span className="badge bg-primary fw-light m-1">
                {item.text}{" "}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ingredients;
