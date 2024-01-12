const filters=require('../Controllers/filtersController');

module.exports=async(req,res)=>{
    const {origin, destination,cantPassengers}=req.body;
    
    try {
        const reserva=await filters(origin, destination,cantPassengers);
        //Crea una oferta de trip con ese filtro.

        res.status(200).json(reserva);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}