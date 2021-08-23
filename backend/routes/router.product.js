const express=require('express')
const router=new express.Router()
const response=require('../app/helpers/response.helper')  //done//
const Product=require('../app/models/product.model') //done//
var QRCode = require('qrcode')
 
const upload=require('../app/middlewares/upload-file')  //done//
const { Mongoose } = require('mongoose')


router.post('/addProduct',async(req,res)=>{
    
    try{
        let insertProduct= new Product(req.body)
        QRCode.toString('I am a pony!',function (err, url) {
            insertProduct.qr= (url)
          })
        await insertProduct.save()
        const back=response(true,insertProduct,"there is this product")
        res.send(back)
    }
    catch(e){
        const back=response(false,e.message,"there is not found")
        res.send(back)
    }
})

router.post('/deleteProduct/:id',async(req,res)=>{
    id=req.params.id
    try{
        const data=await Product.findByIdAndDelete(id)
       
        if(!data){
            const back=response(false,null,"there is not found")
            res.status(404).send(back)
        } 
        const back=response(true,data,"deleted")
        res.status(200).send(back)
        
    }
    catch(e){
        const back=response(false,e.message,"error in delete")
        res.status(500).send(back)
    }
})

router.post('/editProduct/:id',async(req,res)=>{
    id=req.params.id
    try{
        const data=await Product.findByIdAndUpdate(id,req.body,{new:true})
        if(!data){
            const back=response(false,null,"there is not found")
            res.status(404).send(back)
        }
        const back=response(true,data,"edited")
        res.status(200).send(back)
    }
    catch(e){
        const back=response(false,e.message,"error in delete")
        res.status(500).send(back)
    }
})

router.get('/showAll',async(req,res)=>{
    try{
    const data=await Product.find()
    if(!data){
        const back=response(false,null,"there is not found")
        res.status(404).send(back)
    }
    const back=response(true,data,"show all products")
    res.status(200).send(back)
    }
    catch(e){
    const back=response(false,e.message,"error in delete")
    res.status(500).send(back)
    }
})

router.get('/showOne/:id',async(req,res)=>{
    id=req.params.id;
    try{
        const data=await Product.findById(id)
        
        if(!data){
            const back=response(false,null,"there is not found")
            res.status(404).send(back)
        }
        const back=response(true,data,"show all products")
        res.status(200).send(back)
    }
    catch(e){
        const back=response(false,e.message,"error in delete")
        res.status(500).send(back)
    }
})
router.post('/profile/:id', upload.array('images', 4),async (req,res)=>{
    console.log(req.body.userId)
    const data=await Product.findById(req.params.id)
    req.files.forEach(file=>{
        data.images.push(file.path) 
    })
    await data.save()
    res.send('okey')
} )

module.exports=router