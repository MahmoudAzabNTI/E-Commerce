const router = require('express').Router()
const catController = require('../app/controllers/category.controller')
const upload = require('../app/middlewares/upload-file2')
const auth=require('../app/middlewares/auth')
const authorz=require('../app/middlewares/authorization')

router.post('/addCategory',catController.addCategory )
router.get('/show', catController.getAllCat)
router.delete('/deleteCategory/:id', catController.delCategory)
router.get('/showOneCategory/:id', catController.getSingCat) 
router.post('/editCategory/:id', catController.editCategory)

router.post('/upload/:catId',  auth,authorz,upload.single('upload'),catController.upload)



module.exports= router

