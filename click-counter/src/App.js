import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const decrementCount = () => {
    if (count === 0) {
      setError(true) 
      setCount(0)
    } else {
      setCount(count - 1)
    }
  };

  const incrementCount = () => {
    if (error) setError(false);
    setCount(count + 1);
  };

  return (
    <div data-test="app-component">
      <h1 data-test="counter-display">
        The counter is currently <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={() => incrementCount()}>
        Increment counter
      </button>
      <button data-test="decrement-button" onClick={() => decrementCount()}>
        Decrement counter
      </button>
      <div data-test="error-message" className={error ? null : "hidden"}></div>
    </div>
  );
}

export default App;
