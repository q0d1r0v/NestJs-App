// imports
import { IsNotEmpty } from 'class-validator'

// export register dto class
export class RegisterDto {
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    full_name: string

    @IsNotEmpty()
    password: string | number
}