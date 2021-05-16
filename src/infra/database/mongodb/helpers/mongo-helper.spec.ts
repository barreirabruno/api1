import { MongoHelper as sut } from './mongo-helper'

describe('Mongo helper', () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL as string)
  })
  afterAll(async () => {
    await sut.disconnect()
  })
  test('Shoudl reconnect if mongodb is down', async () => {
    let meterPriceCollection = await sut.getCollection('meter-prices')
    expect(meterPriceCollection).toBeTruthy()
    await sut.disconnect()
    meterPriceCollection = await sut.getCollection('meter-prices')
    expect(meterPriceCollection).toBeTruthy()
  })
})
