import { MediaType } from "../../domain/interfaces/media-type.enum";

export interface PostAPIData {
  id: string;
  media_type: MediaType;
  media_url: string;
  permalink: string;
}
