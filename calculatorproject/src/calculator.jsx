import { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="calculator">
      <h1>My Calculator</h1>

      <input
        type="number"
        placeholder="First number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <input
        type="number"
        placeholder="Second number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <div className="buttons">
        <button onClick={() => setResult(Number(a) + Number(b))}>
          +
        </button>

        <button onClick={() => setResult(Number(a) - Number(b))}>
          −
        </button>

        <button onClick={() => setResult(Number(a) * Number(b))}>
          ×
        </button>

        <button
          onClick={() =>
            setResult(Number(b) === 0 ? "Cannot divide by zero" : Number(a) / Number(b))
          }
        >
          ÷
        </button>
      </div>

      <h2>Result: {result}</h2>

      <button
        className="clear"
        onClick={() => {
          setA("");
          setB("");
          setResult("");
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default Calculator;