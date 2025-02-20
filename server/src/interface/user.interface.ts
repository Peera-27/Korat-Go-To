import mongoose from "mongoose"
import { register, user } from "../type/account.type"

type userwithoutId = Omit<user, 'id'>
export interface IuserDoc extends mongoose.Document, userwithoutId {
    password_hash: string
    verifyPassword: (password: string) => Promise<boolean>
    toUser: () => user
}
export interface IuserDocModel extends mongoose.Model<IuserDoc> {
    creatUser: (registerData: register) => Promise<IuserDoc>
}