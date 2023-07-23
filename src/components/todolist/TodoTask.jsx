import React from "react";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";

const TodoTask = ({ task, completeTask, deleteTask, editTask }) => {
  const OnCompleteTask = (id) => {
    completeTask(task.id);
  };

  const OnDeleteTask = (id) => {
    deleteTask(task.id);
  };

  const OnEditTask = (id) => {
    editTask(task.id);
  };

  return (
    <div className="todo-task-wrapper">
      <span
        className={`item-span ${task.isComplete ? "task-complete" : ""}`}
        onClick={OnCompleteTask}
      >
        {task.task}
      </span>
      <div className="flex-row">
        <button className="btn cta" onClick={OnEditTask}>
          <FaEdit />
        </button>
        <button className="btn cta-danger" onClick={OnDeleteTask}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
