import { NavLink } from "react-router-dom";
import "../style/header.css";

const Header = () => {
  const handelClike = () => {
    console.log("je suis cliker");
  };
  return (
    <div className="contener">
      <div className="logo" onClick={handelClike}>
        <NavLink to="/" className="p">
          ChefMix
        </NavLink>
      </div>
      <div className="navigue">
        <nav className="menu">
          <NavLink to="/inscription" className="connect">
            Inscription
          </NavLink>
          <NavLink to="/connexion" className="inscrip">
            Connexion
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
