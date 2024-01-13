const setDriver=require('../../Controllers/utilsControllers/setDriver');

module.exports=async(req,res)=>{
    const { tripId, driverId } = req.body;
    
    try {
        const tripUpdated=await setDriver(tripId, driverId);
        //Actualiza el estado del viaje a RESERVADO.

        res.status(200).json(tripUpdated);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}