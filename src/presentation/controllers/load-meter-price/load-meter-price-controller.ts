/* eslint-disable @typescript-eslint/space-before-function-paren */
import { HttpRequest, HttpResponse } from '../../protocols/http'
import { success, serverError } from '../../helpers/httpHelper'
import { Controller } from '../../protocols/controller'
import { MeterPrice } from '../../../domain/usecases/meter-price'

export class LoadMeterPriceController implements Controller {
  private readonly meterPrice: MeterPrice

  constructor(meterPrice: MeterPrice) {
    this.meterPrice = meterPrice
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const meterPrice = await this.meterPrice.load()
      return success(meterPrice)
    } catch (error) {
      return serverError(error)
    }
  }
}
