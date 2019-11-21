// [CRUD]

const { Schema, model } = require('mongoose')

const questionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'Title cannot be empty']
  },
  description: {
    type: String,
    required: [true, 'Description cannot be empty']
  },
  upVotes: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  downVotes: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  answers: [{
    type: Schema.Types.ObjectId,
    ref: 'Answer'
  }],
  tags: {
    type: String
  }
}, {
  versionKey: false,
  timestamps: true
})

const Product = model('Question', questionSchema)

module.exports = Product