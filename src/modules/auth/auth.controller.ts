// imports
import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common'
import { AuthService } from './auth.service';
import { RegisterDto } from 'src/validations/auth/register-dto';
import { LoginDto } from 'src/validations/auth/login-dto';
import { Response } from 'express';

// use controller
@Controller('auth')

// export controller class
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/login')
    login(@Res({ passthrough: true }) response: Response, @Body() body: LoginDto) {
        return this.authService.login(body)
    }

    @Post('/register')
    register(@Body() body: RegisterDto) {
        return this.authService.register(body)
    }
}