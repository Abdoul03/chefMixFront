import "../style/header.css";
import { useState } from "react";
// import { MenuRounded } from "@mui/icons-material";

const Header = () => {
  //change color on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 60) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "connect-scroll" : "contener"}>
      <div className="logo">
        {/* <MenuRounded fontSize="large" /> */}
        <p>chefMix</p>
      </div>
    </div>
  );
};

export default Header;
