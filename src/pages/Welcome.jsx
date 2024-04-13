import connecting_teams from "../assets/connecting_teams.svg";
import Header from "../components/Header";
import "../style/welcom.css";
import Clients from "./Clients";
import Cuisnier from "./Cuisnier";
import Liveurs from "./Liveurs";

export default function Welcome() {
  return (
    <div>
      <Header scroll={scroll} />
      <div className="cont flex flex-row justify-center h-full">
        <div className="left w-2/4 text-center ">
          <h2>
            Découvrez une expérience culinaire unique avec notre plateforme où
            vous pouvez explorer les créations de chefs talentueux, commander
            vos plats préférés et partager vos avis pour aider à mettre en
            lumière les meilleurs talents de la cuisine. Bienvenue sur notre
            site où la passion pour la gastronomie rencontre la commodité de la
            commande en ligne.
          </h2>
        </div>
        <div className="chef w-2/4 pt-0.5 pl-0.5">
          <img src={connecting_teams} alt="chef" />
        </div>
      </div>
      <Clients />
      <Cuisnier />
      <Liveurs />
    </div>
  );
}
