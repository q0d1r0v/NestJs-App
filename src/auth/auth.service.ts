// imports
import { Injectable } from '@nestjs/common'

// use Injectable
@Injectable()

// export class service
export class AuthService {
    login() {
        return {
            message: "This is LOGIN"
        }
    }

    register() {
        return {
            message: "This is REGISTER"
        }
    }
}
