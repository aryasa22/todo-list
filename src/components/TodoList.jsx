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
  todoId,
  setTodoId,
}) {
  const appearAdd = () => {
    setIsOpen(true);
  };
  const isNull = todos.length === 0;

  return (
    <div className="todoList">
      {isNull ? (
        <span className="no-task">
          No task currently, please add a new one!
        </span>
      ) : (
        filteredTodos.map((todo) => {
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
              todoId={todoId}
              setTodoId={setTodoId}
            />
          );
        })
      )}
      <button onClick={appearAdd} className="addBtn">
        <FaPlus />
      </button>
    </div>
  );
}
