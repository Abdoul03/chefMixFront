import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import "./App.css"


export default function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Welcome/>}/>
      </Routes>
    </div>
  )
}
