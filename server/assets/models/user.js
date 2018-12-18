let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

//bcrypt uses hashing and salt to obfiscate your password 
let bcrypt = require('bcryptjs')
const SALT = 10

let reviewSchema = new Schema({
  ratings: { type: Number, min: 1, max: 5, required: true },
  content: { type: String, required: true },
  created: { type: Number, required: true, default: Date.now() }
})

let schema = new Schema({
  name: { type: String, required: true },
  //every email must be unique on the database
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  zipcode: { type: Number, required: true },
  reviews: [reviewSchema],
  created: { type: Number, required: true, default: Date.now() },
  isHost: { type: Boolean, default: false },
  img: { type: String },
  description: { type: String },
  price: { type: Number },
  address: { type: String }
}, {
    usePushEach: true
  })



//statics are used to create Model methods
schema.statics.generateHash = function (password) {
  return bcrypt.hashSync(password, SALT)
}

//schema.methods are used to add a method to a Model instance
schema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', schema)