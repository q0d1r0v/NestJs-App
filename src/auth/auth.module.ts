// imports
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

// use module
@Module({
    imports: [],
    controllers: [AuthController],
    providers: [AuthService]
})

// export Auth Module
export class AuthModule {}
