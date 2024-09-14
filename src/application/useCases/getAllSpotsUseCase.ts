import { SpotRepository } from "../../infraestructure/spot.repository";

export class GetAllSpotsUseCase {
  constructor(private readonly spotRepository: SpotRepository) {}

  getAll() {
    return this.spotRepository.getAll();
  }
}
