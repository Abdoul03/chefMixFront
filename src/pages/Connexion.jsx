import { NavLink, useNavigate } from "react-router-dom";
import "../style/conn.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Connexion = () => {
  const [telephone, setTelephone] = useState("");
  const [password, setPassWord] = useState("");
  const [chefs, setChefs] = useState([]);
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
        setChefs(res.data.cuisinier);
        console.log(chefs);
        // navigate("/ChefPages", { replace: true, state: { chefs } });
      })
      .catch((error) => {
        alert("Erreur de Connection");
        console.log(error);
      });
  };

  useEffect(() => {
    // Vérifier si chefs contient des données
    if (chefs.length > 0) {
      // Déclencher la navigation vers ChefPages
      navigate("/ChefPages", { replace: true, state: { chefs } });
    }
  }, [chefs, navigate]);
  return (
    <div>
      <NavLink to="/" className="p ml-6 mt-6">
        chefMix
      </NavLink>
      <div className="frm_body">
        <form onSubmit={handelSubmit}>
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
            Vous n&apos;savez pas de compte ?{" "}
            <NavLink to="/inscription">Inscrivez-vous</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Connexion;
