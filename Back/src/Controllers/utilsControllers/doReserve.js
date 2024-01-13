const {User, Trip} = require('../../dataBase');

const doReserve = async (userId, tripId) => {
    try {
        const newReservation = await Trip.findByPk(tripId);
        const userRes = await User.findByPk(userId);
        
        if(!newReservation || newReservation.stateOfTrip!='offer')
            throw new Error(`No se encontro trip en oferta con id ${tripId} en base de datos.`)
        if(!userRed)
            throw new Error(`No se encontro usuario con id ${userId} en base de datos.`)
        
        //Se modifica el trip, con el estado a RESERVADO, y el id correspondiente al usuario.
        await newReservation.update(
            {
                userId: userId,
                stateOfTrip: 'reserved'
            }
        )
        await newReservation.reload();

        return newReservation;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = doReserve;