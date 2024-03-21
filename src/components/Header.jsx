import { NavLink } from "react-router-dom"
import "../style/header.css"
// import logo from "../assets/logo.jpg"

const Header = () => {
  return (
    <div className="contener">
        <div className="logo">
         {/* <img src={logo} alt="logo" /> */}
         {/* <h5>MiX it Cook it Shart it</h5> */}
        </div>
        <div className="navigue">
          <nav>
            <NavLink className="menu" to="">Home</NavLink>
            <NavLink className="menu" to="/Sign in">Sign in</NavLink>
            <NavLink className="menu" to="/Sign up">Sign up</NavLink>
            {/* <NavLink className="menu" to="/Parteners">Parteners</NavLink> */}
          </nav>
        </div>
    </div>
  )
}

export default Header