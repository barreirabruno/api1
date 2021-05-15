/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export default {
  port: process.env.PORT ?? 3333,
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:27017/in-gaia-banco'
}
