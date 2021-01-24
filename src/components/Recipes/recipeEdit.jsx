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
    <form className="container d-flex flex-column mt-3">
      <div className="col-9 mb-3 mx-auto">
        <label htmlFor="title" className="fw-bold form-label">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          value={title}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-9 mx-auto">
        <div className="row">
          <div className="col">
            <div className="mb-3 mx-auto">
              <label htmlFor="descriptions" className="fw-bold form-label">
                Description
              </label>
              <textarea
                className="form-control mb-3"
                name="description"
                id="descriptions"
                rows="3"
                value={description}
                onChange={handleInputChange}
              ></textarea>
              <div className="row mb-3  ">
                <div className="col">
                  <label htmlFor="Ingredients" className="fw-bold form-label">
                    Ingredients:
                  </label>
                </div>
              </div>
              {ingredientArr.map((ing, i) => {
                return (
                  <div className="card mx-auto col ">
                    <div className="card-body">
                      <div className="row mb-3 col-9 mx-auto">
                        <input
                          type="text"
                          name="amount"
                          className="form-control"
                          id="amount"
                          placeholder="Amount"
                          value={ing.amount}
                        />
                        <input
                          type="text"
                          name="measurements"
                          className="form-control"
                          id="measurement"
                          placeholder="measurement"
                          value={ing.measurement}
                        />
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="name"
                          value={ing.name}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="col">
                <a className="nav-link col w-100">Add Ingredients</a>
              </div>
              {/* {inputs} */}
            </div>
          </div>
          <div className="col">
            <label htmlFor="Servings" className="fw-bold form-label">
              Servings:
            </label>
            <input
              type="text"
              name="servings"
              className="form-control"
              id="Servings"
              value={servings}
              onChange={handleInputChange}
            />

            <label htmlFor="PrepTime" className="fw-bold form-label">
              Preperation Time:
            </label>
            <input
              type="text"
              name="prepTime"
              className="form-control"
              id="PrepTime"
              value={prepTime}
              onChange={handleInputChange}
            />
            <label htmlFor="CookTime" className="fw-bold form-label">
              Cooking Time:
            </label>
            <input
              type="text"
              name="cookTime"
              className="form-control"
              id="CookTime"
              value={cookTime}
              onChange={handleInputChange}
            />
            <div className="row mb-3 mt-3 col">
              <div className="col">
                <label htmlFor="Ingredients" className="fw-bold form-label">
                  Directions:
                </label>
              </div>
              <div className="col"></div>
            </div>
            {directionsArr.map((dir, i) => {
              const select = params => {
                if (params === true) {
                  return (
                    <select
                      className="form-select"
                      name="optional"
                      id="optional"
                      aria-label="Default select example"
                    >
                      <option defaultValue>Choose:</option>
                      <option selected value="true">
                        True
                      </option>
                      <option value="false">False</option>
                    </select>
                  );
                } else {
                  return (
                    <select
                      className="form-select"
                      name="optional"
                      id="optional"
                      aria-label="Default select example"
                    >
                      <option defaultValue>Choose:</option>
                      <option value="true">True</option>
                      <option selected value="false">
                        False
                      </option>
                    </select>
                  );
                }
              };
              return (
                <div className="row mb-3 col">
                  <div className="col-9">
                    <label htmlFor="Instructions" className="form-label">
                      {i >= 0 ? `Instruction ${i + 1}` : ""}
                    </label>
                    <input
                      type="text"
                      name="instructions"
                      className="form-control"
                      id="Instructions"
                      value={dir.instructions}
                    />
                  </div>

                  <div className="col-3">
                    <label htmlFor="optional" className="form-label">
                      Optional
                    </label>

                    {select(dir.optional)}
                  </div>
                </div>
              );
            })}
            <a className="nav-link col w-100">Add Instructions</a>
            {/* {instructions} */}
          </div>
        </div>
      </div>
      <input
        className="btn btn-primary col-3 m-auto"
        type="submit"
        value="Update"
      />
    </form>
  );
};

export default RecipeEdit;
