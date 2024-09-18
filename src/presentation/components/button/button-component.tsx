import React from "react";
import "./button-component.css";
import { ButtonComponentProps } from "./interfaces/button-component.props";
import { ColorsPalette } from "../../utils/colors/palette";

const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <button
        style={
          props.alternativeColor
            ? { color: ColorsPalette.black, borderColor: ColorsPalette.black }
            : undefined
        }
        className="button"
      >
        {props.title}
      </button>
    </a>
  );
};

export default ButtonComponent;
