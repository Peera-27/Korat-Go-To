import Elysia from "elysia"
import { Location } from "../model/location.model"

export const locationcontroller = new Elysia()
    .get('/location', async ({ set }) => {
        try {
            const locations = await Location.find()
            if (!locations.length) {
                set.status = 404
                return { message: "No locations found" }
            }
            set.status = 200
            return locations
        } catch (error) {
            set.status = 400
            throw new Error("Something ผิดปกติ  🥵")
        }

    }, {
        detail: {
            tags: ["Location"],
            summary: "get location",
            description: "get location form mongoDB"
        }
    })

