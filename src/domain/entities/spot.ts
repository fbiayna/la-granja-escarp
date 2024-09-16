import { SpotEnum } from "../interfaces/spot.enum";

class Spot {
  constructor(
    readonly id: SpotEnum,
    readonly title: string,
    readonly descriptions: string[],
    readonly logo: string,
    readonly logoTitle: string,
    readonly image: string,
    readonly color: string,
    readonly moreInfo?: string,
    readonly extraInfo?: string
  ) {}
}

export default Spot;
