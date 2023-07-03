// imports
import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

// use Module
@Module({
    imports: [],
    controllers: [PostsController],
    providers: [PostsService]
})
// export PostsModule class
export class PostsModule {}
