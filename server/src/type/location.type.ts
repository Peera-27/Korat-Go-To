import Elysia, { Static, t } from "elysia"

export const _location = t.Object({
    id: t.String(),
    name: t.String(),
    description: t.String(),
    rating: t.Number(),
    image: t.String()

})
export const LocationDTO = new Elysia().model({
    location: _location
})

export type location = Static<typeof _location>