import mongoose, { connect } from "mongoose"

const username = Bun.env.mongo_username || 'your-mongo-name'
const password = Bun.env.mongo_password || 'your-mongo-name'
const db_name = Bun.env.mongo_db_name || 'travel_app'



const _url = `mongodb+srv://${username}:${password}@cluster0.okqlw.mongodb.net/${db_name}?retryWrites=true&w=majority`


export const database = {
    connect: async function () {
        try {
            await mongoose.connect(_url)
            console.log("-- MongoDB Connected 🥳 --")
        } catch (error) {
            console.error("-- MongoDB Can't Connected 🤕 --", error)
            console.error("Error : ", error)
        }
    }
}