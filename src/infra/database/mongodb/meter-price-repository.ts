import { LoadMeterPriceRepository } from '../../../data/protocols/meter-price/load-meter-price-repository'
import { MeterPriceModel } from '../../../domain/models/meter-price'
import { MongoHelper } from './helpers/mongo-helper'

export class MeterPriceMongoRepository implements LoadMeterPriceRepository {
  async loadMeterPrice (): Promise<MeterPriceModel> {
    const meterPriceCollection = await MongoHelper.getCollection('meter-prices')
    const meterPrice = await meterPriceCollection.findOne({ district: 'any_location' })
    return MongoHelper.map(meterPrice)
  }
}
