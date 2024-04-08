import { NavLink } from "react-router-dom";
import "../style/conn.css";

const Connexion = () => {
  return (
    <div>
      <NavLink to="/" className="p ml-6 mt-6">
        chefMix
      </NavLink>
      <div className="frm_body">
        <form action="" method="post">
          <h2>CONNEXION</h2>
          <hr />
          <div className="form_bas">
            <div>
              <label htmlFor="nom" className="ind">
                Indicatif
              </label>
              <input type="tel" name="nom" id="Nom" />
            </div>
            <div>
              <label htmlFor="tel">Telephone</label>
              <input type="tel" name="telephone" id="tel" />
            </div>
          </div>
          <label htmlFor="psw">Mot de Passe</label>
          <input type="password" name="password" id="psw" />
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
