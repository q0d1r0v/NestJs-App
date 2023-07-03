// imports
import { Injectable } from "@nestjs/common";

// use Injectable
@Injectable()

// export class service
export class PostsService {
    getPosts() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'Post 1',
                    key: 'post_one'
                },
                {
                    id: 2,
                    title: 'Post 2',
                    key: 'post_two'
                }
            ]
        }
    }
}