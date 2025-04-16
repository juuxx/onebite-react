import { useState } from "react";

const InputTodo = ({ date, addTodoList }) => {
  const [content, setContent] = useState("");

  return (
    <>
      <h2>오늘은 📅 </h2>
      <h1>{date.toDateString()}</h1>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새로운 Todo... "
      ></input>
      <button onClick={() => addTodoList(content)}>추가</button>
    </>
  );
};

export default InputTodo;
