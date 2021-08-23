const router = require('express').Router();
const userController = require('../app/controllers/user.contoller')
const auth = require('../app/middlewares/auth')
const upload = require('../app/middlewares/upload')
router.post('/add',auth, userController.addUser)
router.get('/all',auth, userController.showAllUsers)
router.get('/:id',auth, userController.showSingleUser)
router.put('/:id',auth, userController.editUser)
router.delete('/:id',auth, userController.deleteUser)
router.post('/profile', auth, upload.single('image'), userController.uploadImage)
module.exports = router;