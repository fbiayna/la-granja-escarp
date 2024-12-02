import { Observable } from "rxjs";
import { InstagramRepository } from "../../infraestructure/instagram.repository";
import Post from "../../domain/entities/post";

export class GetPostsFromUserIdUseCase {
  constructor(private readonly instagramRepository: InstagramRepository) {}

  getPostsFromUserId(): Observable<Post[]> {
    return this.instagramRepository.getPostsFromUserId();
  }
}
