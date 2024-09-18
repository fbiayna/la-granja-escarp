import { SpotEnum } from "../interfaces/spot.enum";
import MoreInfo from "./more-info";

class Spot {
  constructor(
    readonly id: SpotEnum,
    readonly title: string,
    readonly descriptions: string[],
    readonly logo: string,
    readonly logoTitle: string,
    readonly image: string,
    readonly color: string,
    readonly moreInfo?: MoreInfo,
    readonly extraInfo?: MoreInfo
  ) {}
}

export default Spot;
