import { HttpRequest, HttpResponse } from '../../protocols/http'
import { success } from '../../helpers/httpHelper'
import { Controller } from '../../protocols/controller'

export class LoadMeterPriceController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    return success({
      district: 'any_district_name',
      price: 'any_price'
    })
  }
}
