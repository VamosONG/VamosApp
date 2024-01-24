const postTrip = require('../../controllers/tripsControllers/postTrip');

module.exports=async(req,res)=>{
    const { userId, date, hour, origin, destination, quantityPassengers, price } = req.body;
    
    try {
        if(!userId || !date || !hour || !origin || !destination || !quantityPassengers || !price)
            throw new Error(`Error, no se recibieron los datos necesarios para crear la reserva.`)
        
        const driverId=null;
    
        const reserve=await postTrip({userId, driverId, date, hour, origin, destination, quantityPassengers, price});

        res.status(200).json(reserve);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}