// imports
import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service';

// use controller
@Controller('auth')

// export Auth Controller
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/login')
    login(@Body() body) {
        const { username, password } = body
        return this.authService.login()
    }

    @Post('/register')
    register() {
        return this.authService.register()
    }
}