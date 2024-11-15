import axios from "axios";
import { Observable } from "rxjs";
import Post from "../domain/entities/post";

export class InstagramRepository {
  getPostsFromUserId(): Observable<Post[]> {
    return new Observable((subscriber) => {
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${location.hostname === "localhost" ? "http://localhost:3000" : "https://la-granja-escarp-be.onrender.com"}/instagram-api`,
        headers: {},
      };

      axios
        .request(config)
        .then((response) => {
          if (response.data) {
            const posts = Post.converterAPIData(response.data.data);
            subscriber.next(posts);
            subscriber.complete();
          } else {
            subscriber.error("There is no post data from API");
          }
        })
        .catch((error) => {
          subscriber.error(error);
        });
    });
  }
}
