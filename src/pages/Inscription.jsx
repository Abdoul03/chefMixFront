import { NavLink, useNavigate } from "react-router-dom";
import "../style/Insc.css";
import { useState } from "react";
import axios from "axios";

const Inscription = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassWord] = useState("");
  const navigate = useNavigate();

  const handelSubmit = (event) => {
    event.preventDefault();
    const data = {
      nom,
      prenom,
      email,
      telephone,
      password,
    };

    axios
      .post("http://localhost:5000/utilisateur/inscriptionUser", data)
      .then(() => {
        alert("Vous vous etes inscrit aavec succes onnecter vous");
        navigate("/connexion");
      })
      .catch((error) => {
        alert("Une erreur ses produit lors de votre inscription");
        console.log(error);
      });
  };

  return (
    <div>
      <NavLink to="/" className="p ml-6 mt-6 ">
        chefMix
      </NavLink>
      <div className="frm_body">
        <form action="" method="post" onSubmit={handelSubmit}>
          <h2>INSCRIPTION</h2>
          <hr />
          <div className="form_bas">
            <div>
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                name="nom"
                id="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="prenom">Prenom</label>
              <input
                type="text"
                name="prenom"
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>
          </div>
          <label htmlFor="em">Email</label>
          <input
            type="email"
            name="email"
            id="em"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="telephone">Telephone</label>
          <input
            type="text"
            name="telephone"
            id="telephone"
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
          <input type="submit" value="s'inscrire" />
          <p>
            Vous avez deja un compte ?{" "}
            <NavLink to="/connexion">Se connecter</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
