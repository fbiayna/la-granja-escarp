import React, { useEffect, useState } from "react";
import { GetAllSpotsUseCase } from "../../application/useCases/getAllSpotsUseCase";
import { SpotRepository } from "../../infraestructure/spot.repository";
import Spot from "../../domain/entities/spot";
import SpotComponent from "../components/spot/spot-component";
import "./home.css";
import MoturismeComponent from "../components/moturisme/moturisme-component";
import LogoComponent from "../components/logo/logo-component";

const Home = () => {
  // Dependencies

  const useCases = {
    getSpots: new GetAllSpotsUseCase(new SpotRepository()),
  };

  // States

  const [spots, setSpots] = useState<Spot[]>();

  // Effects

  useEffect(() => {
    const loadedSpots = useCases.getSpots.getAll();
    setSpots(loadedSpots);
  }, []);

  // Render

  return (
    <div className="screen">
      <p>
        FLUIR v. intr. Moviment continu i sense impediments d'un element, ja
        sigui líquid, com l'aigua en un riu, o abstracte, com les idees en una
        conversa. En un context més figurat, "fluir" pot referir-se a una
        sensació de facilitat i harmonia en una situació, com quan les coses es
        desenvolupen de manera natural i sense esforç.
      </p>

      <p>Motius per a descobrir-nos</p>
      <p>
        Som un destí turístic sostenible i diversificat, on la natura, la
        cultura i l'hospitalitat es combinen per oferir experiències úniques i
        inoblidables. Amb un profund respecte per la nostra història i
        patrimoni, aspirem a preservar i compartir la riquesa del nostre entorn
        natural, des de l'encant de l'Aiguabarreig fins a la bellesa de la
        temporada de floració. Amb un enfocament en la sostenibilitat i la
        preservació del medi ambient, aspirem a ser un model de turisme
        responsable i inclusiu i a crear un impacte positiu a escala local,
        regional i internacional.
      </p>

      {spots?.map((spot) => (
        <LogoComponent
          key={spot.logo}
          logo={spot.logo}
          title={spot.logoTitle}
        />
      ))}

      {spots?.map((spot, index) => {
        const nextSpot = spots[index + 1];

        return (
          <SpotComponent
            key={spot.id}
            {...spot}
            firstItem={index === 0}
            lastItem={index + 1 === spots.length}
            nextItemColor={nextSpot?.color}
          />
        );
      })}

      <MoturismeComponent />
    </div>
  );
};

export default Home;
