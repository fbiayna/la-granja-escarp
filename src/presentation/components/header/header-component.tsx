import React, { useState } from "react";
import "./styles/header-component.css";
import { Logos } from "../../../application/assets/logos/logos";
import { HeaderComponentProps } from "./interfaces/header-component.props";

const HeaderComponent = (props: HeaderComponentProps) => {
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
        <div
          className={`header-menu ${isMenuOpen ? "open" : ""}`}
          onClick={onMenuClicked}
        >
          <ul>
            <li>
              <a href="#motius">Motius per a descobrir-nos</a>
            </li>
            {props.spots?.map((spot) => (
              <li>
                <a href={`#${spot.id}`}>{spot.title}</a>
              </li>
            ))}
            <li>
              <a href="#moturisme">Moturisme</a>
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
