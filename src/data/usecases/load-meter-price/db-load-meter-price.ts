/* eslint-disable @typescript-eslint/space-before-function-paren */
import { MeterPrice } from '../../../domain/usecases/meter-price'
import { MeterPriceModel } from '../../../domain/models/meter-price'
import { LoadMeterPriceRepository } from '../../protocols/meter-price/load-meter-price-repository'

export class DbMeterPrice implements MeterPrice {
  private readonly meterPriceRepository: LoadMeterPriceRepository

  constructor(meterPriceRepository: LoadMeterPriceRepository) {
    this.meterPriceRepository = meterPriceRepository
  }

  async load (): Promise<MeterPriceModel> {
    const meterPrice = await this.meterPriceRepository.loadMeterPrice()
    return meterPrice
  }
}
