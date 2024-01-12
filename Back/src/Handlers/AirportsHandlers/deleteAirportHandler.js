const deleteAirport = require('../../Controllers/AirportsControllers/deleteAirports');

module.exports=async(req,res)=>{
    const {id} = req.params;
    try{
        const deletedAirp=await deleteAirport(id);
 
        if(deletedAirp)
            res.status(200).json(deletedAirp);
        else
            res.status(404).send(`No existe aeropuerto con ID ${id}.`);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}