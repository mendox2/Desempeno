import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/layouts/auth/Login";
import Home from "./components/layouts/pages/Home";
import { Usuario } from "./components/layouts/auth/Usuario";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/usuario",
    element: <Usuario/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
