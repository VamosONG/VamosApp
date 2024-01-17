const {updateAirport}=require('../../Controllers/AirportsControllers/updateAirports');

module.exports=async(req,res)=>{
    // const {id,name}=req.body;
    const { id } = req.params;
    const { name } = req.body;
    try {
        const updAirport=await updateAirport(id,name);
    
        res.status(200).json(updAirport);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}