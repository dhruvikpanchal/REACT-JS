import { useState } from "react";
import "./App.css";

function App() {
  let current = 0;
  const [result, setCounter] = useState(current);

  const remove_one = () => {
    setCounter(result - 1);
  };

  const add_one = () => {
    setCounter(result + 1);
  };

  return (
    <div className="box">
      <h1>COUNT SECTION</h1>
      <p>
        Your current value is : <b>{result}</b>
      </p>
      <div className="button_section">
        <button onClick={add_one}>ADD +1</button>
        <button onClick={remove_one}>REMOVE -1</button>
      </div>
    </div>
  );
}

export default App;
