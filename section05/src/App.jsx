import "./App.css";
import Button from "./components/button";

// 컴포넌트 함수는 무조건 첫글자 대문자
function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"} />
    </>
  );
}

export default App;
