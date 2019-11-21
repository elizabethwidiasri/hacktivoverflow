// [CRU]

const { Schema, model } = require('mongoose')

const answerSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'Question'
  },
  description: {
    type: String,
    required: [true, 'Description cannot be empty']
  },
  upVotes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  downVotes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  versionKey: false,
  timestamps: true
})

const Answer = model('Answer', answerSchema)

module.exports = Answer