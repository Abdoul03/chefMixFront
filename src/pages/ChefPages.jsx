/* eslint-disable react/prop-types */
// import { useLocation } from "react-router-dom";

const ChefPages = ({ location }) => {
  // const { chefs } = location.state;
  const { nom, prenom, email, adresse, telephone } = location.state.chefs;

  return (
    <>
      <h1>{nom}</h1>
    </>
  );
};

export default ChefPages;
