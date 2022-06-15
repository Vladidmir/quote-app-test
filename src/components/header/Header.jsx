import React from "react";
import spareChak from "../../assets/chack.png";
import "./header.scss";

const Header = ({ iconUrl }) => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__block">
          <img src={iconUrl || spareChak} alt="Chack Icon" />
          <span className="header__block-name">CHACK NORIS</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
