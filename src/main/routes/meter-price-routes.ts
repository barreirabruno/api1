import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapters'
import { makeLoadMeterPriceController } from '../factories/meter-price'

export default (router: Router): void => {
  router.get('/meter-price', adaptRoute(makeLoadMeterPriceController()))
}
