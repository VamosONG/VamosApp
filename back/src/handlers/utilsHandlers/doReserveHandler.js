const postTrip = require('../../controllers/tripsControllers/postTrip');
const getUserById = require('../../controllers/usersControllers/getUserById');
const sendMailHandler = require('../../utils/mailing/sendMailHandler');

module.exports=async(req,res)=>{
    const { userId, date, hour, origin, destination, quantityPassengers, price } = req.body;
    
    try {
        if(!userId || !date || !hour || !origin || !destination || !quantityPassengers || !price)
            throw new Error(`Error, no se recibieron los datos necesarios para crear la reserva.`)
        
        const driverId=null;
    
        const reserve=await postTrip({userId, driverId, date, hour, origin, destination, quantityPassengers, price});
        
        const usuario = await getUserById(userId);

         /* await sendMailHandler({
            id: userId,
            name: usuario.name,
            surname: usuario.surname,
            email: usuario.email,
            phone: usuario.phone,
            dni: usuario.dni, 
            driverId,
            tripId: reserve.id,
            option: "reserve"
        }); */
        res.status(200).json(reserve); 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}