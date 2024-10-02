import React, { useContext } from "react";
import "./styles/moturisme-component.css";
import { ColorsPalette } from "../../utils/colors/palette";
import ButtonComponent from "../button/button-component";
import { Logos } from "../../../application/assets/logos/logos";
import { Images } from "../../../application/assets/images/images";
import AppStateContext from "../../../application/context/app-state.context";

const MoturismeComponent = () => {
  // Context

  const { isNotDesktop } = useContext(AppStateContext);

  // Render

  if (isNotDesktop) {
    return (
      <div
        id="moturisme"
        style={{ backgroundColor: ColorsPalette.softMistGray }}
        className="moturisme-container"
      >
        <img className="moturisme-logo" src={Logos.logoMoturisme} />
        <img className="moturisme-image" src={Images.moturisme} />
        <h2 className="moturisme-title">
          Descobreix la Granja d'Escarp sobre rodes!
        </h2>
        <p className="moturisme-description">
          Viu l'aventura del moturisme i explora els racons més encantadors del
          nostre poble. Gaudeix de rutes espectaculars, paisatges únics i
          l'hospitalitat de la nostra gent. La Granja d'Escarp t'ofereix una
          experiència inoblidable.
        </p>
        <ButtonComponent
          alternativeColor
          title={"Més informació"}
          url={"http://moturisme.com/"}
        />
      </div>
    );
  }

  return (
    <div
      id="moturisme"
      style={{ backgroundColor: ColorsPalette.softMistGray }}
      className="moturisme-container"
    >
      <div className="moturisme-image-container">
        <img className="moturisme-image" src={Images.moturisme} />
      </div>
      <div className="moturisme-separator"/>
      <div className="moturisme-content">
        <img className="moturisme-logo" src={Logos.logoMoturisme} />
        <h2 className="moturisme-title">
          Descobreix la Granja d'Escarp sobre rodes!
        </h2>
        <p className="moturisme-description">
          Viu l'aventura del moturisme i explora els racons més encantadors del
          nostre poble. Gaudeix de rutes espectaculars, paisatges únics i
          l'hospitalitat de la nostra gent. La Granja d'Escarp t'ofereix una
          experiència inoblidable.
        </p>
        <ButtonComponent
          alternativeColor
          title={"Més informació"}
          url={"http://moturisme.com/"}
        />
      </div>
    </div>
  );
};

export default MoturismeComponent;
