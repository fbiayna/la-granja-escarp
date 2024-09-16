import React from "react";
import "./spot-component.css";
import { SpotComponentProps } from "./interfaces/spot-component.props";
import ButtonComponent from "../button/button-component";
import { ColorsPalette } from "../../utils/colors/palette";

const SpotComponent = (props: SpotComponentProps) => {
  // Styles properties

  const firstItemEllipseContainerBackground: React.CSSProperties | undefined =
    props.firstItem
      ? {
          background: `linear-gradient(to top, ${props.color} 50%, ${ColorsPalette.white} 50%)`,
        }
      : undefined;
  const ellipseContainerBackground: React.CSSProperties = {
    background: `linear-gradient(to top, ${props.lastItem ? ColorsPalette.white : props.nextItemColor} 50%, ${props.color} 50%)`,
  };
  const spotContainerBackground: React.CSSProperties = {
    backgroundColor: props.color,
  };

  // Render

  return (
    <>
      {props.firstItem && (
        <div
          className="ellipse-container"
          style={firstItemEllipseContainerBackground}
        >
          <div className="ellipse" />
        </div>
      )}
      <div className="spot-container" style={spotContainerBackground}>
        <div className="spot-image-container">
          <img src={props.image} />
        </div>
        <p className="spot-title">{props.title}</p>
        <>
          {props.descriptions.map((description) => (
            <p className="spot-description" key={description}>
              {description === "<br />" ? <br /> : description}
            </p>
          ))}
        </>
        <div style={{ height: "15px" }} />
        {props.moreInfo && <ButtonComponent title={props.moreInfo} />}
        {props.extraInfo && <ButtonComponent title={props.extraInfo} />}
      </div>
      <div className="ellipse-container" style={ellipseContainerBackground}>
        <div className="ellipse" />
      </div>
    </>
  );
};

export default SpotComponent;
