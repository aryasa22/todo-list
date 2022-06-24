import { FaPlus } from "react-icons/fa";

import Todo from "./Todo";

export default function TodoList({
  setIsOpen,
  todos,
  setTodos,
  setInputTodoTitle,
  setInputTodoTime,
  setIsUpdate,
  filteredTodos,
}) {
  const appearAdd = () => {
    setIsOpen(true);
  };

  return (
    <div className="todoList">
      {filteredTodos.map((todo) => {
        return (
          <Todo
            todos={todos}
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
            setInputTodoTitle={setInputTodoTitle}
            setInputTodoTime={setInputTodoTime}
            setIsOpen={setIsOpen}
            setIsUpdate={setIsUpdate}
          />
        );
      })}
      <button onClick={appearAdd} className="addBtn">
        <FaPlus />
      </button>
    </div>
  );
}