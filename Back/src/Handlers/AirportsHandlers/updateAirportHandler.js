const updateAirport=require('../Controllers/airportControllers/updateAirport');

module.exports=async(req,res)=>{
    const {id,name}=req.body;
    try {
        const updAirport=await updateAirport(id,name);
    
        res.status(200).json(updAirport);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}