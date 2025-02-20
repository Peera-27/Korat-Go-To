import Elysia from "elysia"
import { LocationDTO } from "../type/location.type"
import { LocationService } from "../service/location.service"
export const LocationController = new Elysia({
    prefix: "/api/location",
    tags: ["location"]
})
    .use(LocationDTO)
    .get('/:locationname', ({ params: { locationname } }) => {
        console.log("🛠 API Received:", locationname)
        return LocationService.getlocation(locationname)
    }, {
        detail: { summary: "Get location By Username" },
        response: "location",
        isSignIn: true

    })