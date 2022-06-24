import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaPen, FaTrash } from "react-icons/fa";

export default function Todo({
  todos,
  todo,
  setTodos,
  setInputTodoTitle,
  setInputTodoTime,
  setIsOpen,
  setIsUpdate,
}) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const updateHandler = () => {
    setInputTodoTitle(todo.title);
    setInputTodoTime(todo.time);
    deleteHandler();
    setIsOpen(true);
    setIsUpdate(true);
  };

  return (
    <motion.div
      className={`todo ${todo.completed ? "completed" : ""}`}
      initial={{ x: -10 }}
      animate={{ x: 0 }}
      exit={{ y: 100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="todoDetails">
        <span className="todoTitle">{todo.title}</span>
        <span className="todoTime">{todo.time}</span>
      </div>
      <div className="todoActions">
        <button onClick={completeHandler} className="actionBtn completeBtn">
          <FaCheck />
        </button>
        <button onClick={updateHandler} className="actionBtn updateBtn">
          <FaPen />
        </button>
        <button onClick={deleteHandler} className="actionBtn deleteBtn">
          <FaTrash />
        </button>
      </div>
    </motion.div>
  );
}
