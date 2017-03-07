const mongoose = require( 'mongoose' )
const schema = {
  name: {
      firstname: {
          type: String,
          required: true
      },
      lastname: {
          type: String,
          required: true
      }
  },
  age: {
      type: Number,
      required: true
  },
  date: {
      type: Date,
      default: Date.now
  }
}

const Schema = mongoose.Schema( schema )

module.export = mongoose.model( 'Person', person )
