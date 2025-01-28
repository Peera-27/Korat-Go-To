import mongoose, { connect } from "mongoose"

const username = Bun.env.mongo_username || 'your-mongo-name'
const password = Bun.env.mongo_password || 'your-mongo-name'
const db_name = Bun.env.mongo_db_name || 'Korat_Go-To_App'

const url = `mongodb+srv://${username}:${password}@cluster0.okqlw.mongodb.net/?retryWrites=true&w=majority&appName=${db_name}`

export const Database = {
    connect: async function () {
        try {
            await mongoose.connect(url)
            console.log("-- MongoDB Connected 🥳 --")
        } catch (error) {
            console.error("-- MongoDB Can't Connected 🤕 --", error)
            console.error("Error : ", error)
        }
    }
}