import Elysia, { t } from "elysia"

export const examplecontroll = new Elysia()
    .get('/home', () => "Hello Korat Go-To 1", {
        detail: {
            tags: ["Example"],
            summary: "Get Hello Korat Go-to",
            description: "This web site for test"
        }
    })
    .post("/about", ({ body }) => {
        return {
            id: 'xxx',
            msg: 'hello' + body.name
        }
    }, {
        body: t.Object({
            name: t.String(),
        }),
        detail: {
            tags: ["Example"],
            summary: "About",
            description: "Test"
        }
    })