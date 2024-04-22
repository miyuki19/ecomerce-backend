'use strict'

const mongoose = require('mongoose')

const connectString = `mongodb://localhost:27017/myshop`

class Database {
  constructor() {
    this.connect()
  }

  connect() {
    if (true) {
      mongoose.set('debug', true)
      mongoose.set('debug', { color: true })
    }
    mongoose
      .connect(connectString)
      .then(() => console.log('Connected to MongoDB'))
      .catch((err) => console.log('Connect to MongoDB Error:', err))
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }
}

const instanceMongoDb = Database.getInstance()

module.exports = instanceMongoDb
