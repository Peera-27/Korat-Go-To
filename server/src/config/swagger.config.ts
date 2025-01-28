import swagger from "@elysiajs/swagger"

export const swaggerConfig = swagger({
    path: '/Korat-GoTo',
    documentation: {
        info: {
            title: "Korat Go-To API",
            version: "0.1"

        }
    }
})