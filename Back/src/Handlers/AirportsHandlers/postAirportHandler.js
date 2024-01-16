const {postAirport} =require('../../Controllers/AirportsControllers/postAirport');

module.exports=async(req,res)=>{
    const {place}=req.body;
    try {
        const newAirp=await postAirport(place);
    
        res.status(200).json(newAirp);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}