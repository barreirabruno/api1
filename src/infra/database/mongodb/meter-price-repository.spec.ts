import { MongoHelper } from './helpers/mongo-helper'
import { MeterPriceMongoRepository } from './meter-price-repository'

describe('Meter price MongoDB repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string)
    await MongoHelper.addMeterPrice()
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should return a meter price on success', async () => {
    const sut = new MeterPriceMongoRepository()
    const meterPriceFromMongo = await sut.loadMeterPrice()
    expect(meterPriceFromMongo).toBeTruthy()
    expect(meterPriceFromMongo.id).toBeTruthy()
    expect(meterPriceFromMongo.district).toBe('any_location')
    expect(meterPriceFromMongo.price).toBe('any_price')
  })
})
