// imports
import { IsNotEmpty } from 'class-validator'

// export update dto class
export class UpdatePostDto {
    @IsNotEmpty()
    post_id: string | number

    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    key: string | number
}