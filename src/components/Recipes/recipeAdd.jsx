import React, { useState } from "react";
import axios from "axios";
const RecipeAdd = () => {
  const [inputs, setInputs] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [serving, setServing] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");

  const handleOnChange = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleAddMoreIngredient = () => {
    const amount = `amount-${inputs.length}`;
    const measure = `measure-${inputs.length}`;
    const name = `name-${inputs.length}`;

    let inputBox = (
      <div className="row mb-3 col-9 mx-auto" key={inputs.length}>
        <div className="col">
          <label htmlFor={amount} className="form-label">
            Amount
          </label>
          <input
            type="text"
            name={amount}
            className="form-control"
            id={amount}
            onChange={handleOnChange}
          />
        </div>
        <div className="col">
          <label htmlFor={measure} className="form-label">
            Measurement:
          </label>
          <input
            type="text"
            name={measure}
            className="form-control"
            id={measure}
            onChange={handleOnChange}
          />
        </div>
        <div className="col">
          <label htmlFor={name} className="form-label">
            Name:
          </label>
          <input
            type="text"
            name={name}
            className="form-control"
            id={name}
            onChange={handleOnChange}
          />
        </div>
      </div>
    );

    setInputs(prevState => [...prevState, inputBox]);
  };

  const handleMoreInstructions = () => {
    console.log("clicked!");
    const instruction = `instructions-${instructions.length}`;
    const optional = `optional-${instructions.length}`;

    const instruct = (
      <div className="row mb-3 col-9 mx-auto">
        <div className="col-9">
          <label htmlFor={instruction} className="form-label">
            Instructions:
          </label>
          <input
            type="text"
            name={instruction}
            className="form-control"
            id={instruction}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-3">
          <label htmlFor={optional} className="form-label">
            Optional
          </label>
          <select
            className="form-select"
            name={optional}
            id={optional}
            aria-label="Default select example"
            onChange={handleOnChange}
          >
            <option defaultValue>Open this select menu</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </div>
    );

    setInstructions(prevState => [...prevState, instruct]);
  };

  const handleOnSubmit = async e => {
    e.preventDefault();

    // try {
    //   const data = new FormData();
    //   data.append("title", title);
    //   data.append("descriptions", description);
    //   data.append("servings", serving);
    //   data.append("prepTime", prepTime);
    //   data.append("cookTime", cookTime);
    //   await axios.post("http://localhost:3001/recipes", data);
    //   console.log("success");
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <form
      onSubmit={handleOnSubmit}
      className="container d-flex flex-column mt-3"
    >
      <div className="col-9 mb-3 mx-auto">
        <label htmlFor="title" className="fw-bold form-label">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="col-9 mb-3 mx-auto">
        <label htmlFor="descriptions" className="fw-bold form-label">
          Description
        </label>
        <textarea
          className="form-control"
          name="description"
          id="descriptions"
          rows="3"
          onChange={e => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="row mb-3 col-9 mx-auto">
        <div className="col">
          <label htmlFor="Servings" className="fw-bold form-label">
            Servings:
          </label>
          <input
            type="text"
            name="servings"
            className="form-control"
            id="Servings"
            onChange={e => setServing(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="PrepTime" className="fw-bold form-label">
            Preperation Time:
          </label>
          <input
            type="text"
            name="prepTime"
            className="form-control"
            id="PrepTime"
            onChange={e => setPrepTime(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="CookTime" className="fw-bold form-label">
            Cooking Time:
          </label>
          <input
            type="text"
            name="cookTime"
            className="form-control"
            id="CookTime"
            onChange={e => setCookTime(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3 col-9 mx-auto">
        <label htmlFor="Ingredients" className="fw-bold form-label">
          Ingredients:
        </label>
      </div>

      <div className="row mb-3 col-9 mx-auto">
        <div className="col ">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="text"
            name="amount"
            className="form-control"
            id="amount"
          />
        </div>
        <div className="col">
          <label htmlFor="measurement" className="form-label">
            Measurement:
          </label>
          <input
            type="text"
            name="measurements"
            className="form-control"
            id="measurement"
          />
        </div>
        <div className="col">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input type="text" name="name" className="form-control" id="name" />
        </div>
      </div>

      {inputs}
      <button
        className="btn btn-success col-3 mx-auto"
        onClick={() => handleAddMoreIngredient()}
      >
        Add Ingredients
      </button>
      <div className="row mb-3 col-9 mx-auto">
        <label htmlFor="Ingredients" className="fw-bold form-label">
          Directions:
        </label>
      </div>

      <div className="row mb-3 col-9 mx-auto">
        <div className="col-9">
          <label htmlFor="Instructions" className="form-label">
            Instructions:
          </label>
          <input
            type="text"
            name="instructions"
            className="form-control"
            id="Instructions"
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
          >
            <option defaultValue>Open this select menu</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </div>
      {instructions}
      <button
        className="btn btn-success col-3 mx-auto"
        onClick={() => handleMoreInstructions()}
      >
        Add Instructions
      </button>

      <input className="btn btn-primary col-3" type="submit" value="Add" />
    </form>
  );
};

export default RecipeAdd;
