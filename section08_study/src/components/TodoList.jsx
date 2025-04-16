import Todo from "./Todo";

const TodoList = ({ todos, onToggle }) => {
  return (
    <>
      <input type="text" placeholder="검색어를 입력하세요"></input>
      <ul>
        {todos.map((todo, index) => (
          <li className="todo-item">
            <Todo key={index} todo={todo} onToggle={() => onToggle(index)} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
