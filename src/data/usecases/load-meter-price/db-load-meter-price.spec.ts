import { mockMeterPrice } from '../../../domain/models/mocks/mock-meter-price'
import { DbMeterPrice } from './db-load-meter-price'
import { MeterPriceModel } from '../../../domain/models/meter-price'
import { LoadMeterPriceRepository } from '../../protocols/meter-price/load-meter-price-repository'

const makeMeterPriceRepository = (): LoadMeterPriceRepository => {
  class LoadMeterPriceRepositoryStub implements LoadMeterPriceRepository {
    async loadMeterPrice (): Promise<MeterPriceModel> {
      return await new Promise(resolve => resolve(mockMeterPrice()))
    }
  }

  return new LoadMeterPriceRepositoryStub()
}

describe('DbMeterPrice usecases', () => {
  test('Should return a meter price on success', async () => {
    const sut = new DbMeterPrice(makeMeterPriceRepository())
    const loadMeterPrice = await sut.load()
    expect(loadMeterPrice).toEqual(mockMeterPrice())
  })
})
