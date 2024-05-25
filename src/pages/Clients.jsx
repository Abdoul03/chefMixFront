import localisation from "../assets/localisation.jpg";
import commande from "../assets/food3.jpg";
import livre from "../assets/livre.jpg";

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
        <div className="ml-5">
          <div>
            <img src={localisation} alt="" className="w-32 h-32" />
          </div>
          <p className="font-bold text-xl">Indiquez nous ou vous etes</p>
          <span className="text-xs">
            Nous vous indiquerons les partenaires a proximite chez qui vous
            pouvez commander
          </span>
        </div>
        <div>
          <div>
            <img src={commande} alt="" className="w-32 h-36" />
          </div>
          <p className="font-bold text-xl">Trouvez ce dont vous avez envie</p>
          <span className="text-xs">
            Cherchez par article ou repas, par partenaire ou type de cuisinie.
          </span>
        </div>
        <div>
          <div>
            <img src={livre} alt="" className="w-32 h-32" />
          </div>
          <p className="font-bold text-xl">Commandez a livrer ou a emporter</p>
          <span className="text-xs">
            Nous vous tiendrons au courant du deroulement de votre commande.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Clients;
