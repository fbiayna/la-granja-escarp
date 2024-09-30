import React from "react";
import "./spot-component.css";
import { SpotComponentProps } from "./interfaces/spot-component.props";
import ButtonComponent from "../button/button-component";
import { ColorsPalette } from "../../utils/colors/palette";

const SpotComponent = (props: SpotComponentProps) => {
  // Styles properties

  const lastItemEllipseContainerBackground: React.CSSProperties | undefined =
    props.lastItem
      ? {
          background: `linear-gradient(to top, ${ColorsPalette.white} 50%, ${props.color} 50%)`,
        }
      : undefined;
  const ellipseContainerBackground: React.CSSProperties = {
    background: `linear-gradient(to top, ${props.color} 50%, ${props.firstItem ? ColorsPalette.white : props.previousItemColor} 50%)`,
  };
  const spotContainerBackground: React.CSSProperties = {
    backgroundColor: props.color,
  };

  // Render

  return (
    <div id={props.id}>
      <div className="ellipse-container" style={ellipseContainerBackground}>
        <div className="ellipse" />
      </div>
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
        <div style={{ height: "20px" }} />
        {props.moreInfo && (
          <ButtonComponent
            title={props.moreInfo.text}
            url={props.moreInfo.url}
          />
        )}
        {props.extraInfo && (
          <ButtonComponent
            title={props.extraInfo.text}
            url={props.extraInfo.url}
          />
        )}
      </div>
      {props.lastItem && (
        <div
          className="ellipse-container"
          style={lastItemEllipseContainerBackground}
        >
          <div className="ellipse" />
        </div>
      )}
    </div>
  );
};

export default SpotComponent;
