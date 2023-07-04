// imports
import { IsNotEmpty } from 'class-validator'

// export create post dto class
export class CreatePostDto {
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    key: string | number
}