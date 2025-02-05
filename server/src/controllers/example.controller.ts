import Elysia, { t } from "elysia"
import mongoose from "mongoose"
export const examplecontroll = new Elysia()
    .get('/home', () => "Hello Korat Go-To 1", {
        detail: {
            tags: ["Test Get String"],
            summary: "Get Hello Korat Go-to",
            description: "This web site for test"
        }
    })
    .post("/about", ({ body }) => {
        return {
            id: 0,
            msg: 'hello ' + body.name
        }
    }, {
        body: t.Object({
            name: t.String(),
        }),
        detail: {
            tags: ["Test"],
            summary: "About",
            description: "Test"
        }
    })