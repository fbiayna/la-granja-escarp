import React from "react";
import "./button-component.css";
import { ButtonComponentProps } from "./interfaces/button-component.props";
import { ColorsPalette } from "../../utils/colors/palette";

const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <button
      style={
        props.alternativeColor
          ? { color: ColorsPalette.black, borderColor: ColorsPalette.black }
          : undefined
      }
      className="button"
      onClick={props?.onClick}
    >
      {props.title}
    </button>
  );
};

export default ButtonComponent;
