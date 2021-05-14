import { mockMeterPrice } from '../../../domain/models/mocks/mock-meter-price'
import { DbMeterPrice } from './db-load-meter-price'

describe('DbMeterPrice usecases', () => {
  test('Should return a meter price on success', async () => {
    const sut = new DbMeterPrice()
    const loadMeterPrice = await sut.load()
    expect(loadMeterPrice).toEqual(mockMeterPrice())
  })
})
