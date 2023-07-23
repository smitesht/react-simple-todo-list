import React, { useState } from "react";
import "./TodoList.css";

const TodoEditForm = ({ todoitem, saveTask }) => {
  const [task, setTask] = useState(todoitem.task);

  const OnChangeTaskValue = (e) => {
    setTask((data) => (data = e.target.value));
  };

  const OnTaskSubmit = (e) => {
    e.preventDefault();

    if (task.trim().length != 0) {
      //addTask(task);
      const newTask = { ...todoitem, isEdit: false, task: task };
      console.log(newTask);
      saveTask(newTask);
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
        SAVE
      </button>
    </form>
  );
};

export default TodoEditForm;
