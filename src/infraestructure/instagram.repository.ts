import axios from "axios";
import { Observable } from "rxjs";
import Post from "../domain/entities/post";

export class InstagramRepository {
  getPostsFromUserId(): Observable<Post[]> {
    return new Observable((subscriber) => {
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://graph.instagram.com/v21.0/17841445304880840/media?access_token=IGQWROWE9BZAVNPUWpnbmpRdnlReDB1aDdfemRfdHpKR1RrNmpiRUplLWJjUjQyRlNnMVRxcmMxSzZASNjRGWkFxaWhfSXpMNnVzYlFfMzZAjNWNoSi1yci1FOW1BaVdiOGdodllfSDBLWGJtXzdyUXBJOTRTZAXV5c0kZD&fields=id,media_type,media_url,permalink",
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
