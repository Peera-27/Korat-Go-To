import { User } from "../model/user.model"
import { login, register, user } from "../type/account.type"

export const AccountService = {
    createNewUser: async function (registerData: register): Promise<user> {
        const user = await User.findOne({ username: registerData.username }).exec()
        if (user) {
            throw new Error(`${registerData.username} is already exist`)
        }
        const newUser = await User.creatUser(registerData) // <-- เช็คตรงนี้
        return newUser.toUser()
    }
    ,
    login: async function (loginData: login): Promise<user> {
        const user = await User.findOne({ username: loginData.username }).exec()
        if (!user) {
            throw new Error("User not found")

        }
        const verify = await user.verifyPassword(loginData.password)
        if (!verify) {
            throw new Error("Password is incorrect")
        }
        return user.toUser()
    }
}