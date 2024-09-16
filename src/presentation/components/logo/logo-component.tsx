import React from "react";
import "./styles/logo-component.css";
import { LogoComponentProps } from "./interfaces/logo-component.props";

const LogoComponent = (props: LogoComponentProps) => {
  // Render

  return (
    <div className="logo-container">
      <img src={props.logo} className="logo-image"/>
      <p className="logo-title">{props.title}</p>
    </div>
  );
};

export default LogoComponent;
