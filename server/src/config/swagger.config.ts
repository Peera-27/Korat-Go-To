import swagger from "@elysiajs/swagger"

export const swaggerConfig = swagger({
    path: '/api',
    documentation: {
        info: {
            title: "Korat Go-To API",
            version: "0.1"

        }
    }
})