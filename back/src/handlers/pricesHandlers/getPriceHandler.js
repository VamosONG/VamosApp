const getPrices = require('../../controllers/pricesControllers/getPrices');

module.exports=async(req,res)=>{
    try{
        const {airport, zone, quantityPassengers} = req.body;
        const cost=await getPrices(airport, zone, quantityPassengers);
 
        res.status(200).json(cost);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}