const Todo = ({ todo, onToggle }) => {
  return (
    <div className="todo-left">
      <input
        type="checkbox"
        checked={todo.isChecked}
        onChange={onToggle}
      ></input>
      <span className={`todo-content ${todo.isChecked ? "checked" : ""}`}>
        {todo.content}
      </span>
      <span className="todo-date">{todo.date}</span>
      <button>삭제</button>
    </div>
  );
};

export default Todo;
