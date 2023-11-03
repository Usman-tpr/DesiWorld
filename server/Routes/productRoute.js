const express = require('express');
const route = express.Router();
const {getSingleContoller , addProductController , getProductsController , updateController, deleteController}  = require('../Controllers/ProductController');

const multer =require("multer")
const  path  = require("path")

const storage = multer.diskStorage({
    destination : (req , file , cb) => {

        cb(null , 'uploads/images')
    } , 
    filename : (req , file , cb) => {
        cb(null , file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage : storage
})

route.post('/addProduct', upload.single("image") ,addProductController)
route.get('/getProducts',getProductsController)
route.get('/singleProduct/:id',getSingleContoller)
route.post('/update/:id',upload.single("image"),updateController)
route.delete('/deleteProduct/:id',deleteController)

module.exports = route