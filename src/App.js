import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");

  const fetchApi = async () => {
    const id = Math.floor(Math.random() * 100) + 1;
    const response = await axios.get(`https://api.adviceslip.com/advice/${id}`);
    var data = JSON.parse(response.data + "}");
    setAdvice(data.slip.advice);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchApi}>
          <span>GIVE ME AN ADVICE !!!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
