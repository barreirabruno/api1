import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/database/mongodb/helpers/mongo-helper'

describe('Meter price route', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string)
    await MongoHelper.addMeterPrice()
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should return a meter price on success', async () => {
    await request(app)
      .get('/api/meter-price')
      .expect(200)
  })
})
