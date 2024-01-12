const filters=require('../../Controllers/filtersControllers/filtersController');

module.exports=async(req,res)=>{
    const {origin, destination, date, hour, cantPassengers}=req.body;
    
    try {
        const reserva=await filters(origin, destination, date, hour, cantPassengers);
        //Crea una oferta de trip con ese filtro.

        res.status(200).json(reserva);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}