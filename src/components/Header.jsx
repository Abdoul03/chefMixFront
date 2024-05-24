import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between fixed top-0 left-0 w-full transition h-16 bg-gray-100">
      <div className="flex justify-around ml-5">
        <NavLink to="/" className="text-3xl font-bold pt-4 text-gray-700">
          ChefMix
        </NavLink>
      </div>
      <div className="mt-4 mr-12">
        <nav className="flex gap-4 pr-4 pb-4 text-2xl">
          <NavLink
            to="/inscription"
            className="border-2 border-solid border-orange-300 font-serif font-semibold bg-white text-xl rounded-3xl text-gray-700"
          >
            Inscription
          </NavLink>
          <NavLink
            to="/connexion"
            className="border-2 border-solid border-orange-300 font-serif font-semibold bg-white text-xl rounded-3xl text-gray-700"
          >
            Connexion
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
