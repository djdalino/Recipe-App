import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
const RecipeAdd = () => {
  const [valArray, setValArray] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [inputValues, setInputValues] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [serving, setServing] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [amount, setAmount] = useState([]);
  const [measure, setMeasure] = useState([]);
  const [name, setName] = useState([]);

  const handleOnChange = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const addMoreIngredient = () => {
    setAmount([...amount, ""]);
    setMeasure([...measure, ""]);
    setName([...name, ""]);
  };

  const onChange = (e, i) => {
    setAmount([(amount[i] = e.target.value)]);
  };
  const handleAddMoreIngredient = () => {
    const amount = `amount${inputs.length}`;
    const measure = `measure${inputs.length}`;
    const name = `name${inputs.length}`;

    let inputBox = (
      <div className="card mx-auto col" key={inputs.length}>
        <div className="card-body">
          <div className="row mb-3 col-9 mx-auto">
            <input
              type="text"
              name={amount}
              className="form-control"
              id={amount}
              onChange={handleOnChange}
              placeholder="Amount"
            />

            <input
              type="text"
              name={measure}
              className="form-control"
              id={measure}
              onChange={handleOnChange}
              placeholder="Measurement"
            />

            <input
              type="text"
              name={name}
              className="form-control"
              id={name}
              onChange={handleOnChange}
              placeholder="Name"
            />
          </div>
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
      <div className="row mb-3 col">
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
  // const onChange = (e, index) => {
  //   const { amount, measurement, name } = ingredients;
  //   amount[index] = e.target.value;
  //   measurement[index] = e.target.value;
  //   name[index] = e.target.value;
  //   setIngredients([
  //     ...ingredients,
  //     { amount: amount, measurement: measurement, name: name }
  //   ]);
  // };
  const handleOnSubmit = async e => {
    e.preventDefault();

    // const data = {
    //   uuid: uuidv4(),
    //   title: title,
    //   description: description,
    //   servings: serving,
    //   prepTime: prepTime,
    //   cookTime: cookTime
    // };
    // setValArray(data);
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
      {/* {amount.map((a, i) => {
          return (
            <div>
              <input type="text" value={a} onChange={e => onChange(e, i)} />
            </div>
          );
        })}
        {measure.map((m, i) => {
          return (
            <div>
              <input
                type="text"
                value={m}
                onChange={e => setMeasure([(measure[i] = e.target.value)])}
              />
            </div>
          );
        })}
        {name.map((n, i) => {
          return (
            <div>
              <input
                type="text"
                value={n}
                onChange={e => setName([...name, (name[i] = e.target.value)])}
              />
            </div>
          );
        })}
        <button onClick={e => addMoreIngredient(e)}>add more</button> */}
      {/* {ingredients.map((item, index) => {
        return (
          <div key={index}>
            <input value={item.amount} onChange={e => onChange(e, index)} />
            <input
              value={item.measurement}
              onChange={e => onChange(e, index)}
            />
            <input value={item.name} onChange={e => onChange(e, index)} />
          </div>
        );
      })} */}
      {/* <button onClick={e => addMoreIngredient(e)}>add more</button> */}
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
                onChange={e => setDescription(e.target.value)}
              ></textarea>
              <div className="row mb-3  ">
                <div className="col">
                  <label htmlFor="Ingredients" className="fw-bold form-label">
                    Ingredients:
                  </label>
                </div>
                <div className="col"></div>
              </div>
              <div className="card mx-auto col ">
                <div className="card-body">
                  <div className="row mb-3 col-9 mx-auto">
                    <input
                      type="text"
                      name="amount"
                      className="form-control"
                      id="amount"
                      placeholder="Amount"
                    />
                    <input
                      type="text"
                      name="measurement"
                      className="form-control"
                      id="measurement"
                      placeholder="measurement"
                    />
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="name"
                    />
                  </div>
                </div>
              </div>
              {inputs}
              <a
                className="nav-link col w-100"
                onClick={() => handleAddMoreIngredient()}
              >
                Add Ingredients
              </a>
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
              onChange={e => setServing(e.target.value)}
            />

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
            <div className="row mb-3 mt-3 col">
              <div className="col">
                <label htmlFor="Ingredients" className="fw-bold form-label">
                  Directions:
                </label>
              </div>
              <div className="col"></div>
            </div>
            <div className="row mb-3 col">
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
                  <option defaultValue>Choose:</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
            </div>
            {instructions}
            <a
              className="nav-links col w-100"
              onClick={() => handleMoreInstructions()}
            >
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
