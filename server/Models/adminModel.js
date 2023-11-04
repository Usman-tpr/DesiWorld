const mongoose = require('mongoose');
const userAddressSchema = new mongoose.Schema({
    name:{
        type: 'string',
    },
    number:{
        type: 'String',
    },
    address:{
        type: 'string',
    },
    title:{
        type: 'string',
    },
    items:{
        type: 'Number'
    }
},
{timestamps:true}
)

module.exports = mongoose.model('Address',userAddressSchema);