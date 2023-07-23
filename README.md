# Simple React.js Todo List Project

![image](https://github.com/smitesht/react-simple-todo-list/assets/52151346/bb26f61c-6e21-4415-90a0-8d91443cb306)

# React Feature Used
- useState
- React Routing
- CSS Flex
- HTML input text, button


# File structure
![image](https://github.com/smitesht/react-simple-todo-list/assets/52151346/1635b35a-9e54-4cac-ad1d-6a8e97dff8c1)


![image](https://github.com/smitesht/react-simple-todo-list/assets/52151346/4fca8bff-236f-40cb-8400-8e578bb375ce)

# Code Snippet

### Create Routing
```
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <TodoList />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
```
### HomeLayout

```
const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
};
```
### Navbar
```
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <Link to="/" className="brand">
        Todo List
      </Link>
    </div>
  );
};
```
### TodoList
```
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
```
### TodoTaskListWrapper
```
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
```

### TodoTaskForm
```
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
```
### TodoTask

```
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
```

### TodoEditForm
```
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
```
