import { useEffect, useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputTodoTitle, setInputTodoTitle] = useState("");
  const [inputTodoTime, setInputTodoTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const [status, setStatus] = useState("all");

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const filterTodosHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filterTodosHandler();
  }, [status, todos]);

  return (
    <div className="App">
      <nav>
        <div className="navBrand">My Todo</div>
        <div className="filterTodos">
          {isOpen || isUpdate ? (
            ""
          ) : (
            <select onChange={statusHandler} name="filter" id="filter">
              <option value="all">All Tasks</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          )}
        </div>
      </nav>

      <div>
        {isOpen ? (
          <InputTodo
            setIsOpen={setIsOpen}
            inputTodoTitle={inputTodoTitle}
            setInputTodoTitle={setInputTodoTitle}
            inputTodoTime={inputTodoTime}
            setInputTodoTime={setInputTodoTime}
            todos={todos}
            setTodos={setTodos}
            isUpdate={isUpdate}
            setIsUpdate={setIsUpdate}
          />
        ) : (
          <TodoList
            setIsOpen={setIsOpen}
            todos={todos}
            setTodos={setTodos}
            setInputTodoTitle={setInputTodoTitle}
            setInputTodoTime={setInputTodoTime}
            setIsUpdate={setIsUpdate}
            filteredTodos={filteredTodos}
          />
        )}
      </div>
    </div>
  );
}

export default App;
