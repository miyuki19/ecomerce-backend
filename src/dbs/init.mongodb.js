'use strict'

const mongoose = require('mongoose')
const {
  db: { host, name, port },
} = require('../configs/config.app')
const connectString = `mongodb://${host}:${port}/${name}`
console.log(connectString)
const { countConnect } = require('../helpers/check.connect')

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
      .then(() => console.log('Connected to MongoDB!', countConnect()))
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
