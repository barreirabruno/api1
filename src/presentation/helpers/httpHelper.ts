import { HttpResponse } from '../protocols/http'

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
