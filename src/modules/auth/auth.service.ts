// imports
import { Injectable } from '@nestjs/common'
import { prisma } from '../../../prisma-client/prisma'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

// use injectable
@Injectable()

// export service class
export class AuthService {
    async login(body) {
        try {
            const { username, password } = body
            const user = await prisma.users.findUnique({
                where: {
                    username
                }
            })

            const boo = await bcrypt.compare(password, user?.hash_password || '')
            if (boo && user.id) {
                const access_token = await jwt.sign(user, process.env.JWT_KEY, {
                    expiresIn: '24h'
                })
                return {
                    access_token
                }
            } else {
                return {
                    message: "Username or password is incorrect!"
                }
            }

        } catch (e) {
            console.log(e)
        }
    }
    async register(body) {
        try {
            const { username, full_name, password } = body
            const hashed_password = await bcrypt.hash(password, 10)
            const user = await prisma.users.create({
                data: {
                    username,
                    full_name,
                    hash_password: hashed_password
                }
            })
            delete user.hash_password
            return {
                message: "User created!",
                user
            }
        } catch (e) {
            return {
                message: "Username is unique!",
            }
        }
    }
}