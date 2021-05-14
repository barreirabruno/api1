import { HttpResponse } from '../protocols/http'
import { LoadMeterPriceController } from './load-meter-price-controller'

const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

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
