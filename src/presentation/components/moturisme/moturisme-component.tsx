import React from "react";
import "./styles/moturisme-component.css";
import { ColorsPalette } from "../../utils/colors/palette";
import ButtonComponent from "../button/button-component";
import { Logos } from "../../../application/assets/logos/logos";
import { Images } from "../../../application/assets/images/images";

const MoturismeComponent = () => {
  // Render

  return (
    <div
      style={{ backgroundColor: ColorsPalette.softMistGray }}
      className="moturisme-container"
    >
      <img className="moturisme-logo" src={Logos.logoMoturisme} />
      <img className="moturisme-image" src={Images.moturisme} />
      <p className="moturisme-title">
        Descobreix la Granja d'Escarp sobre rodes!
      </p>
      <p className="moturisme-description">
        Viu l'aventura del moturisme i explora els racons més encantadors del
        nostre poble. Gaudeix de rutes espectaculars, paisatges únics i
        l'hospitalitat de la nostra gent. La Granja d'Escarp t'ofereix una
        experiència inoblidable.
      </p>
      <ButtonComponent alternativeColor title={"Més informació"} />
    </div>
  );
};

export default MoturismeComponent;
