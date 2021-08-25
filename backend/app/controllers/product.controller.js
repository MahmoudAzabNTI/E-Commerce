const Product=require('../models/product.model')
const response=require('../helpers/response.helper')
var QRCode = require('qrcode')
const Category = require('../models/category.model')
const upload=require('../middlewares/upload-file')
const addProduct=async(req,res)=>{
    
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
}

const deleteProduct=async(req,res)=>{
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
}
const editProduct=async(req,res)=>{
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
}

const showAll=async(req,res)=>{
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
}
const showOne=async(req,res)=>{
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
}
const imgs=async (req,res)=>{
    console.log(req.body.userId)
    const data=await Product.findById(req.params.id)
    req.files.forEach(file=>{
        data.images.push(file.path) 
    })
    await data.save()
    res.send('okey')
} 

const showINcat= async(req,res)=>{
    id=req.params.id
    try{
        let data=await Category.findById(id)
       if(!data) throw new Error("this category is not found ")
      await data.populate({
           path:"catagoryProduct"
           
      
       }).execPopulate()
       const back=response(true,data.catagoryProduct,"this all product in category")
        res.status(200).send(back)
       
    }
    catch(e){
        const back=response(false,e.message,"error in show in category")
        res.status(500).send(back)
    }
}
module.exports={addProduct,deleteProduct,editProduct,showAll,showOne,imgs,showINcat}