const express=require('express')
const router=new express.Router()
const proController=require('../app/controllers/product.controller')
const Product=require('../app/models/product.model')
const upload=require('../app/middlewares/upload-file')  //done//





router.post('/addProduct',proController.addProduct)

router.post('/deleteProduct/:id',proController.deleteProduct)

router.post('/editProduct/:id',proController.editProduct)

router.get('/showAll',proController.showAll)

router.get('/showOne/:id',proController.showOne)
router.post('/profile/:id', upload.array('images', 4),proController.imgs)

router.get('/productsInCategory/:id',proController.showINcat )
// // router.get('/myPosts/:id', async(req,res)=>{
// //     id=req.params.id
// //     try{
// //         let posts = await Product.find({categoryId:id})
// //         res.send(posts)
// //     }
// //     catch(e){
// //         res.send(e)
// //     }
// // })


module.exports=router