import { Elysia } from "elysia"
import { examplecontroll } from "./controllers/example.controller"
import { swaggerConfig } from "./config/swagger.config"
import { tlsConfig } from "./config/tls.config"
import cors from "@elysiajs/cors"
import { database } from "./config/database.config"
import { jwtconfig } from "./config/jwt.config"
import { locationcontroller } from "./controllers/location.controller"

database.connect()

const app = new Elysia()
  .use(examplecontroll)
  .use(locationcontroller)
  .use(swaggerConfig)
  .use(jwtconfig)
  .use(cors())



  .listen({
    port: Bun.env.PORT || 8000,
    tls: tlsConfig
  })
let protocol = 'http'
if ('cert' in tlsConfig)
  protocol = 'https'

console.log(`🥵  Elysia is running at ${protocol}://${app.server?.hostname}:${app.server?.port} 🥵`)