import { Router } from 'express'

export default (router: Router): void => {
  router.get('/meter-price', (req, res) => {
    res.json({
      id: 'any_id',
      district: 'any_district',
      price: 'any_price'
    })
  })
}
