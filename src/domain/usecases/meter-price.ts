import { MeterPriceModel } from '../models/meter-price'

export interface MeterPrice {
  load: () => Promise<MeterPriceModel>
}
