const doReserve=require('../../Controllers/utilsControllers/doReserve');

module.exports=async(req,res)=>{
    const { userId, tripId } = req.body;
    
    try {
        const reserve=await doReserve(userId, tripId);
        //Actualiza el estado del viaje a RESERVADO.

        res.status(200).json(reserve);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}