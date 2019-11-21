const router = require('express').Router()
const userController = require('../controllers/user')

router.post('/signup', userController.register)
router.post('/login', userController.login)

module.exports = router