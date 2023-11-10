const Address = require('../Models/adminModel');

const addController = async (req,res)=>{
try {
    const {name , number , address , title , items,city,province } = req.body;
    if(!name || !number  || !address ){
        throw Error("Please fill all the fields")
    }
    const addAddress = await Address({
        name,
        number,
        address,
        title,
        items,
        city,
        province
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

 const deleteController = async (req, res) => {
         try {
            
             const deleteitem = await Address.findByIdAndDelete(req.params.id)
             res.send({
                success: true,
                deleteitem

             })
         } catch (error) {
            res.send({
                success: false,
                error: error.message
            })
            console.log(error.message)
         }
 }
module.exports ={ addController , getController , deleteController}