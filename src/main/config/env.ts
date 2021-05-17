export default {
  port: process.env.PORT ?? 3333,
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://mongo:27017/in-gaia-mongodb'
}
