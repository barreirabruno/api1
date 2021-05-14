import { HttpRequest, HttpResponse } from '../protocols/http'

interface Controller {
  handle: (httpRequest: HttpRequest) => HttpResponse
}

const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

const meterPriceFromDatabase = {
  district: 'any_district_name',
  price: 'any_price'
}

class LoadMeterPriceController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    return success(meterPriceFromDatabase)
  }
}

describe('Load meters price controller', () => {
  test('Should return 200 on success', () => {
    const sut = new LoadMeterPriceController()
    const httpResponse = sut.handle({})
    expect(httpResponse).toEqual(success(meterPriceFromDatabase))
  })
})
