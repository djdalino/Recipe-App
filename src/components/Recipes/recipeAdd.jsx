import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
const RecipeAdd = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [serving, setServing] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [ingredients, setIngredients] = useState([
    {
      uuid: uuidv4(),
      amount: "",
      measurement: "",
      name: ""
    }
  ]);
  const [directions, setDirections] = useState([
    {
      instructions: "",
      optional: Boolean
    }
  ]);
  const handleAddDirections = () => {
    setDirections([...directions, { instructions: "", optional: Boolean }]);
  };
  const handleDirectionOnChange = (e, i) => {
    const items = [...directions];
    items[i][e.target.name] = e.target.value;
    setDirections(items);
  };
  const handleChange = (e, i) => {
    const items = [...ingredients];
    items[i][e.target.name] = e.target.value;
    setIngredients(items);
  };
  const addMoreIngredient = () => {
    setIngredients([
      ...ingredients,
      { uuid: uuidv4(), amount: "", measurement: "", name: "" }
    ]);
  };

  const handleOnSubmit = async e => {
    e.preventDefault();

    if (
      title !== "" &&
      description !== "" &&
      serving !== "" &&
      prepTime !== "" &&
      cookTime !== ""
    ) {
      try {
        const data = {
          uuid: uuidv4(),
          title: title,
          descriptions: description,
          images: {
            full: "/img/pancake_mountain.jpg",
            medium: "/img/pancake_mountain--m.jpg"
          },

          servings: serving,
          prepTime: prepTime,
          cookTime: cookTime,
          ingredients: ingredients,
          directions: directions
        };
        await axios.post("http://localhost:3001/recipes", data);
        console.log(data);
        console.log("success");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fields with * must not be empty");
    }
  };
  return (
    <form
      onSubmit={handleOnSubmit}
      className="container d-flex flex-column mt-3"
    >
      <div className="col-9 mb-3 mx-auto">
        <label htmlFor="title" className="fw-bold form-label">
          Title *
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="col-9 mx-auto">
        <div className="row">
          <div className="col">
            <div className="mb-3 mx-auto">
              <label htmlFor="descriptions" className="fw-bold form-label">
                Description *
              </label>
              <textarea
                className="form-control mb-3"
                name="description"
                id="descriptions"
                rows="3"
                onChange={e => setDescription(e.target.value)}
              ></textarea>
              <div className="row mb-3  ">
                <div className="col">
                  <label htmlFor="Ingredients" className="fw-bold form-label">
                    Ingredients: *
                  </label>
                </div>
                <div className="col"></div>
              </div>
              {ingredients.map((ingredient, index) => {
                const { amount, measurement, name } = ingredient;
                return (
                  <div key={index}>
                    <div className="card mx-auto col ">
                      <div className="card-body">
                        <div className="row mb-3 col-9 mx-auto">
                          <input
                            type="text"
                            name="amount"
                            className="form-control"
                            id="amount"
                            placeholder="Amount"
                            value={amount}
                            onChange={e => handleChange(e, index)}
                          />
                          <input
                            type="text"
                            name="measurement"
                            className="form-control"
                            id="measurement"
                            placeholder="measurement"
                            value={measurement}
                            onChange={e => handleChange(e, index)}
                          />
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="name"
                            value={name}
                            onChange={e => handleChange(e, index)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <a
                className="nav-link col w-100"
                onClick={() => addMoreIngredient()}
              >
                Add Ingredients
              </a>
            </div>
          </div>
          <div className="col">
            <label htmlFor="Servings" className="fw-bold form-label">
              Servings: *
            </label>
            <input
              type="text"
              name="servings"
              className="form-control"
              id="Servings"
              onChange={e => setServing(e.target.value)}
            />

            <label htmlFor="PrepTime" className="fw-bold form-label">
              Preperation Time: *
            </label>
            <input
              type="text"
              name="prepTime"
              className="form-control"
              id="PrepTime"
              onChange={e => setPrepTime(e.target.value)}
            />
            <label htmlFor="CookTime" className="fw-bold form-label">
              Cooking Time: *
            </label>
            <input
              type="text"
              name="cookTime"
              className="form-control"
              id="CookTime"
              onChange={e => setCookTime(e.target.value)}
            />
            <div className="row mb-3 mt-3 col">
              <div className="col">
                <label htmlFor="Ingredients" className="fw-bold form-label">
                  Directions:
                </label>
              </div>
              <div className="col"></div>
            </div>
            {directions.map((direction, index) => {
              const { instructions, optional } = direction;
              const g = true;
              const h = false;
              return (
                <div className="row mb-3 col" key={index}>
                  <div className="col-9">
                    <label htmlFor="Instructions" className="form-label">
                      Instructions:
                    </label>
                    <input
                      type="text"
                      name="instructions"
                      className="form-control"
                      id="Instructions"
                      value={instructions}
                      onChange={e => handleDirectionOnChange(e, index)}
                    />
                  </div>
                  <div className="col-3">
                    <label htmlFor="optional" className="form-label">
                      Optional
                    </label>
                    <select
                      className="form-select"
                      name="optional"
                      id="optional"
                      aria-label="Default select example"
                      onChange={e => handleDirectionOnChange(e, index)}
                    >
                      <option value={g}></option>
                      <option value={g}>True</option>
                      <option value={h}>False</option>
                    </select>
                  </div>
                </div>
              );
            })}

            <a className="nav-links col w-100" onClick={handleAddDirections}>
              Add Instructions
            </a>
          </div>
        </div>
      </div>

      {/* <div className="row mb-3 col-9 mx-auto">
        <div className="col">
          <label htmlFor="Ingredients" className="fw-bold form-label">
            Ingredients:
          </label>
        </div>
        <div className="col">
          <button
            className="btn btn-success col-3 mx-auto"
            onClick={() => handleAddMoreIngredient()}
          >
            Add Ingredients
          </button>
        </div>
      </div> */}

      {/* <div className="card mx-auto col ">
        <div className="card-body">
          <div className="row mb-3 col-9 mx-auto">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="text"
              name="amount"
              className="form-control"
              id="amount"
            />

            <label htmlFor="measurement" className="form-label">
              Measurement:
            </label>
            <input
              type="text"
              name="measurements"
              className="form-control"
              id="measurement"
            />

            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input type="text" name="name" className="form-control" id="name" />
          </div>
        </div>
      </div> */}

      <input
        className="btn btn-primary col-3 m-auto"
        type="submit"
        value="Add"
      />
    </form>
  );
};

export default RecipeAdd;
