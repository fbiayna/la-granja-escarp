import Spot from "../../../../domain/entities/spot";

export type SpotComponentProps = {
  firstItem?: boolean;
  lastItem?: boolean;
  previousItemColor?: string;
} & Spot;
