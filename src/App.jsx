import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/home",
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app-container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
