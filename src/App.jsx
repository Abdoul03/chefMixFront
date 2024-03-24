import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import "./App.css";
import Inscription from "./pages/Inscription";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Inscrption" element={<Inscription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
