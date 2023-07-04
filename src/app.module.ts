// imports
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import {AuthModule} from './modules/auth/auth.module'

// import middleware
import {AuthMiddleware} from './middleware/auth'
import { PostsModule } from './modules/posts/posts.module';

// use module
@Module({
  imports: [AuthModule, PostsModule],
})

// export App Module and use middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(AuthMiddleware).forRoutes('api')
  }
}
