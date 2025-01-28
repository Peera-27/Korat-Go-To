import jwt from "@elysiajs/jwt"

export const jwtconfig = jwt({
    name: 'jwt',
    secret: process.env.JWT_SECRET || 'your-secert',
    exp: '100d'
})