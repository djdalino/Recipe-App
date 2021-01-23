import React, { useEffect, useState } from "react";
import axios from "axios";
const RecipeEdit = props => {
  const idParam = props.match.params.id;
  // const { results } = useContext(HeaderContext);
  const [data, setData] = useState([]);
  const [ingredientArr, setIngredientArr] = useState([]);
  const [directionsArr, setDirectionsArr] = useState([]);
  useEffect(() => {
    getMatchData(idParam);
  }, [idParam]);
  const handleInputChange = e => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };
  const handleIngredientChange = (e, i) => {
    const { name, value } = e.target;

    setIngredientArr(prevState => {
      const res = [...prevState];
      res[i] = { ...res[i], [name]: value };
      return res;
    });

    // setIngredientArr(prevState => [...prevState, { [name]: value }]);

    // setIngredientArr({ ...ingredientArr, [name]: value });
  };

  const getMatchData = async id => {
    try {
      const res = await axios.get(`http://localhost:3001/recipes/${id}`);
      setData(res.data);
      setIngredientArr(res.data.ingredients);
      setDirectionsArr(res.data.directions);
    } catch (error) {
      console.log(error);
    }
  };

  const { title, description, servings, prepTime, cookTime } = data;

  return (
    <div className="container">
      <h2 className="text-center">Edit recipe</h2>
      <div className="container col-9">
        <div className="mb-3">
          <label className="fw-bold form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            placeholder="name@example.com"
            name="title"
            value={title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="fw-bold form-label">Description:</label>
          <textarea
            className="form-control"
            name="description"
            rows="3"
            value={description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="fw-bold form-label">Servings:</label>
          <input
            type="text"
            name="servings"
            className="form-control"
            value={servings}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="fw-bold form-label">Preperation Time:</label>
          <input
            type="text"
            name="prepTime"
            className="form-control"
            value={prepTime}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="fw-bold form-label">Cooking Time:</label>
          <input
            type="text"
            name="cookTime"
            className="form-control"
            value={cookTime}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="fw-bold form-label">Ingredients:</label>
          <div className="row">
            <label className="form-label col">Amount:</label>
            <label className="form-label col">Measure:</label>
            <label className="form-label col">Name:</label>
          </div>
          {ingredientArr.map((ing, i) => {
            return (
              <div className="row" key={i}>
                <input
                  type="text"
                  name="amount"
                  className="form-control col mx-5 my-1"
                  value={ing.amount}
                  onChange={handleIngredientChange}
                />
                <input
                  type="text"
                  name="measurement"
                  className="form-control col mx-5 my-1"
                  value={ing.measurement}
                  onChange={handleIngredientChange}
                />
                <input
                  type="text"
                  name="name"
                  className="form-control col mx-5 my-1"
                  value={ing.name}
                  onChange={handleIngredientChange}
                />
              </div>
            );
          })}
        </div>
        <div className="mb-3">
          <label className="fw-bold form-label">Instructions:</label>
          {directionsArr.map((dir, i) => {
            return (
              <div className="row mb-1 mx-auto" key={i}>
                <input
                  type="text"
                  name="amount"
                  className="form-control col"
                  value={dir.instructions}
                  onChange={handleIngredientChange}
                />
                <select
                  className="col form-select mx-3"
                  name="optional"
                  id="optional"
                  aria-label="Default select example"
                >
                  <option defaultValue>Open this select menu</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeEdit;
