import { t } from "elysia"

export const _location = t.Object({
    district: t.String(),
    location: t.String(),
    hotel: t.String(),
    restaurant: t.String(),
})