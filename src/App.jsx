import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import "./App.css";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";

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
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
