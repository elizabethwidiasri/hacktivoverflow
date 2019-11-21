const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const { emailValidator, passwordValidator } = require('../helpers/validator')
const { hashPassword } = require('../helpers/bcrypt')

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Please enter your username']
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    validate: emailValidator
  },
  password: {
    type: String,
    required: [true, 'Password cannot be empty'],
    validate: passwordValidator
  }
}, {
  versionKey: false,
  timestamps: true
})

userSchema.pre('save', function(next) {
  this.password = hashPassword(this.password)
  next()
})

userSchema.plugin(uniqueValidator)

const User = model('User', userSchema)

module.exports = User