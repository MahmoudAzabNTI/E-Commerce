const router = require('express').Router();
const userController = require('../app/controllers/user.contoller')
const auth = require('../app/middlewares/auth')
const authorz=require('../app/middlewares/authorization')
const upload = require('../app/middlewares/upload')

router.post('/add',auth,authorz, userController.addUser)
router.get('/all',auth,authorz,userController.showAllUsers)
router.get('/:id',auth, authorz,userController.showSingleUser)
router.put('/:id',auth, authorz,userController.editUser)
router.delete('/:id',auth,authorz,userController.deleteUser)
router.post('/profile', auth, authorz,upload.single('image'), userController.uploadImage)
module.exports = router;