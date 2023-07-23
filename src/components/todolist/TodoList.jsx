import React, { useState } from "react";
import "./TodoList.css";
import TodoListHeader from "./TodoListHeader";
import TodoTaskForm from "./TodoTaskForm";
import TodoTaskListWrapper from "./TodoTaskListWrapper";

/*let todoItemList = [
  {
    id: 1,
    task: "first task",
    isComplete: false,
    isEdit: false,
  },
  {
    id: 2,
    task: "second task",
    isComplete: false,
    isEdit: false,
  },
  {
    id: 3,
    task: "third task",
    isComplete: false,
    isEdit: false,
  },
  {
    id: 4,
    task: "fourth task",
    isComplete: false,
    isEdit: false,
  },
];*/

let todoItemList = [];

const TodoList = () => {
  const [todolist, setTodoList] = useState(todoItemList);

  const OnAddTask = (task) => {
    const todoTask = { id: todolist.length + 1, task, isComplete: false };
    setTodoList((prevData) => [...prevData, todoTask]);
  };

  const OnCompleteTask = (id) => {
    const newList = todolist.map((todo) => {
      return todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo;
    });
    setTodoList(newList);
  };

  const OnDeleteTask = (id) => {
    const newList = todolist.filter((todo) => {
      return todo.id !== id;
    });

    setTodoList(newList);
  };

  const OnEditTask = (id) => {
    const newList = todolist.map((todo) => {
      return todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo;
    });
    setTodoList(newList);
  };

  const OnSaveTask = (newtask) => {
    const newList = todolist.map((todo) => {
      return todo.id === newtask.id
        ? { ...todo, task: newtask.task, isEdit: false }
        : todo;
    });

    setTodoList(newList);
  };

  return (
    <div className="todo-list-wrapper">
      <TodoListHeader>Todo List</TodoListHeader>
      <TodoTaskForm addTask={OnAddTask} />
      <TodoTaskListWrapper
        todolist={todolist}
        onCompleteTask={OnCompleteTask}
        onDeleteTask={OnDeleteTask}
        onEditTask={OnEditTask}
        onSaveTask={OnSaveTask}
      />
    </div>
  );
};

export default TodoList;
