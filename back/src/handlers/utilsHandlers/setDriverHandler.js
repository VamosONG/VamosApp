const { getTripById } = require('../../controllers/tripsControllers/getTripById');
const getUserById = require('../../controllers/usersControllers/getUserById');
const setDriver=require('../../controllers/utilsControllers/setDriver');
const sendMailHandler = require('../../utils/mailing/sendMailHandler');

module.exports=async(req,res)=>{
    const { tripId, driverId } = req.body;
    
    try {
        const tripUpdated=await setDriver(tripId, driverId);
        //Actualiza el estado del viaje a PENDIENTE.

        const trip = await getTripById(tripId);
        const usuario = await getUserById(trip.userId);
        const assignDriverEmail = await sendMailHandler({
            id: usuario.id,
            name: usuario.name,
            surname: usuario.surname,
            email: usuario.email,
            phone: usuario.phone,
            dni: usuario.dni, 
            driverId,
            tripId,
            option: "assignDriver"
        });
        const infoDriverEmail = await sendMailHandler({
            id: usuario.id,
            name: usuario.name,
            surname: usuario.surname,
            email: usuario.email,
            phone: usuario.phone,
            dni: usuario.dni, 
            driverId,
            tripId,
            option: "infoDriver"
        });

        res.status(200).json(tripUpdated);
    } catch (error) {
        res.status(400).json(`Error al asignar chofer: ${error.message}`)
    }
}