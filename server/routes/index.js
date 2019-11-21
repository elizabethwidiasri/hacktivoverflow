const router = require('express').Router()

const userRouter = require('./user')
const questionRouter = require('./question')
const answerRouter = require('./answer')

router.get('/', (req, res, next) => {
  res.status(200).json({ hello: 'world'})
})

router.use('/users', userRouter)
router.use('/questions', questionRouter)
router.use('/answers', answerRouter)

module.exports = router