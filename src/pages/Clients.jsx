import google from "../assets/Google play.png";
import Apple from "../assets/AppStore.svg";
import "../style/client.css";

const Clients = () => {
  return (
    <div className="mb-6">
      <h2 className="t2"> Comment ca Marche ?</h2>
      <p className="client ">
        C&apos;est simple telecharger notre Application Gratuitement sur Google
        playStore ou sur AppStore inscrivez-vous, vous avez la possibilite de
        suivre un cuisinier d&apos;aimer un nourriture. Passer votre commande
        renseignez votre position et un livreur vous livrera votre commande.
      </p>
      <div className="stores mt-5">
        <img src={Apple} alt="AppStore" />
        <img src={google} alt="playStore" width="140px" />
      </div>
    </div>
  );
};

export default Clients;
