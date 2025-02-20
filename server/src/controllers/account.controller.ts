import Elysia from "elysia"
import { jwtconfig } from "../config/jwt.config"
import { AccountDto } from "../type/account.type"
import { AccountService } from "../service/account.service"

export const AccountController = new Elysia({
    prefix: '/api/account',
    tags: ['Account'],
})
    .use(jwtconfig)
    .use(AccountDto)
    .post('/login', async ({ body, jwt, set }) => {
        try {
            const user = await AccountService.login(body)
            const token = await jwt.sign({ id: user.id })
            return { token, user }
        } catch (error) {
            set.status = 400
            if (error instanceof Error)
                throw new Error(error.message)
            set.status = 500
            throw new Error('Internal server error')


        }
    }, {

        description: { summary: 'login' },
        body: 'login',
        response: 'account',
    })
    .post('/register', async ({ body, jwt, set }) => {
        try {
            const user = await AccountService.createNewUser(body)
            const token = await jwt.sign({ id: user.id })
            return { token, user }
        } catch (error) {
            set.status = 400
            if (error instanceof Error)
                throw new Error(error.message)
            set.status = 500
            throw new Error('Something Went Wrong')
        }
    }, {
        beforeHandle: ({ body: { username, password }, set }) => {
            const usernameRegex = /^[a-zA-Z]{3,12}$/
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%^&*])[A-Za-z\d@!#$%^&*]{8,16}$/
            console.log(usernameRegex.test(username))
            console.log(passwordRegex.test(password))
            if (!usernameRegex.test(username) || !passwordRegex.test(password))
                set.status = 400
            throw new Error('Invalid username or password')

        },
        default: { summary: 'register' },
        body: 'register',
        response: 'account',
    })