const User = require('../models/user')
const { decodeToken } = require('../helpers/jwt')
const Question = require('../models/question')
const Answer = require('../models/answer')

const authentication = (req, res, next) => {
  console.log(req.headers, "ini headersssssss")
  User.findById(decodeToken(req.headers.token).id) //mengambil id obj yg telah di decode
    .then(user => {
      if (!user) {
        throw {status : 401, message : `you have to login first`}
      } else {
        console.log(user);
        
        req.loggedUser = user
        next()
      }
    })
    .catch(next)
}


const questionAuthorization = (req, res, next) => {
 const { id } = req.params
 Question.findById(id)
  .then(question => {
    if (!question) {
      throw {status: 400, message: `there's no such question`}
    } else {
      if (question.userId == req.loggedUser.id) {
        next()
      } else {
        throw {status: 401, message: 'You are not authorized to perform this task'}
      }
    }
  })
  .catch(next)
}

const answerAuthorization = (req, res, next) => {
  const { id } = req.params
  Answer.findById(id)
    .then(answer => {
      if (!answer) {
        throw {status: 400, message: `there's no such answer`}
      } else {
        if (answer.userId == req.loggedUser._id) {
          next()
        } else {
          throw {status: 401, message: 'you are not authorized to perform this task'}
        }
      }
    })
}


module.exports = {
  authentication,
  answerAuthorization,
  questionAuthorization
}