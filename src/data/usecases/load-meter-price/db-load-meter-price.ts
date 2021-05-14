import { MeterPrice } from '../../../domain/usecases/meter-price'
import { MeterPriceModel } from '../../../domain/models/meter-price'

export class DbMeterPrice implements MeterPrice {
  async load (): Promise<MeterPriceModel> {
    return await new Promise(resolve => resolve({
      id: 'any_id',
      district: 'any_district_name',
      price: 'any_price'
    }))
  }
}
