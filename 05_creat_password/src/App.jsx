/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");

  // use Ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "123456780";
    if (symbol) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, symbol, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, symbol, passwordGenerator]);

  return (
    <div className="card">
      <div className="row_one">
        <input
          type="text"
          className="text_box"
          value={password}
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button className="copy_btn" onClick={copyPassword}>
          COPY
        </button>
      </div>
      <div className="row_two">
        <input
          type="range"
          name="range_find"
          id="range_find"
          className="range_find"
          min={8}
          max={50}
          onChange={(e) => setLength(e.target.value)}
          value={length}
        />
        <label htmlFor="range_find">Length :{length}</label>
      </div>
      <div className="row_three">
        <input
          type="checkbox"
          name="symbol"
          id="symbol"
          className="symbol"
          defaultChecked={symbol}
          onChange={() => {
            setSymbol((prev) => !prev);
          }}
        />
        <label htmlFor="symbol">add symbol</label>
        <input
          type="checkbox"
          name="number"
          id="number"
          className="number"
          defaultChecked={number}
          onChange={() => {
            setNumber((prev) => !prev);
          }}
        />
        <label htmlFor="number">add number</label>
      </div>
    </div>
  );
}

export default App;
