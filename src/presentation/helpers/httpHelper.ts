import { HttpResponse } from '../protocols/http'
import { ServerError } from '../errors/ServerError'

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack as string)
})
