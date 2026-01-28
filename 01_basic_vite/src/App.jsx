// import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="body">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
