// imports
import { Injectable } from '@nestjs/common'
import { prisma } from '../../../prisma-client/prisma'

// use injectable
@Injectable()

// export posts service class
export class PostsService {
    async createPost(body) {
        try {
            const {title, key} = body
            const post = await prisma.posts.create({
                data: {
                    title,
                    key
                }
            })
            return {
                post
            }
        } catch(e) {
            console.log(e)
        }
    }
    async getPosts() {
        try {
            const posts = await prisma.posts.findMany()

            return {
                posts
            }
        } catch(e) {
            console.log(e)
        }
    }
    async updatePost(query) {
        try {
            const {post_id, title, key} = query

            const post = await prisma.posts.update({
                where: {
                    id: ~~post_id,
                },
                data: {
                    title,
                    key
                }
            })

            return {
                post
            }
        } catch(e) {
            console.log(e)
        }
    }
    async deletePost(query) {
        try {
            const {post_id} = query

            const del = await prisma.posts.delete({
                where: {
                    id: ~~post_id
                }
            })

            return {
                del,
                message: "Post deleted!"
            }
        } catch(e) {
            console.log(e)
        }
    }
}