const router = require('express').Router()
const questionController = require('../controllers/question')
const { authentication, questionAuthorization } = require('../middlewares/auth')

router.get('/', questionController.findAll)

router.use(authentication)
router.post('/', questionController.create)
router.get('/:id', questionController.findOne)

router.use('/:id', questionAuthorization)
router.patch('/:id', questionController.update)
router.delete('/:id', questionController.delete)

module.exports = router