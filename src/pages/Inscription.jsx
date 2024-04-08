import "../style/Insc.css";

const Inscription = () => {
  return (
    <div className="frm_body">
      <form action="" method="post">
        <h2>INSCRIPTION</h2>
        <hr />
        <div className="form_bas">
          <div>
            <label htmlFor="nom">Nom</label>
            <input type="text" name="nom" id="Nom" />
          </div>
          <div>
            <label htmlFor="prenom">Prenom</label>
            <input type="text" name="prenom" id="prenom" />
          </div>
        </div>
        <label htmlFor="em">Email</label>
        <input type="email" name="email" id="em" />
        <label htmlFor="telephone">Telephone</label>
        <input type="text" name="telephone" id="telephone" />
        <label htmlFor="psw">Mot de Passe</label>
        <input type="password" name="password" id="psw" />
        <input type="submit" value="s'inscrire" />
        <p>Vous avez deja un compte ?</p>
      </form>
    </div>
  );
};

export default Inscription;
