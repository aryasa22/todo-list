import React, { useState } from "react";
import { motion } from "framer-motion";

export default function InputTodo({
  setIsOpen,
  inputTodoTitle,
  setInputTodoTitle,
  inputTodoTime,
  setInputTodoTime,
  todos,
  setTodos,
  isUpdate,
  setIsUpdate,
  todoId,
}) {
  const hideForm = () => {
    setIsOpen(false);
    setIsUpdate(false);
    setInputTodoTitle("");
    setInputTodoTime("");
  };

  const inputTitleHandler = (e) => {
    setInputTodoTitle(e.target.value);
  };

  const inputTimeHandler = (e) => {
    setInputTodoTime(e.target.value);
  };

  const [errorMessageTitle, setErrorMessageTitle] = useState("");
  const [errorMessageTime, setErrorMessageTime] = useState("");

  const saveHandler = () => {
    if (inputTodoTitle === "" && inputTodoTime === "") {
      setErrorMessageTitle("This field required");
      setErrorMessageTime("This field required");
      return;
    } else if (inputTodoTitle === "") {
      setErrorMessageTitle("This field required");
      return;
    } else if (inputTodoTime === "") {
      setErrorMessageTime("This field required");
      return;
    }
    setTodos([
      ...todos,
      {
        title: inputTodoTitle,
        time: inputTodoTime,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    hideForm();
  };

  const updateHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todoId) {
          return {
            ...item,
            title: inputTodoTitle,
            time: inputTodoTime,
            completed: false,
          };
        }
        return item;
      })
    );
    hideForm();
  };

  return (
    <motion.div animate={{ y: [50, 0] }} transition={{ duration: 0.3 }}>
      <div className="inputTodo">
        <span className="cardTitle">
          {isUpdate ? "Update task" : "Add a new task"}
        </span>
        <div className="inputContainer">
          <div className="input">
            <input
              onChange={inputTitleHandler}
              className="inputForm"
              type="text"
              placeholder=" "
              value={inputTodoTitle}
            />
            <label htmlFor="title" className="formLabel">
              Title
            </label>
            <motion.span className="errMsg">{errorMessageTitle}</motion.span>
          </div>
          <div className="input">
            <input
              className="inputForm"
              onChange={inputTimeHandler}
              type="time"
              placeholder=" "
              value={inputTodoTime}
            />
            <label htmlFor="time" className="formLabel">
              Time
            </label>
            <span className="errMsg">{errorMessageTime}</span>
          </div>
          <div className="buttonContainer">
            <button onClick={hideForm} className="cancelBtn">
              Cancel
            </button>
            <button
              onClick={isUpdate ? updateHandler : saveHandler}
              className="saveBtn"
            >
              {isUpdate ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
