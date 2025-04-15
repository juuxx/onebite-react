import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const isMount = useRef(false);

  // 의존성 배열
  // dependency array -> deps
  const buttons = [
    { label: "-1", value: -1 },
    { label: "-10", value: -10 },
    { label: "-100", value: -100 },
    { label: "+100", value: 100 },
    { label: "+10", value: 10 },
    { label: "+1", value: 1 },
  ];
  const onClickButton = (value) => {
    // 비동기로 호출
    setCount((prev) => prev + value);
    console.log(count); // 이렇게 하면 변경된 state 값 못가져옴 -> useEffect 가져옴
  };

  // 1. 마운트 : 탄생
  useEffect(() => {}, []); // 컴포넌트 최초 실행시 1번
  // 2. 업데이트 : 변화, 리랜더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  // 3. 언마운트 : 죽음

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
