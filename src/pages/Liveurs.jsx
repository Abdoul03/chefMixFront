import on_the_way from "../assets/on_the_way.svg";
import "../style/livre.css";

const Liveurs = () => {
  return (
    <div className="contener_flex flex flex-row justify-center mt-70 ml-20">
      <div className="left w-2/4 text-center font-bold">
        <h2>Nos Liveurs sont les plus rapide</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          molestias natus velit soluta culpa fugiat deleniti vero? Assumenda
          aliquid esse cum neque eveniet, quod eos accusantium blanditiis atque
        </p>
      </div>
      <div className="rigth  w-2/4 mb-0">
        <img src={on_the_way} alt="Liveur" />
      </div>
    </div>
  );
};

export default Liveurs;
