/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";

const ChefPages = (props) => {
  const location = useLocation();
  // console.log(location);

  return (
    <>
      <h1 className="text-2xl text-gray-700 text-center pt-5">
        Bienvenue {location.state.chefs.prenom} sur votre tableau de bord
      </h1>
    </>
  );
};

export default ChefPages;
