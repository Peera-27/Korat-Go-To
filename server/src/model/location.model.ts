import mongoose from "mongoose"
import { Ilocationdocument, Ilocationmodel } from "../interface/location.interface"
import { location } from "../type/location.type"

const schema = new mongoose.Schema({
    id: { type: String },
    name: { type: String },
    description: { type: String },
    rating: { type: Number },
    image: { type: String }
})

schema.methods.tolocation = function (): location {
    return {
        id: this._id.toString(),
        name: this.name,
        description: this.description,
        rating: this.rating,
        image: this.image
    }
}
export const Location = mongoose.model<Ilocationdocument, Ilocationmodel>("Location", schema, "location")
console.log("📌 Mongoose Collection Name:", Location.collection.name)
