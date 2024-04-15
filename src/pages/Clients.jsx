// import google from "../assets/Google play.png";
// import Apple from "../assets/AppStore.svg";
import "../style/client.css";
import online from "../assets/online_groceries.svg";

const Clients = () => {
  return (
    <div className="contener_flex flex flex-row justify-center mt-70 ml-20">
      <div className="left w-2/4 text-center font-bold ml-5">
        <h2 className="t2"> Comment ca Marche ?</h2>
        <p>
          C&apos;est simple telecharger notre Application Gratuitement sur
          Google playStore ou sur AppStore inscrivez-vous, vous avez la
          possibilite de suivre un cuisinier d&apos;aimer un nourriture. Passer
          votre commande renseignez votre position et un livreur vous livrera
          votre commande.
        </p>
      </div>
      <div className="rigth w-2/4 pt-10 ">
        <img src={online} alt="App" className="app" />
        {/* <img src={Apple} alt="AppStore" />
        <img src={google} alt="playStore" width="140px" /> */}
      </div>
    </div>
  );
};

export default Clients;
