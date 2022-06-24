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
}) {
  const hideAdd = () => {
    setIsOpen(false);
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
    hideAdd();
    setIsUpdate(false);
  };

  return (
    <motion.div animate={{ y: [50, 0] }} transition={{ duration: 0.3 }}>
      <div className="inputTodo">
        <span className="cardTitle">Add a new task</span>
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
            {isUpdate ? (
              ""
            ) : (
              <button onClick={hideAdd} className="cancelBtn">
                Cancel
              </button>
            )}
            <button onClick={saveHandler} className="saveBtn">
              {isUpdate ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
