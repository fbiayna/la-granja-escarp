import Spot from "../../../../domain/entities/spot";

export type SpotComponentProps = {
  index: number
  firstItem?: boolean;
  lastItem?: boolean;
  previousItemColor?: string;
} & Spot;
