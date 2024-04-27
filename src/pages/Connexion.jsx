import { NavLink, useNavigate } from "react-router-dom";
import "../style/conn.css";
import { useState } from "react";
import axios from "axios";
import * as jwt_decode from "jwt-decode";

const Connexion = () => {
  const [telephone, setTelephone] = useState("");
  const [password, setPassWord] = useState("");
  const [chefs, setChefs] = useState({});
  const navigate = useNavigate();

  const handelSubmit = (event) => {
    event.preventDefault();
    const data = {
      telephone,
      password,
    };
    axios
      .post("http://localhost:5000/chef/login", data)
      .then((res) => {
        alert("Connexion réussie");
        const token = res.data.token;
        // Décoder le token JWT pour obtenir les données utilisateur
        const decodedToken = jwt_decode(token);
        console.log(decodedToken);
        // Stocker les données utilisateur dans l'état du chef
        setChefs(decodedToken);
        navigate("/ChefPages", { chefs });
      })
      .catch((error) => {
        alert("Erreur de Connection");
        console.log(error);
      });
  };
  return (
    <div>
      <NavLink to="/" className="p ml-6 mt-6">
        chefMix
      </NavLink>
      <div className="frm_body">
        <form action="" method="post" onSubmit={handelSubmit}>
          <h2>CONNEXION</h2>
          <hr />
          <label htmlFor="tel">Telephone</label>
          <input
            type="tel"
            name="telephone"
            id="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
          <label htmlFor="psw">Mot de Passe</label>
          <input
            type="password"
            name="password"
            id="psw"
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
          />
          <input type="submit" value="Se connecter" />
          <p>
            Vous n&apos;savez pas un compte ?{" "}
            <NavLink to="/inscription">Inscrivez-vous</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Connexion;
