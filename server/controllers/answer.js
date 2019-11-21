const Answer = require('../models/answer')
const Question = require('..//models/question')

class AnswerController {
  static create (req, res, next) {
    let theAnswer = {}
    const userId = req.loggedUser._id
    const { description, questionId } =  req.body
    Answer.create({ userId, questionId, description})
      .then(answer => {
          theAnswer = answer
          return Question.update({ _id: req.body.questionId}, {$push: {answers: answer._id}})
      })
      .then(question => {
        res.status(200).json(theAnswer)
      })
      .catch(next)
  }
  static findAll (req, res, next) {
    const { userId } = req.loggedUser._id
    Answer.find( userId )
      .then(answers => {
        res.status(200).json(answers)
      })
      .catch(next)
  }
  static findOne (req, res, next) {
    const { id } = req.params
    Answer.findById({ _id: id})
      .then(answer => {
        res.status(200).json(answer)
      })
      .catch(next)
  }
  static update (req, res, next) {
    const { id } = req.params
    const { description } = req.body
    Answer.findByIdAndUpdate({ _id: id}, { description })
      .then(answer => {
        res.status(200).json(answer)
      })
      .catch(next)
  }
}

module.exports = AnswerController