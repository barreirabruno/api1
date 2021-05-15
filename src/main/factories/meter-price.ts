import { LoadMeterPriceController } from '../../presentation/controllers/load-meter-price/load-meter-price-controller'
import { DbMeterPrice } from '../../data/usecases/load-meter-price/db-load-meter-price'
import { MeterPriceMongoRepository } from '../../infra/database/mongodb/meter-price-repository'

export const makeLoadMeterPriceController = (): LoadMeterPriceController => {
  const meterPriceRepository = new MeterPriceMongoRepository()
  const dbMeterPrice = new DbMeterPrice(meterPriceRepository)
  return new LoadMeterPriceController(dbMeterPrice)
}
