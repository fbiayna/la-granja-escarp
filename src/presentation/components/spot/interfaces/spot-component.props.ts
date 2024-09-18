import MoreInfo from "../../../../domain/entities/more-info";

export type SpotComponentProps = {
  title: string;
  descriptions: string[];
  image: string;
  color: string;
  moreInfo?: MoreInfo;
  extraInfo?: MoreInfo;
  firstItem?: boolean;
  lastItem?: boolean;
  nextItemColor?: string;
};
