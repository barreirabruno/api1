import { HttpRequest, HttpResponse } from '../protocols/http'
import { Controller } from '../protocols/controller'

const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export class LoadMeterPriceController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    return success({
      district: 'any_district_name',
      price: 'any_price'
    })
  }
}
