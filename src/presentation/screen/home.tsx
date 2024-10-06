import React, { useContext, useEffect, useState } from "react";
import { GetAllSpotsUseCase } from "../../application/useCases/get-all-spots.use-case";
import { SpotRepository } from "../../infraestructure/spot.repository";
import Spot from "../../domain/entities/spot";
import SpotComponent from "../components/spot/spot-component";
import "./home.css";
import MoturismeComponent from "../components/moturisme/moturisme-component";
import LogoComponent from "../components/logo/logo-component";
import { Logos } from "../../application/assets/logos/logos";
import HeaderComponent from "../components/header/header-component";
import FooterComponent from "../components/footer/footer-component";
import AppStateContext from "../../application/context/app-state.context";
import { Helmet } from "react-helmet-async";
import { GetPostsFromUserIdUseCase } from "../../application/useCases/get-posts-from-user-id.use-case";
import { InstagramRepository } from "../../infraestructure/instagram.repository";
import Post from "../../domain/entities/post";
import { take } from "rxjs";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  // Context

  const { isNotDesktop } = useContext(AppStateContext);

  // Dependencies

  const useCases = {
    getSpots: new GetAllSpotsUseCase(new SpotRepository()),
    getPosts: new GetPostsFromUserIdUseCase(new InstagramRepository()),
  };

  // States

  const [spots, setSpots] = useState<Spot[]>();
  const [posts, setPosts] = useState<Post[]>();

  // Effects

  useEffect(() => {
    const loadedSpots = useCases.getSpots.getAll();
    setSpots(loadedSpots);

    useCases.getPosts
      .getPostsFromUserId()
      .pipe(take(1))
      .subscribe({
        next: (posts) => setPosts(posts),
        error: (error) => console.log(error),
      });
  }, []);

  // Render

  return (
    <div className="home-container">
      <Helmet>
        <title>La Granja d'Escarp · Turisme</title>
      </Helmet>

      <HeaderComponent spots={spots} />

      <h1 className="visually-hidden">La Granja d'Escarp · Turisme</h1>

      <div className="home-description-container">
        <p className="home-initial-description">
          <span className="home-subtitle">FLUIR</span>{" "}
          <span className="home-extrainfo">v. intr.</span> Moviment continu i
          sense impediments d'un element, ja sigui líquid, com l'aigua en un
          riu, o abstracte, com les idees en una conversa. En un context més
          figurat, "fluir" pot referir-se a una sensació de facilitat i harmonia
          en una situació, com quan les coses es desenvolupen de manera natural
          i sense esforç.
        </p>
      </div>

      <img className="home-image" src={Logos.waves} />

      <div id="motius" className="home-description-container">
        <h2 className="home-title">Motius per a descobrir-nos</h2>
        <p className="home-description">
          Som un destí turístic sostenible i diversificat, on la natura, la
          cultura i l'hospitalitat es combinen per oferir experiències úniques i
          inoblidables. Amb un profund respecte per la nostra història i
          patrimoni, aspirem a preservar i compartir la riquesa del nostre
          entorn natural, des de l'encant de l'Aiguabarreig fins a la bellesa de
          la temporada de floració. Amb un enfocament en la sostenibilitat i la
          preservació del medi ambient, aspirem a ser un model de turisme
          responsable i inclusiu i a crear un impacte positiu a escala local,
          regional i internacional.
        </p>
      </div>

      {isNotDesktop ? (
        <div className="home-logo-container">
          <div className="home-logo-grid">
            {spots?.map((spot) => (
              <LogoComponent
                key={spot.logo}
                logo={spot.logo}
                title={spot.logoTitle}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="home-logo-container">
          <div className="home-logo-grid">
            {spots
              ?.slice(0, 4)
              .map((spot) => (
                <LogoComponent
                  key={spot.logo}
                  logo={spot.logo}
                  title={spot.logoTitle}
                />
              ))}
          </div>
          <div className="home-logo-grid second-row">
            {spots
              ?.slice(4)
              .map((spot) => (
                <LogoComponent
                  key={spot.logo}
                  logo={spot.logo}
                  title={spot.logoTitle}
                />
              ))}
          </div>
        </div>
      )}

      {spots?.map((spot, index) => {
        const previousSpot = spots[index - 1];

        return (
          <SpotComponent
            key={spot.id}
            {...spot}
            index={index}
            firstItem={index === 0}
            lastItem={index + 1 === spots.length}
            previousItemColor={previousSpot?.color}
          />
        );
      })}

      {posts?.length ? (
        <Carousel>
          {posts.map((post) => (
            <img src={post.mediaURL} />
          ))}
        </Carousel>
      ) : null}

      <MoturismeComponent />

      <FooterComponent />
    </div>
  );
};

export default Home;
