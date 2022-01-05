import React from "react";

import Logo from "../../assets/M.png";
import "./styles.css";

const Header = () => {
  
  return (
    <div className="header">
      <div className="headerLogo">
        <img id="logo" src={Logo} alt="Logo Meta Team" />
        <p id="menuTitle">eta Team</p>
      </div>
      <h1 className="headerTitle">Notícias Tec</h1>
    </div>
  );
};

export default Header;
