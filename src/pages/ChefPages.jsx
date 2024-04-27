/* eslint-disable react/prop-types */
// import axios from "axios";
// import { useEffect, useState } from "react";

const ChefPages = ({ chefs }) => {
  // const [nom, setNom] = useState("");
  // const [prenom, setPrenom] = useState("");
  // const [email, setEmail] = useState("");
  // const [adresse, setAdresse] = useState("");
  // const [telephone, setTelephone] = useState("");
  // const [profil, setProfil] = useState("");
  // const [chefs, setChefs] = useState([]);
  // const { id } = useParams();
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/chef/`)
  //     .then((res) => {
  //       setChefs(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <>
      {chefs.map((chef) => (
        <div
          className="flex flex-col border-2 border-white rounded-xl"
          key={chef.id}
        >
          <h1>Bienvenue {chef.prenom}</h1>
          <div className="profil">{chef.profil}</div>
          <div className="flex flex-row my-4 ">
            <span className="text-center text-gray-700 text-2xl">
              {chef.prenom}
            </span>
            <span className="text-center text-gray-700 text-2xl">
              {chef.nom}
            </span>
            <span className="text-center text-gray-700 text-2xl">
              {chef.email}
            </span>
            <span className="text-center text-gray-700 text-2xl">
              {chef.adresse}
            </span>
            <span className="text-center text-gray-700 text-2xl">
              {chef.telephone}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChefPages;
