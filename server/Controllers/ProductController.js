const Product = require('../Models/productModel')
const slugify = require('slugify')

const addProductController = async(req,res)=>{
    
    
    
 try {
    const {title,desc,price,category} = req.body;
    
    
    const  image = req.file.filename;
    
    const newProduct = await new Product({
      title,
      desc,
      price,
      category,
      image,
      slug:slugify(title)
  
    })
  
    await newProduct.save();
    return res.send({
      success: true,
      message: 'Product saved successfully',
      newProduct
    })
 } catch (error) {
    return res.send({
        success:false,
        message:error.message
    })
 }
}

const getProductsController = async(req, res) => {

    try {
        
const products = await Product.find()

res.send({
    success:true,
    products
})
    } catch (error) {
        res.send({success:false, error:"failed to get products"})
    }
}

const updateController = async (req, res) => {
    try {
        const updatedEventData = {
            title: req.body.title,
            desc: req.body.desc,
            category: req.body.category,
            image: req.file.filename,
            price:req.body.price,
            slugify: req.body.slugify

};
         const updateEvent = await Product.findByIdAndUpdate({_id:req.params.id},updatedEventData,{new:true})
        if(!updateEvent){
            throw new Error("Not found any sepecific Event!");
        }
        return res.status(200).json(updateEvent);
    } catch (error) {
        return res.status(400).json({error:error.message});
    }
}
 
//  delete controller

const deleteController = async(req,res)=>{
    
    try {
        
        const deleteProduct = await Product.findByIdAndDelete({_id:req.params.id})
        if(!deleteProduct){
            throw new Error("Event already deleted!")
        }
        return res.send({
            success:true,
            deleteProduct
        })
    } catch (error) {
        return res.send({
            success:false,
            error:error.message
        })
    }
}

// get single contoller

const getSingleContoller = async(req, res) => {
    try {
        const { id } = req.params;

    const  singleProduct = await Product.findById(id);

    return res.send({
        success:true,
        products: singleProduct,
        message:"Single product"
    })
    } catch (error) {
        res.send({
            success:true,
            message: error.message
        })
    }
    
}

module.exports = {getSingleContoller,addProductController,getProductsController,updateController,deleteController}