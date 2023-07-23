import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import TodoList from "./components/todolist/TodoList";

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

export default App;
