import dotenv from 'dotenv'
import { MongoClient } from 'mongodb'
dotenv.config()

const uri = process.env.MONGO_URL

export const client = new MongoClient(uri)
const databaseName = 'clients'
const collectionName = 'counts'

export const extractCount = async () => {
  try {
    await client.connect()
    const database = client.db(databaseName)
    const counts = database.collection(collectionName)

    const countDocument = await counts.findOne({})
    return countDocument.count
  } finally {
  }
}

export const incrementCount = async (newCount: number) => {
  try {
    await client.connect()
    const database = client.db(databaseName)
    const counts = database.collection(collectionName)

    await counts.updateOne({}, { $set: { count: newCount } })
  } finally {
  }
}