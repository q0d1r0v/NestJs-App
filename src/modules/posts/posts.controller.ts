// imports
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common'
import { PostsService } from './posts.service';
import { CreatePostDto } from 'src/validations/posts/create-post-dto';
import { UpdatePostDto } from 'src/validations/posts/update-post.dto';
import { DeletePostDto } from 'src/validations/posts/delete-post.dto';

// use controller
@Controller('api')

// export posts controller class
export class PostsController {
    constructor(private readonly postsController: PostsService) { }

    @Post('/create-post')
    createPost(@Body() body: CreatePostDto) {
        return this.postsController.createPost(body)
    }

    @Get('/get-posts')
    getPosts() {
        return this.postsController.getPosts()
    }

    @Put('/update-post')
    updatePost(@Query() query: UpdatePostDto) {
        return this.postsController.updatePost(query)
    }

    @Delete('/delete-post')
    deletePost(@Query() query: DeletePostDto) {
        return this.postsController.deletePost(query)
    }
}