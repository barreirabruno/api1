import { LoadMeterPriceController } from './load-meter-price-controller'
import { success } from '../../helpers/httpHelper'

const meterPriceFromDatabase = {
  district: 'any_district_name',
  price: 'any_price'
}

describe('Load meters price controller', () => {
  test('Should return 200 on success', () => {
    const sut = new LoadMeterPriceController()
    const httpResponse = sut.handle({})
    expect(httpResponse).toEqual(success(meterPriceFromDatabase))
  })
})
