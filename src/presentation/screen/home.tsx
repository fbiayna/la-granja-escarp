import React, { useEffect, useState } from "react";
import { GetAllSpotsUseCase } from "../../application/useCases/getAllSpotsUseCase";
import { SpotRepository } from "../../infraestructure/spot.repository";
import Spot from "../../domain/entities/spot";
import SpotComponent from "../components/spot/spot-component";
import "./home.css";

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
    </div>
  );
};

export default Home;
