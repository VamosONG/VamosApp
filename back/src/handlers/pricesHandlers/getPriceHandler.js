const getPrices = require('../../controllers/pricesControllers/getPrices');

module.exports=async(req,res)=>{
    try{
        const {airport, zone} = req.body;
        const allPrices=await getPrices();
 
        if(airport && zone){
            const filtered=await allPrices?.filter((price=>price.airport.toLowerCase()===(airport.toLowerCase())) && (price=>price.zone.toLowerCase()===(zone.toLowerCase())));
            
            res.status(200).json(filtered);    //Retorna el arreglo tenga elementos o no.
        }
        else
            res.status(200).json(allPrices);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}