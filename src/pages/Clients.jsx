const Clients = () => {
  return (
    <div className="flex flex-col justify-center mt-70 bg-white">
      <div>
        <h2 className="text-center font-serif text-xl pt-5">
          {" "}
          Comment ca marche ?
        </h2>
        <p className="font-sans font-bold text-4xl text-orange-500">
          C&apos;est tres Simple !
        </p>
      </div>
      <div className="flex flex-row justify-between pt-20">
        <div>
          <div></div>
          <p className="font-semibold text-2xl">Indiquez nous ou vous etes</p>
          <span>
            Nous vous indiquerons les partenaires a proximite chez qui vous
            pouvez commander
          </span>
        </div>
        <div>
          <div></div>
          <p className="font-semibold text-2xl">
            Trouvez ce dont vous avez envie
          </p>
          <span>
            Cherchez par article ou repas, par partenaire ou type de cuisinie.
          </span>
        </div>
        <div>
          <div></div>
          <p className="font-semibold text-2xl">
            Commandez a livrer ou a emporter
          </p>
          <span>
            Nous vous tiendrons au courant du deroulement de votre commande.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Clients;
