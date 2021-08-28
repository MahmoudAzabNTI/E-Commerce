const router = require('express').Router()
const catController = require('../app/controllers/category.controller')
const upload = require('../app/middlewares/upload-file2')
const auth=require('../app/middlewares/auth')
const authorz=require('../app/middlewares/authorization')

router.post('/addCategory',auth,authorz,catController.addCategory )
router.get('/showAll/', catController.getAllCat)
router.delete('deleteCategory/:id',auth,authorz, catController.delCategory)
router.get('/showOneCategory/:id', catController.getSingCat) 
router.patch('/editCategory/:id', auth,authorz,catController.editCategory)

router.post('/upload/:catId',  auth,authorz,upload.single('upload'),catController.upload)



module.exports= router

