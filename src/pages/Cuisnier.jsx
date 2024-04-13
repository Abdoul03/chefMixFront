import Chef from "../assets/chef.svg";
import "../style/cuisinier.css";
const Cuisnier = () => {
  return (
    <div className="contener_flex flex flex-row justify-center mt-70 ml-20">
      <div className="left w-2/4 pt-0.5 pl-0.5 pb-25">
        <img src={Chef} alt="chef" />
      </div>
      <div className="rigth w-2/4 text-center mt-20 font-bold">
        <h2>Rejoindre notre Team de Cuisinier</h2>
        {/* <p>Pour ca c&espo;est </p> */}
        <p>
          Vous savez cuisinier ? Inscrivez-vous en tant que cuisinier et
          beneficier d&apos;une large game de possibilite sur la plateforme
          Gangne de l&apos;argent tout en exercant votre passion
        </p>
      </div>
    </div>
  );
};

export default Cuisnier;
