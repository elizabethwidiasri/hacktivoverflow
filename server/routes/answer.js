const router = require('express').Router()
const answerController = require('../controllers/answer')
const { authentication, answerAuthorization } = require('../middlewares/auth')


router.use(authentication)
router.get('/', answerController.findAll)
router.post('/', answerController.create)
router.get('/:id', answerController.findOne)

router.use('/:id', answerAuthorization) 
router.patch('/:id', answerController.update)

module.exports = router