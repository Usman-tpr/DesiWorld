const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title:{
        type:String
    },
    slug:{
        type:String
    },
    desc:{
        type:String
    },
    price:{
        type:Number
    },
    category:{
        type:String
    },
    image:{
        type:String
    }


},
 {timestamps:true}
)

module.exports = mongoose.model('Product',productSchema)