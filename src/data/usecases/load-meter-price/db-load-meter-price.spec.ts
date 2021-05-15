import { mockMeterPrice } from '../../../domain/models/mocks/mock-meter-price'
import { DbMeterPrice } from './db-load-meter-price'
import { MeterPriceModel } from '../../../domain/models/meter-price'
import { LoadMeterPriceRepository } from '../../protocols/meter-price/load-meter-price-repository'

const makeMeterPriceRepository = (): LoadMeterPriceRepository => {
  class LoadMeterPriceRepositoryStub implements LoadMeterPriceRepository {
    async loadMeterPrice (): Promise<MeterPriceModel> {
      return await new Promise(resolve => resolve(mockMeterPrice()))
    }
  }

  return new LoadMeterPriceRepositoryStub()
}

interface SutTypes {
  sut: DbMeterPrice
  loadMeterPriceRepositoryStub: LoadMeterPriceRepository
}

const makeSut = (): SutTypes => {
  const loadMeterPriceRepositoryStub = makeMeterPriceRepository()
  const dbMeterPrice = new DbMeterPrice(loadMeterPriceRepositoryStub)
  return {
    sut: dbMeterPrice,
    loadMeterPriceRepositoryStub: loadMeterPriceRepositoryStub
  }
}

describe('DbMeterPrice usecases', () => {
  test('Should call meter price repository', async () => {
    const { sut, loadMeterPriceRepositoryStub } = makeSut()
    const spyMeterPrice = jest.spyOn(loadMeterPriceRepositoryStub, 'loadMeterPrice')
    await sut.load()
    expect(spyMeterPrice).toHaveBeenCalled()
  })
  test('Should throw if meter price repository throws', async () => {
    const { sut, loadMeterPriceRepositoryStub } = makeSut()
    jest.spyOn(loadMeterPriceRepositoryStub, 'loadMeterPrice').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const loadMeterPrice = sut.load()
    await expect(loadMeterPrice).rejects.toThrow()
  })
  test('Should return a meter price on success', async () => {
    const { sut } = makeSut()
    const loadMeterPrice = await sut.load()
    expect(loadMeterPrice).toEqual(mockMeterPrice())
  })
})
