import mongoose from "mongoose"
import { location } from "../type/location.type"

type locationwithoutid = Omit<location, 'id'>
export interface Ilocationdocument extends mongoose.Document, locationwithoutid {
    tolocation: () => location
}
export interface Ilocationmodel extends mongoose.Model<Ilocationdocument> {
}