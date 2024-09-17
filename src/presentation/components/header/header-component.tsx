import React, { useState } from "react";
import "./styles/header-component.css";
import { Logos } from "../../../application/assets/logos/logos";

const HeaderComponent = () => {
  // States

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClicked = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Render

  return (
    <div className="hero-container">
      <img
        className="menu-icon"
        src={Logos.menu}
        alt="Menu Icon"
        onClick={onMenuClicked}
      />

      {isMenuOpen && (
        <div className={`header-menu ${isMenuOpen ? "open" : ""}`} onClick={onMenuClicked}>
          <ul>
            <li>
              <a href="#section1">Home</a>
            </li>
            <li>
              <a href="#section2">About</a>
            </li>
            <li>
              <a href="#section3">Services</a>
            </li>
            <li>
              <a href="#section4">Contact</a>
            </li>
          </ul>
        </div>
      )}

      <div className="logo-center">
        <img src={Logos.logoHeader} alt="La Granja d'Escarp Logo" />
      </div>
    </div>
  );
};

export default HeaderComponent;
