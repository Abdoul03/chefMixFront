const Connexion = () => {
  return (
    <div>
      <form action="connection" className="form">
        <h2>Connection</h2>
        <label htmlFor="teel">Telephone</label>
        <input type="tel" name="telephone" id="teel" />
        <br />
        <label htmlFor="psw">Mot de passe</label>
        <input type="password" name="password" id="psw" />
        <br />
        <button>Se connecter</button>
      </form>
    </div>
  );
};

export default Connexion;
