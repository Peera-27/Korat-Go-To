import mongoose from "mongoose"
import { IuserDoc, IuserDocModel } from "../interface/user.interface"
import { register, user } from "../type/account.type"

const schema = new mongoose.Schema<IuserDoc, IuserDocModel>({
    username: { type: String, required: true },
    password_hash: { type: String, required: true },
    email: { type: String, required: true },
})

schema.methods.toUser = function (): user {
    return {
        id: this._id.toString(),
        username: this.username,
        email: this.email,
    }
}
schema.methods.verifyPassword = async function (password: string): Promise<boolean> {
    return await Bun.password.verify(password, this.password_hash)
}
schema.statics.creatUser = async function (registerData: register): Promise<IuserDoc> {

    const newUser = await new this({
        username: registerData.username,
        password_hash: await Bun.password.hash(registerData.password),
        email: registerData.email,
    })
    await newUser.save()
    return newUser
}
export const User = mongoose.model<IuserDoc, IuserDocModel>('User', schema)