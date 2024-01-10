const postAirport=require('../Controllers/airportsController/postAirport');

module.exports=async(req,res)=>{
    const {name}=req.body;
    try {
        const newAirp=await postAirport(name);
    
        res.status(200).json(newAirp);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}