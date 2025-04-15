import "./App.css";

import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState } from "react";
import { useMountLogger } from "./hooks/useMountLogger";
import { buttons } from "./constants/buttons";

function App() {
  const [count, setCount] = useState(0);

  useMountLogger();

  const onClickButton = (value) => {
    // 비동기로 호출
    setCount((prev) => prev + value);
    console.log(count); // 이렇게 하면 변경된 state 값 못가져옴 -> useEffect 가져옴
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller buttons={buttons} onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
