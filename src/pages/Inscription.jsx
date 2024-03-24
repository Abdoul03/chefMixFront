const Inscription = () => {
  return (
    <div className="form">
      <form action="" method="post">
        <p>
          <label htmlFor="nom">Nom</label>
          <input type="text" name="nom" id="Nom" />
        </p>
        <p>
          <label htmlFor="prenom">Prenom</label>
          <input type="text" name="prenom" id="prenom" />
        </p>
        <p>
          <label htmlFor="telephone">Telephone</label>
          <input type="text" name="telephone" id="telephone" />
        </p>
      </form>
    </div>
  );
};

export default Inscription;
