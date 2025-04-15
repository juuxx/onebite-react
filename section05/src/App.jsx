import "./App.css";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
// 리액트 리렌더링 기준
// 1. state 가 변경되었을 떄
// 2. props 가 변경되었을 때
// 3. 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 리렌더링

// 부모로부터 받는 props 가 변경되면 리렌더링 된다

function App() {
  //let 같은 일반반 변수 선언해서 값을 바꿔도 리액트 컴포넌트가 리렌더링 되지 않음
  // state 를 통해서 바꿔야지만 변경이 가능함
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
