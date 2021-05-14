import { MeterPriceModel } from '../../../domain/models/meter-price'

export interface LoadMeterPriceRepository {
  loadMeterPrice: () => Promise<MeterPriceModel>
}
