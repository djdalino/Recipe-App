import React, { useState, useEffect } from "react";
import HeaderContext from "./HeaderContext";
import axios from "axios";
const ContextWrapper = ({ children }) => {
  const [results, setResults] = useState([]);
  const [singleResult, setSingleResult] = useState([]);

  const recipeData = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/recipes`);
      setResults(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    recipeData();
  }, []);
  return (
    <HeaderContext.Provider
      value={{
        results,
        setResults,
        singleResult,
        setSingleResult
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default ContextWrapper;
