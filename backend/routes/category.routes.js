const router = require('express').Router()
const catController = require('../app/controllers/category.controller')
const upload = require('../app/middlewares/upload-file2')


router.post('/addCategory',catController.addCategory )
router.get('/showAll/', catController.getAllCat)
router.delete('deleteCategory/:id', catController.delCategory)
router.get('/showOneCategory/:id', catController.getSingCat) 
router.patch('/editCategory/:id', catController.editCategory)

// router.post('/upload',  upload.sigle('upload'),dataController.upload)



module.exports= router
