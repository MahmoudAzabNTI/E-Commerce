
const router = require('express').Router();
const authController = require('../app/controllers/auth.controller');
const auth = require('../app/middlewares/auth')
router.post('/register', authController.registerUser)
router.post('/login', authController.loginUser)
router.get('/activate/:id', authController.activateUser)
router.get('/me', auth, authController.loggedUser)
router.post('/logout',auth, authController.logoutUser)
router.post('/logout-all',auth, authController.logoutAllUser)

module.exports = router;