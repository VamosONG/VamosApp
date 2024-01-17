const getAirports = require('../../controllers/airportsControllers/getAirports');

module.exports=async(req,res)=>{
    try{
        const {place} = req.query;
        const allAirports=await getAirports(place);
 
        if(allAirports.length > 0){
            // const filtered=await allAirports?.filter((airp=>airp.place && airp.place.toLowerCase().includes(place.toLowerCase())));
            
            res.status(200).json(allAirports);    
        }
        else
            // res.status(200).json(allAirports);
            throw new Error('No Airports found');
    }catch(error){
        res.status(400).json({error: error.message});
    }
}