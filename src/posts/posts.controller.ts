import { PostsService } from './posts.service';
// imports
import {Controller, Get} from '@nestjs/common'

// use Controller
@Controller('api')

// export Posts class
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get('/get-posts')
    getPosts() {
        return this.postsService.getPosts()
    }
}