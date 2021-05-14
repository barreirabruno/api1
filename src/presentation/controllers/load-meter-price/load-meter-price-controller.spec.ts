import { LoadMeterPriceController } from './load-meter-price-controller'
import { success } from '../../helpers/httpHelper'
import { MeterPrice } from '../../../domain/usecases/meter-price'
import { MeterPriceModel } from '../../../domain/models/meter-price'
import { mockMeterPrice } from '../../../domain/models/mocks/mock-meter-price'

const makeMeterPrice = (): MeterPrice => {
  class MeterPriceStub implements MeterPrice {
    async load (): Promise<MeterPriceModel> {
      return await new Promise(resolve => resolve({
        id: 'any_id',
        district: 'any_district_name',
        price: 'any_price'
      }))
    }
  }

  return new MeterPriceStub()
}

describe('Load meters price controller', () => {
  test('Should return 200 on success', async () => {
    const sut = new LoadMeterPriceController(makeMeterPrice())
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(success(mockMeterPrice()))
  })
})
