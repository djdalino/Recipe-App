import React from "react";

const Directions = ({ directions, step }) => {
  const { instructions } = directions;

  return (
    <div>
      <p className="m-0 fw-bold">Step: {step + 1} </p>
      <p className="shadow-sm p-1 mb-2 bg-white rounded">{instructions}</p>
    </div>
  );
};

export default Directions;
