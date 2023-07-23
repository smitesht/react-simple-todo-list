import React, { useState } from "react";
import "./TodoList.css";

const TodoTaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const OnChangeTaskValue = (e) => {
    setTask((data) => (data = e.target.value));
  };

  const OnTaskSubmit = (e) => {
    e.preventDefault();

    if (task.trim().length != 0) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form className="wrapper box-shadow flex-row">
      <input
        className="input-text"
        placeholder="Enter New Task"
        name="task"
        value={task}
        onChange={(e) => OnChangeTaskValue(e)}
      />
      <button className="btn cta" onClick={OnTaskSubmit}>
        ADD
      </button>
    </form>
  );
};

export default TodoTaskForm;
