// imports
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';

// use module
@Module({
  imports: [AuthModule, PostsModule],
})

// export App Module
export class AppModule {}
