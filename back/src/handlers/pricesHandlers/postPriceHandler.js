const postPrice=require('../../controllers/pricesControllers/postPrice');

module.exports=async(req,res)=>{
    const {airport, zone, quantityPassengers, value}=req.body;
    try {
        const newPrice=await postPrice(airport, zone, quantityPassengers, value);
    
        res.status(200).json(newPrice);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}