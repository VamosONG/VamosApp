const updatePrice=require('../../controllers/pricesControllers/updatePrice');

module.exports=async(req,res)=>{
    const {airport,zone, quantityPassengers, value}=req.body;
    try {
        const updPrice=await updatePrice(airport,zone, quantityPassengers, value);
    
        res.status(200).json(updPrice);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}