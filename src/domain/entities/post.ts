import { PostAPIData } from "../../infraestructure/interfaces/post-api-data";

class Post {
  readonly id: string;
  readonly mediaType: string;
  readonly mediaURL: string;
  readonly permalink: string;

  private constructor(
    id: string,
    mediaType: string,
    mediaURL: string,
    permalink: string
  ) {
    this.id = id;
    this.mediaType = mediaType;
    this.mediaURL = mediaURL;
    this.permalink = permalink;
  }

  static converterAPIData(data: PostAPIData[]): Post[] {
    return data.map(
      (postAPI) =>
        new Post(
          postAPI.id,
          postAPI.media_type,
          postAPI.media_url,
          postAPI.permalink
        )
    );
  }
}

export default Post;
