import connecting_teams from "../assets/connecting_teams.svg";
import Header from "../components/Header";
import Clients from "./Clients";

export default function Welcome() {
  return (
    <div>
      <Header />
      <div className="flex flex-row justify-center pt-16 ">
        <div className="w-2/4 bg-gray-100 pt-28">
          <p className="font-extrabold text-gray-700 text-4xl text-center">
            Commandez des repas <br />
            <span className="font-semibold text-gray-700 text-2xl text-center">
              Au Restaurant qui livrent pres de vous.
            </span>
          </p>
        </div>
        <div className="w-2/4 bg-orange-400">
          <img src={connecting_teams} alt="chef" />
        </div>
      </div>
      <Clients />
    </div>
  );
}
