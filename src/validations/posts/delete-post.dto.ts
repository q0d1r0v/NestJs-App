// imports
import { IsNotEmpty } from 'class-validator'

// export delete post dto class
export class DeletePostDto {
    @IsNotEmpty()
    post_id: string
}