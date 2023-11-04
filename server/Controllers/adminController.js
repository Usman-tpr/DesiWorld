const Address = require('../Models/adminModel');

const addController = async (req,res)=>{
try {
    const {name , number , address , title , items } = req.body;

    const addAddress = await Address({
        name,
        number,
        address,
        title,
        items
    });

    
     await addAddress.save();
    res.send({
        success: true,
        addAddress
    })
} catch (error) {
    res.send({
        success: false,
        error: error.message
    })
}
    
}

const getController = async (req, res) => {
    try {
        const allAddresses = await Address.find();
        res.send({
            success: true,
            Address: allAddresses
        })
    } catch (error) {
        res.send({
            success: false,
            error: error.message
        })
    }

}
module.exports ={ addController , getController}