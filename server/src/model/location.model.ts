import mongoose from 'mongoose'

const LocationSchema = new mongoose.Schema({
    name: String,
    location: { lat: Number, lng: Number },
    description: String,
    rating: Number,
    img: String
})

export const Location = mongoose.model('location', LocationSchema, 'location')