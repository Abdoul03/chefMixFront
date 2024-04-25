import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import "./App.css";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import UserPages from "./pages/UserPages";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "/inscription",
      element: <Inscription />,
    },
    {
      path: "/connexion",
      element: <Connexion />,
    },
    {
      path: "/UserPage",
      element: <UserPages />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
