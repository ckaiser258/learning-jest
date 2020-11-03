import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const decrementCount = () => {
    return count < 0 ? setError(true) && setCount(0) : setCount(count - 1);
  };

  return (
    <div data-test="app-component">
      <h1 data-test="counter-display">
        The counter is currently <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={() => setCount(count + 1)}>
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() =>
          decrementCount()
        }
      >
        Decrement counter
      </button>
      <div data-test="error-message" className={error ? null : "hidden"}></div>
    </div>
  );
}

export default App;
