import { LoadMeterPriceController } from './load-meter-price-controller'
import { success, serverError } from '../../helpers/httpHelper'
import { MeterPrice } from '../../../domain/usecases/meter-price'
import { MeterPriceModel } from '../../../domain/models/meter-price'
import { mockMeterPrice } from '../../../domain/models/mocks/mock-meter-price'

const makeMeterPrice = (): MeterPrice => {
  class MeterPriceStub implements MeterPrice {
    async load (): Promise<MeterPriceModel> {
      return {
        id: 'any_id',
        district: 'any_district_name',
        price: 'any_price'
      }
    }
  }

  return new MeterPriceStub()
}

interface SutTypes {
  meterPriceStub: MeterPrice
  loadMeterPriceController: LoadMeterPriceController
}

const makeSut = (): SutTypes => {
  const meterPrice = makeMeterPrice()
  const sut = new LoadMeterPriceController(meterPrice)
  return {
    meterPriceStub: meterPrice,
    loadMeterPriceController: sut
  }
}

describe('Load meters price controller', () => {
  test('Should return 500 if meter price load fails', async () => {
    const { loadMeterPriceController, meterPriceStub } = makeSut()
    jest.spyOn(meterPriceStub, 'load').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpResponse = await loadMeterPriceController.handle({})
    expect(httpResponse).toEqual(serverError(new Error()))
  })
  test('Should return 200 on success', async () => {
    const { loadMeterPriceController } = makeSut()
    const httpResponse = await loadMeterPriceController.handle({})
    expect(httpResponse).toEqual(success(mockMeterPrice()))
  })
})
