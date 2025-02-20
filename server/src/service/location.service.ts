import { Location } from "../model/location.model"
import { location } from "../type/location.type"

export const LocationService = {
    getlocation: async (locationname: string): Promise<location> => {
        const decodedLocationName = decodeURIComponent(locationname) // ✅ Decode ก่อนใช้
        console.log("🛠 Decoded Location Name:", decodedLocationName) // Debug log

        const location = await Location.findOne({ name: decodedLocationName }).exec()
        console.log("🛑 Found Location:", location) // Debug output

        if (location) {
            return location.tolocation()
        }
        throw new Error(`${decodedLocationName} not found`)
    }
}
