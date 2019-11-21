const Question = require('../models/question')

class QuestionController {
  static create (req, res, next) {
    const  userId  = req.loggedUser._id
    const { title, description } = req.body

    Question.create({ userId, title, description})
      .then(question => {
        res.status(201).json({ message: 'Successfuly creating your question', question})
      })
      .catch(next)
  }

  static findAll (req, res, next) {
    Question.find()
      .then(question => {
        res.status(200).json(question)
      })
      .catch(next)
  }
  static findOne (req, res, next) {
    const { id } = req.params
    Question.findById(id)
      .then(question => {
        res.status(200).json(question)
      })
      .catch(next)
  }
  static update (req, res, next) {
    const { id } = req.params
    const {  title, description } = req.body

    Question.findByIdAndUpdate(id, { title, description }, {
      omitUndefined: true,
      new: true,
      runValidators: true
    })
      .then(question => {
        res.status(200).json(question)
      })
      .catch(next)
  }
  static delete (req, res, next) {
    const { id } = req.params
    Question.findByIdAndDelete(id)
      .then(question => {
        res.status(200).json(question)
      })
      .catch(next)
  }

  static upVoteQ (req, res, next) {
    const { id } = req.params
    const userId = req.loggedUser._id
    Question.updateOne({ _id: id}, {$push: { upvotes: userId}})
      .then(vote => {
        res.status(200).json(vote)
      })
      .catch(next)
  }
  
  static downVoteQ (req, res, next) {
    const { id } = req.params
    const userId = req.loggedUser._id
    Question.updateOne({ _id: id}, {$push: { downvotes: userId}})
      .then(vote => {
        res.status(200).json(vote)
      })
      .catch(next)
  }
}

module.exports = QuestionController