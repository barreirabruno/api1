/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async addMeterPrice (): Promise<void> {
    if (!this.client?.isConnected()) {
      await this.connect(this.url)
    }
    const collection = this.client.db().collection('meter-prices')
    collection.insertOne({
      district: 'any_location',
      price: 'any_price'
    })
  },

  async disconnect () {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: collection._id })
  }
}
