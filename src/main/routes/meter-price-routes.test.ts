import request from 'supertest'
import app from '../config/app'

describe('Meter price route', () => {
  test('Should return a meter price on success', async () => {
    await request(app)
      .get('/api/meter-price')
      .expect(200)
  })
})
