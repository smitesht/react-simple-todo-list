import React from "react";
import TodoTask from "./TodoTask";
import TodoEditForm from "./TodoEditForm";

const TodoTaskListWrapper = ({
  todolist,
  onCompleteTask,
  onDeleteTask,
  onEditTask,
  onSaveTask,
}) => {
  const OnCompleteTask = (id) => {
    onCompleteTask(id);
  };

  const OnDeleteTask = (id) => {
    onDeleteTask(id);
  };

  const OnEditTask = (id) => {
    onEditTask(id);
  };

  const OnSaveTask = (task) => {
    console.log(task);
    onSaveTask(task);
  };

  return (
    <div className="wrapper box-shadow mx-1 flex-col">
      {todolist.length ? (
        todolist.map((todoItem) => {
          return todoItem.isEdit ? (
            <TodoEditForm
              key={todoItem.id}
              todoitem={todoItem}
              saveTask={OnSaveTask}
            />
          ) : (
            <TodoTask
              key={todoItem.id}
              task={todoItem}
              completeTask={OnCompleteTask}
              deleteTask={OnDeleteTask}
              editTask={OnEditTask}
            />
          );
        })
      ) : (
        <h3>No Todo Items</h3>
      )}
    </div>
  );
};

export default TodoTaskListWrapper;
