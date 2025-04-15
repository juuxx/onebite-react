import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const buttons = [
    { label: "-1", value: -1 },
    { label: "-10", value: -10 },
    { label: "-100", value: -100 },
    { label: "+100", value: 100 },
    { label: "+10", value: 10 },
    { label: "+1", value: 1 },
  ];
  const onClickButton = (value) => {
    setCount((prev) => prev + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller buttons={buttons} onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
