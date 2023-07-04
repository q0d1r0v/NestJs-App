// imports
import {Module} from '@nestjs/common'
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

// use module
@Module({
    imports: [],
    controllers: [PostsController],
    providers: [PostsService]
})

// export posts module class
export class PostsModule {}